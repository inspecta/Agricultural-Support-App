import React, { useState, useEffect } from "react"
import { View, Text } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import generateAccessTokenDisbursement from "../../functions/GenerateTokenDisbursement"
import generateNewReferenceId from "../../functions/GenerateReferenceId"
import axios from "axios"
import LoadingIndicator from "../Notifications/LoadingIndicator"
import CustomModal from "../Notifications/CustomModal"
import { useNavigation } from "@react-navigation/native"
import TransactionsScreenHeaders from "../../components/Headers/TransactionsScreenHeaders"
import { screenStyles } from "../screenStyles"
import InputText from "../../components/Inputs/InputText"
import { styles } from "./ReceivePaymentStyle"
import { withdrawStyles } from "./WithdrawalStyle"
import ButtonAction from "../../components/Buttons/ButtonAction"
import { useGetBalanceQuery } from "../../services/slices/transactionSlice"
import { useAddTransactionMutation } from "../../services/slices/transactionSlice"
import InputNumber from "../../components/Inputs/InputNumber"
import ErrorMessage from "../Notifications/ErrorMessage"

const WithdrawScreen: React.FC = ({ route }) => {
  const [isLoading, setIsLoading] = useState(false)
  const [notificationVisible, setNotificationVisible] = useState(false)
  const [withdrawalError, setWithdrawalError] = useState("")
  const [currentBalance, setCurrentBalance] = useState<number | null>(null)

  const { data: balance } = useGetBalanceQuery(route.params.user.id)
  const [addTransaction] = useAddTransactionMutation()

  useEffect(() => {
    if (balance) setCurrentBalance(balance)
  }, [balance])

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
      setWithdrawalError("Amount can't exceed available balance.")
      setIsLoading(false)
    } else if (withdrawalAmount < 999) {
      setWithdrawalError("Min. withdraw amount is UGX 1,000.")
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
        payerMessage: "WITHDRAW",
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
            transactionType: "WITHDRAW",
            transactionDate: new Date().toISOString(),
          }

          setTransactionDetails({
            amount: transactionData.amount,
            payerNumber: transactionData.partyInvolved,
            reason: transactionData.description,
          })

          setNotificationVisible(true)

          addTransaction({ transaction: transactionData, userId: user.id })

          setIsLoading(false)
        } else {
          setWithdrawalError("Could not complete transaction.")
        }
      } catch (error) {
        setWithdrawalError("Could not complete transaction.")
        setIsLoading(false)
      }
    }
  }

  const handleOK = () => {
    setNotificationVisible(false)
    navigation.navigate("Dashboard", {
      user,
      newBalance: +user.balance - +formValues.amount,
    })
  }

  return (
    <SafeAreaView style={screenStyles.container}>
      <TransactionsScreenHeaders pageTitle="WITHDRAW" owner={user.id} />
      {withdrawalError && <ErrorMessage message={withdrawalError} />}
      <View style={screenStyles.subTitle}>
        <Text style={screenStyles.subTitleText}>CURRENT BALANCE</Text>
      </View>
      <View style={screenStyles.subTitle}>
        <Text style={screenStyles.majorText}>
          UGX {currentBalance?.toLocaleString()}
        </Text>
        <View style={screenStyles.subTitle}>
          <Text style={screenStyles.subTitleText}>{user.phoneNumber}</Text>
        </View>
      </View>

      <InputNumber
        txtStyle={styles.textInput}
        labelText="Amount"
        value={formValues.amount}
        onChangeText={(text) => handleInputChange("amount", text)}
      />
      <ButtonAction
        onPress={handleWithdrawal}
        buttonText="WITHDRAW"
        buttonStyles={screenStyles.creditBtnStyles}
        buttonTxtStyles={screenStyles.creditBtnTextStyles}
      />
      <CustomModal
        visible={notificationVisible}
        onClose={handleOK}
        transactionDetails={transactionDetails}
        user={user}
      />
      {isLoading && LoadingIndicator()}
    </SafeAreaView>
  )
}

export default WithdrawScreen
