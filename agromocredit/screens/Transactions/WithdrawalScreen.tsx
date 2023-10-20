import React, { useState, useEffect } from "react"
import { View, Text, TextInput, Button } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import generateAccessTokenDisbursement from "../../functions/GenerateTokenDisbursement"
import generateNewReferenceId from "../../functions/GenerateReferenceId"
import axios from "axios"
import LoadingIndicator from "../Notifications/LoadingIndicator"
import CustomModal from "../Notifications/CustomModal"
import { useNavigation } from "@react-navigation/native"

const WithdrawScreen: React.FC = ({ route }) => {
  const [isLoading, setIsLoading] = useState(false)
  const [notificationVisible, setNotificationVisible] = useState(false)
  const [withdrawalError, setWithdrawalError] = useState("")
  const [currentBalance, setCurrentBalance] = useState<number | null>(null)

  const fetchBalance = async () => {
    try {
      const response = await axios.get(
        `http://192.168.1.117:8080/${route.params.user.id}/get-balance`
      )
      setCurrentBalance(response.data)
    } catch (error) {
      console.error("Error fetching balance :", error)
    }
  }

  useEffect(() => {
    fetchBalance()

    const intervalId = setInterval(() => {
      fetchBalance()
    }, 5000)

    return () => clearInterval(intervalId)
  }, [])

  const [formValues, setFormValues] = useState({
    amount: "",
    reason: "",
  })

  const handleInputChange = (name: string, value: string) => {
    setFormValues({
      ...formValues,
      [name]: value,
    })
  }

  const [transactionDetails, setTransactionDetails] = useState({
    amount: "",
    payerNumber: "",
    reason: "",
  })

  const navigation = useNavigation()
  const { user } = route.params

  const handleWithdrawal = async () => {
    setIsLoading(true)

    const withdrawalAmount = parseFloat(formValues.amount)

    if (isNaN(withdrawalAmount)) {
      setWithdrawalError("Please enter a valid amount.")
      setIsLoading(false)
    } else if (withdrawalAmount > currentBalance) {
      setWithdrawalError("Withdrawal amount exceeds available balance.")
      setIsLoading(false)
    } else if (withdrawalAmount < 500) {
      setWithdrawalError("Minimum withdraw amount is 500.")
      setIsLoading(false)
    } else {
      setWithdrawalError("")

      const newReferenceId = await generateNewReferenceId()
      const accessToken = await generateAccessTokenDisbursement()

      const withdrawParams = {
        amount: formValues.amount,
        currency: "EUR",
        externalId: "string",
        payee: {
          partyIdType: "MSISDN",
          partyId: user.phoneNumber,
        },
        payerMessage: formValues.reason,
        payeeNote: "AGRIC APP WITHDRAW",
      }

      const headers = {
        "Ocp-Apim-Subscription-Key": "470c1840a2ef48bbaf89b701f39f9d30",
        "X-Reference-Id": newReferenceId,
        "X-Target-Environment": "sandbox",
        Authorization: `Bearer ${accessToken}`,
      }

      try {
        const response = await axios.post(
          "https://sandbox.momodeveloper.mtn.com/disbursement/v1_0/deposit",
          withdrawParams,
          {
            headers,
          }
        )

        if (response.status === 202) {
          const transactionData = {
            amount: formValues.amount,
            description: withdrawParams.payerMessage,
            partyInvolved: withdrawParams.payee.partyId,
            transactionType: "Withdraw",
            transactionDate: new Date().toISOString(),
          }

          setTransactionDetails({
            amount: transactionData.amount,
            payerNumber: transactionData.partyInvolved,
            reason: transactionData.description,
          })

          setNotificationVisible(true)

          await axios.post(
            `http://192.168.1.117:8080/add-transaction?userId=${route.params.user.id}`,
            transactionData
          )

          setIsLoading(false)
        } else {
          console.log("Could not complete transaction.")
        }
      } catch (error) {
        console.error(error)
        setIsLoading(false)
      }
    }
  }

  const handleOK = () => {
    setNotificationVisible(false)
    navigation.navigate("Dashboard", {
      user,
    })
  }

  return (
    <SafeAreaView>
      <Text>WITHDRAW MONEY</Text>
      <View>
        <Text>AVAILABLE BALANCE</Text>
        <Text>{currentBalance}</Text>
      </View>
      <View>
        <Text>Owner: {user.phoneNumber}</Text>
      </View>

      {withdrawalError ? (
        <Text style={{ color: "red" }}>{withdrawalError}</Text>
      ) : null}

      <TextInput
        placeholder="Amount"
        value={formValues.amount}
        onChangeText={(text) => handleInputChange("amount", text)}
      />
      <TextInput
        placeholder="Reason"
        value={formValues.reason}
        onChangeText={(text) => handleInputChange("reason", text)}
      />
      <Button title="Withdraw" onPress={handleWithdrawal} />
      <CustomModal
        visible={notificationVisible}
        onClose={handleOK}
        transactionDetails={transactionDetails}
      />
      {isLoading && LoadingIndicator()}
    </SafeAreaView>
  )
}

export default WithdrawScreen