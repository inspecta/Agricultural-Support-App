import React, { useState } from "react"
import { SafeAreaView } from "react-native-safe-area-context"
import { Text, View } from "react-native"
import CreditScreenHeader from "../Headers/CreditScreenHeader"
import { RadioButton } from "react-native-paper"
import InputText from "../Inputs/InputText"
import ButtonAction from "../Buttons/ButtonAction"
import { screenStyles } from "../../screens/screenStyles"
import TransactionRecord from "../TransactionRecord"
import { useGetTotalLoanBalanceQuery } from "../../services/slices/transactionSlice"
import CustomModal from "../../screens/Notifications/CustomModal"
import { useNavigation } from "@react-navigation/native"
import axios from "axios"

interface PayLoanProps {
  user: {
    name: string
    balance: number
    id: number
    phoneNumber: string
  }
}
const PayLoan: React.FC<PayLoanProps> = ({ user }) => {
  const { data: currentLoanAmount } = useGetTotalLoanBalanceQuery(user.id)
  const [amount, setAmount] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")
  const [notificationVisible, setNotificationVisible] = useState(false)
  const [transactionDetails, setTransactionDetails] = useState({
    amount: "",
    loanProvider: "",
    reason: "",
  })
  const navigation = useNavigation()

  const handlePayLoan = async () => {
    setIsLoading(true)

    if (user.balance < +amount) {
      setErrorMessage("Insufficient balance to pay loan.")
    } else {
      setIsLoading(true)
      try {
        const saveLoanUrl = `https://agromocredit.onrender.com/save-loan/${user.id}`
        const response = await axios.post(saveLoanUrl, {
          amount: -amount,
          interest_rate: 6,
          loan_provider_id: 1,
          user_id: user.id,
        })

        if (response.status === 200) {
          setIsLoading(false)

          setTransactionDetails({
            amount: amount,
            loanProvider: "AGROMOCREDIT",
            reason: "PAYING OFF LOAN",
            paymentDate: new Date().toLocaleDateString(),
            transactionType: "LOAN PAYMENT",
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
      <Text style={screenStyles.creditScreenSubTitleText}>
        OUTSTANDING LOANS
      </Text>
      <Text style={screenStyles.creditScreenMajorText}>
        UGX {currentLoanAmount.toLocaleString()}
      </Text>
      {/* <View style={screenStyles.recordContainer}>
                <TransactionRecord
                    recordDate=""
                    recordValue="MULUNDO SAM"
                    recordIcon=""
                    recordSubject="WEED MASTER"
                    recordSubAttr1="UGX 498,000"
                    recordSubAttr2="UGX 500,000"
                    recordDated={false}
                    detailsIcon={false}
                    creditScreen={true}    
                />
                <TransactionRecord
                    recordDate=""
                    recordValue="MTN"
                    recordIcon=""
                    recordSubject="GENERAL"
                    recordSubAttr1="UGX 50,000"
                    recordSubAttr2="UGX 150,000"
                    recordDated={false}
                    detailsIcon={false}
                    creditScreen={true}    
                />
            </View> */}
      <View>
        <Text>AMOUNT</Text>
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
        <InputText
          txtStyle={screenStyles.creditScreenTextInput}
          labelText="AMOUNT TO PAY"
          value={amount}
          onChangeText={setAmount}
        />
        <ButtonAction
          onPress={() => handlePayLoan()}
          buttonText="PAY"
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
  )
}

export default PayLoan
