import React, { useState, useEffect } from "react"
import { View, Text, TextInput, Button, Image } from "react-native"
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

const TransferScreen: React.FC = ({ route }) => {
  const navigation = useNavigation()
  const { user, product } = route.params
  console.log(user)
  console.log(product)
  const [isLoading, setIsLoading] = useState(false)
  const [notificationVisible, setNotificationVisible] = useState(false)
  const [withdrawalError, setWithdrawalError] = useState("")

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
      setWithdrawalError("Please enter a valid amount.")
      setIsLoading(false)
    } else if (paymentAmount > userBalance) {
      setWithdrawalError("Amount can't exceed available balance.")
      setIsLoading(false)
    } else if (paymentAmount < 500) {
      setWithdrawalError("Minimum payment amount is 1000.")
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

  useEffect(() => {
    // Populate the input fields with product details if available
    if (product) {
      setFormValues({
        amount: String(product.price), // Convert to string
        reason: product.name,
        phoneNumber: product.supplierNumber,
      })
    }
  }, [product]);

  return (
    <SafeAreaView style={screenStyles.container}>
      <EarningsScreenHeaders pageTitle="PAY MONEY" owner={user.id} />
      <View style={screenStyles.subTitle}>
        <Text style={screenStyles.subTitleText}>CURRENT BALANCE</Text>
      </View>
      <View style={screenStyles.subTitle}>
        <Text style={screenStyles.majorText}>UGX {userBalance.toLocaleString()}</Text>
      </View>

      {withdrawalError ? (
        <Text style={{ color: "red" }}>{withdrawalError}</Text>
      ) : null}

      <InputText
        txtStyle={styles.textInput}
        labelText="Recipient's Phone Number"
        value={formValues.phoneNumber}
        onChangeText={(text) => handleInputChange("phoneNumber", text)}
      />

      <InputText
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
      />
      {isLoading && LoadingIndicator()}

      <View style={styles.logoContainer}>
        {/* Add momo logo here */}
        <Image
          source={require("../../screens/assets/momoLogo.jpg")}
          style={{ width: 100, height: 100, marginTop: 15 }}
        />
      </View>
    </SafeAreaView>
  )
}

export default TransferScreen
