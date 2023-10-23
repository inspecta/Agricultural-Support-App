import React, { useState, useEffect } from "react"
import { SafeAreaView } from "react-native-safe-area-context"
import CreditScreenHeader from "../../components/Headers/CreditScreenHeader"
import { View, Text, ScrollView } from "react-native"
import InputText from "../../components/Inputs/InputText"
import ButtonAction from "../../components/Buttons/ButtonAction"
import { screenStyles } from "../screenStyles"
import TransactionRecord from "../../components/TransactionRecord"
import LoadingIndicator from "../Notifications/LoadingIndicator"
import CustomModal from "../Notifications/CustomModal"
import { useNavigation } from "@react-navigation/native"
import axios from "axios"

interface User {
  name: string
  balance: number
  id: number
  phoneNumber: string
}

interface DashboardScreenProps {
  route: {
    params: {
      user: User
    }
  }
}

const BorrowingScreen: React.FC<DashboardScreenProps> = ({ route }) => {
  const { user } = route.params
  const navigation = useNavigation()

  const [creditScore, setCreditScore] = useState(0)
  const [borrowAmount, setBorrowAmount] = useState("")
  const [isLoading, setIsLoading] = React.useState(false)
  const [notificationVisible, setNotificationVisible] = useState(false)
  const [transactionDetails, setTransactionDetails] = useState({
    amount: "",
    loanProvider: "",
    reason: "",
  })

  /** Maximum amount a user can borrow at the moment */
  const MAXIMUM_BORROWING_AMOUNT = 1000000

  useEffect(() => {
    const fetchCreditScore = async () => {
      try {
        const response = await axios.get(
          `http://192.168.1.117:8080/calculate-credit-score/${user.id}`
        )
        setCreditScore(response.data)
      } catch (error) {
        console.error("Error fetching credit score:", error)
      }
    }

    fetchCreditScore()
  }, [user.id])

  /** The maximum loan a user can get at the moment */
  const user_maximum_amount = (
    (creditScore / 10) *
    MAXIMUM_BORROWING_AMOUNT
  ).toLocaleString()

  /*** Handle borrowing money */
  const handleBorrowing = async () => {
    if (+borrowAmount < +user_maximum_amount && +borrowAmount > 10000) {
      console.log("Cannot borrow more than " + user_maximum_amount)
    } else {
      setIsLoading(true)

      try {
        const saveLoanUrl = `http://192.168.1.117:8080/save-loan/${user.id}`
        const response = await axios.post(saveLoanUrl, {
          amount: borrowAmount,
          interest_rate: 6,
          loan_provider_id: 2,
          user_id: user.id,
        })

        if (response.status === 200) {
          setIsLoading(false)

          setTransactionDetails({
            amount: borrowAmount,
            loanProvider: "AGROMOCREDIT",
            reason: "MONEY ON CREDIT",
            paymentDate: new Date().toLocaleDateString(),
            transactionType: "LOAN",
          })

          setNotificationVisible(true)
        }
      } catch (error) {
        console.error("Error saving loan:", error)
        setIsLoading(false)
      }
    }
  }

  const handleOK = () => {
    setNotificationVisible(false)
    navigation.navigate("Dashboard", {
      user: user,
    })
  }

  return (
    <SafeAreaView>
      <ScrollView style={screenStyles.creditScreenContainer}>
        <CreditScreenHeader screenTitle="CREDIT STATUS" activeButton="borrow" />
        <View style={screenStyles.contentContainer}>
          <Text style={screenStyles.creditScreenSubTitleText}>
            YOU CAN BORROW UP TO
          </Text>
          <Text style={screenStyles.creditScreenMajorText}>
            UGX {user_maximum_amount}{" "}
          </Text>
          <Text style={{ fontSize: 13, color: "red" }}>Interest Rate: 8.0%</Text>
          {/* 
          <View style={screenStyles.recordContainer}>
            {loanDetails.map((loanDetail) => {
              console.log(loanDetail)
              return (
                <TransactionRecord
                  key={loanDetail.id}
                  recordDate="15 SEP"
                  recordValue="MULUNDO SAM"
                  recordIcon=""
                  recordSubject="WEED MASTER"
                  recordSubAttr1="UGX 498,000"
                  recordSubAttr2="UGX 500,000"
                  recordDated={true}
                  detailsIcon={false}
                  creditScreen={true}
                />
              )
            })}
          </View> */}
          <View style={screenStyles.creditScreenSubTitleText}>
            <Text>ENTER AMOUNT TO BORROW</Text>
            {/* {errorMessage && <Text>{errorMessage}</Text>} */}
            <InputText
              txtStyle={screenStyles.creditScreenTextInput2}
              labelText="Amount you want to borrow!"
              value={borrowAmount}
              onChangeText={setBorrowAmount}
            />
            <ButtonAction
              onPress={() => handleBorrowing()}
              buttonText="BORROW"
              buttonStyles={screenStyles.creditBtnStyles}
              buttonTxtStyles={screenStyles.creditBtnTextStyles}
            />
          </View>
          {/* Notification Modal */}
          <CustomModal
            visible={notificationVisible}
            onClose={handleOK}
            transactionDetails={transactionDetails}
          />
        </View>
        {isLoading && LoadingIndicator()}
      </ScrollView>
    </SafeAreaView>
  )
}

export default BorrowingScreen
