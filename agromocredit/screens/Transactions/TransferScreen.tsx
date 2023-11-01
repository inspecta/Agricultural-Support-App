import React, { useState, useEffect } from "react"
import { View, Text } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import generateAccessTokenDisbursement from "../../functions/GenerateTokenDisbursement"
import generateNewReferenceId from "../../functions/GenerateReferenceId"
import axios from "axios"
import LoadingIndicator from "../Notifications/LoadingIndicator"
import CustomModal from "../Notifications/CustomModal"
import { useNavigation } from "@react-navigation/native"
import EarningsScreenHeaders from "../../components/Headers/TransactionsScreenHeaders"
import { screenStyles } from "../screenStyles"
import InputText from "../../components/Inputs/InputText"
import { styles } from "./ReceivePaymentStyle"
import ButtonAction from "../../components/Buttons/ButtonAction"
import {
  useGetBalanceQuery,
  useAddTransactionMutation,
} from "../../services/slices/transactionSlice"
import InputNumber from "../../components/Inputs/InputNumber"
import ErrorMessage from "../Notifications/ErrorMessage"
import validatePhoneNumber from "../../functions/ValidatePhoneNumber"

const TransferScreen: React.FC = ({ route }) => {
  const navigation = useNavigation()
  const { user, product } = route.params
  const [isLoading, setIsLoading] = useState(false)
  const [notificationVisible, setNotificationVisible] = useState(false)
  const [transferError, setTransferError] = useState("")

  const { data: userBalance } = useGetBalanceQuery(user.id)
  const [addTransaction] = useAddTransactionMutation()

  const [formValues, setFormValues] = useState({
    amount: "",
    reason: "",
    phoneNumber: "",
  })

  const handleInputChange = (name: string, value: string) => {
    setFormValues({
      ...formValues,
      [name]: value,
    })
  }

  const [paymentDetails, setPaymentDetails] = useState({
    amount: "",
    payerNumber: "",
    reason: "",
  })

  const handlePayment = async () => {
    setIsLoading(true)

    const paymentAmount = parseFloat(formValues.amount)

    if (isNaN(paymentAmount)) {
      setTransferError("Please enter a valid amount.")
      setIsLoading(false)
    } else if (paymentAmount > userBalance) {
      setTransferError("Amount can't exceed available balance.")
      setIsLoading(false)
    } else if (paymentAmount < 500) {
      setTransferError("Minimum payment amount is 1000.")
      setIsLoading(false)
    } else if (!validatePhoneNumber(paymentDetails.payerNumber)) {
      setTransferError("Invalid phone number.")
      setIsLoading(false)
    } else {
      setTransferError("")

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
        payeeNote: "AGROMOCREDIT PAYMENT",
      }

      const headers = {
        "Ocp-Apim-Subscription-Key": "470c1840a2ef48bbaf89b701f39f9d30",
        "X-Reference-Id": newReferenceId,
        "X-Target-Environment": "sandbox",
        Authorization: `Bearer ${accessToken}`,
      }

      try {
        const response = await axios.post(
          "https://sandbox.momodeveloper.mtn.com/disbursement/v1_0/transfer",
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
            transactionType: "MAKE_PAYMENT",
            transactionDate: new Date().toISOString(),
          }

          setPaymentDetails({
            amount: transactionData.amount,
            payerNumber: transactionData.partyInvolved,
            reason: transactionData.description,
          })

          setNotificationVisible(true)

          addTransaction({ transaction: transactionData, userId: user.id })

          setIsLoading(false)
        } else {
          setTransferError("Could not complete transaction.")
        }
      } catch (error) {
        setTransferError("Could not complete transaction.")
        setIsLoading(false)
      }
    }
  }

  const handleOK = () => {
    setNotificationVisible(false)
    navigation.navigate("Dashboard", {
      user,
      newBalance: user.balance - +formValues.amount,
    })
  }

  useEffect(() => {
    // Populate the input fields with product details if available
    if (product) {
      setFormValues({
        amount: String(product.price),
        reason: product.name,
        phoneNumber: product.supplierNumber,
      })
    }
  }, [product])

  return (
    <SafeAreaView style={screenStyles.container}>
      <EarningsScreenHeaders pageTitle="PAY MONEY" owner={user.id} />
      <View style={screenStyles.subTitle}>
        <Text style={screenStyles.subTitleText}>CURRENT BALANCE</Text>
      </View>
      <View style={screenStyles.subTitle}>
        <Text style={screenStyles.majorText}>
          UGX {userBalance.toLocaleString()}
        </Text>
      </View>

      {transferError && <ErrorMessage message={transferError} />}

      <InputNumber
        txtStyle={styles.textInput}
        labelText="Recipient's Phone Number"
        value={formValues.phoneNumber}
        onChangeText={(text) => handleInputChange("phoneNumber", text)}
      />

      <InputNumber
        txtStyle={styles.textInput}
        labelText="Amount To Pay"
        value={formValues.amount}
        onChangeText={(text) => handleInputChange("amount", text)}
      />
      <InputText
        txtStyle={styles.textInput}
        labelText="Reason For Payment"
        value={formValues.reason}
        onChangeText={(text) => handleInputChange("reason", text)}
      />
      <ButtonAction
        onPress={handlePayment}
        buttonText="PAY MONEY"
        buttonStyles={screenStyles.creditBtnStyles}
        buttonTxtStyles={screenStyles.creditBtnTextStyles}
      />
      <CustomModal
        visible={notificationVisible}
        onClose={handleOK}
        transactionDetails={paymentDetails}
        user={user}
      />
      {isLoading && LoadingIndicator()}
    </SafeAreaView>
  )
}

export default TransferScreen
