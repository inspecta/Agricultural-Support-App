import React, { useState, useEffect } from "react"
import { SafeAreaView } from "react-native-safe-area-context"
import CreditScreenHeader from "../Headers/CreditScreenHeader"
import { View, Text, ScrollView } from "react-native"
import InputText from "../Inputs/InputText"
import ButtonAction from "../Buttons/ButtonAction"
import { screenStyles } from "../../screens/screenStyles"
import TransactionRecord from "../TransactionRecord"
import LoadingIndicator from "../../screens/Notifications/LoadingIndicator"
import CustomModal from "../../screens/Notifications/CustomModal"
import { useNavigation } from "@react-navigation/native"
import { useGetTotalLoanBalanceQuery } from "../../services/slices/transactionSlice"
import axios from "axios"

interface BorrowingProps {
  user: {
    name: string
    balance: number
    id: number
    phoneNumber: string
  }
}

const Borrowing: React.FC<BorrowingProps> = ({ user }) => {
  const navigation = useNavigation()

  const [creditScore, setCreditScore] = useState(0)
  const [borrowAmount, setBorrowAmount] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")
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
          `https://agromocredit.onrender.com/calculate-credit-score/${user.id}`
        )
        setCreditScore(response.data)
      } catch (error) {
        console.error("Error fetching credit score:", error)
      }
    }

    fetchCreditScore()
  }, [user.id])

  /** The maximum loan a user can get at the moment */
  const maximum_possible_loan = (creditScore / 10) * MAXIMUM_BORROWING_AMOUNT

  // Check if the user has a loan available
  const { data: currentLoans } = useGetTotalLoanBalanceQuery(user.id)

  const user_maximum_amount = maximum_possible_loan - currentLoans

  /*** Handle borrowing money */
  const handleBorrowing = async () => {
    if (+borrowAmount > +user_maximum_amount) {
      setErrorMessage("You can't borrow more than " + user_maximum_amount)
    } else if (+borrowAmount < 9999) {
      setErrorMessage("You can't borrow less than UgShs 10,000")
    } else {
      setIsLoading(true)
      try {
        const saveLoanUrl = `https://agromocredit.onrender.com/save-loan/${user.id}`
        const response = await axios.post(saveLoanUrl, {
          amount: borrowAmount,
          interest_rate: 6,
          loan_provider_id: 1,
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
    <View style={screenStyles.contentContainer}>
      <View style={screenStyles.creditScreenSubTitleText}>
        <Text>ENTER AMOUNT TO BORROW</Text>
        {errorMessage && (
          <Text
            style={{
              color: "red",
              fontSize: 15,
              marginTop: 10,
              textAlign: "center",
              backgroundColor: "rgba(255, 0, 0, 0.26)",
              padding: 5,
              borderRadius: 5,
            }}
          >
            {errorMessage}
          </Text>
        )}
        <Text style={{ fontSize: 13, color: "red" }}>Interest Rate: 8.0%</Text>
        <View style={screenStyles.creditScreenSubTitleText}>
          <Text>ENTER AMOUNT TO BORROW</Text>
          {/* {errorMessage && <Text>{errorMessage}</Text>} */}
          <InputText
            txtStyle={screenStyles.creditScreenTextInput2}
            labelText="Amount you want to borrow!"
            value={borrowAmount}
            onChangeText={setBorrowAmount}
            keyboardType="numeric"
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
          user={user}
        />
      </View>
    </View>
  )
}

export default Borrowing
