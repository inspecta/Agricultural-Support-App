import React, { useState } from "react"
import { Text, View, ActivityIndicator, StyleSheet, Image } from "react-native"
import InputText from "../../components/Inputs/InputText"
import { SafeAreaView } from "react-native-safe-area-context"
import ButtonAction from "../../components/Buttons/ButtonAction"
import { screenStyles } from "../screenStyles"
import { styles } from "./ReceivePaymentStyle"
import EarningsScreenHeaders from "../../components/Headers/TransactionsScreenHeaders"
import { useNavigation } from "@react-navigation/native"
import axios from "axios"
import generateNewReferenceId from "../../functions/GenerateReferenceId"
import CustomModal from "../Notifications/CustomModal"
import generateAccessToken from "../../functions/GenerateToken"
import LoadingIndicator from "../Notifications/LoadingIndicator"
import { useAddTransactionMutation } from "../../services/slices/transactionSlice";

const ReceivePaymentScreen: React.FC = ({ route }) => {
  const [isLoading, setIsLoading] = React.useState(false)
  const [addTransaction] = useAddTransactionMutation()
  
  const navigation = useNavigation()
  const { user } = route.params

  const [formValues, setFormValues] = useState({
    payerNumber: "",
    amount: "",
    reason: "",
  })

  const handleInputChange = (name: string, value: string) => {
    setFormValues({
      ...formValues,
      [name]: value,
    })
  }

  const [notificationVisible, setNotificationVisible] = useState(false)
  const [transactionDetails, setTransactionDetails] = useState({
    amount: "",
    payerNumber: "",
    reason: "",
  })

  const handleFormSubmit = async () => {
    setIsLoading(true)

    const newReferenceId = await generateNewReferenceId()
    const accessToken = await generateAccessToken()

    const formData = {
      payerNumber: formValues.payerNumber,
      amount: formValues.amount,
      reason: formValues.reason,
    }

    const requestParams = {
      amount: formData.amount,
      currency: "EUR",
      externalId: "string",
      payer: {
        partyIdType: "MSISDN",
        partyId: formData.payerNumber,
      },
      payerMessage: formData.reason,
      payeeNote: "MoMo",
    }

    const headers = {
      "Ocp-Apim-Subscription-Key": "2820b39d5bc2421da2b3f42b4cce8929",
      "X-Reference-Id": newReferenceId,
      "X-Target-Environment": "sandbox",
      Authorization: `Bearer ${accessToken}`,
    }

    try {
      const response = await axios.post(
        "https://sandbox.momodeveloper.mtn.com/collection/v1_0/requesttopay",
        requestParams,
        {
          headers,
        }
      )

      if (response.status === 202) {
        const transactionData = {
          amount: formData.amount,
          description: formData.reason,
          partyInvolved: formData.payerNumber,
          transactionType: "REQUEST_PAYMENT",
          transactionDate: new Date().toISOString(),
        }

        setTransactionDetails({
          amount: formValues.amount,
          payerNumber: formValues.payerNumber,
          reason: formValues.reason,
        })

        setNotificationVisible(true)

        addTransaction({transaction:transactionData, userId: user.id})

        setIsLoading(false)
      } else {
        console.log("Could not complete transaction.")
      }
    } catch (error) {
      console.error(error)
      setIsLoading(false)
    }
  }

  const handleOK = () => {
    setNotificationVisible(false)
    navigation.navigate("Dashboard", {
      user: user,
    })
  }

  return (
    <SafeAreaView style={screenStyles.container}>
      <EarningsScreenHeaders pageTitle="RECEIVE PAYMENT" owner={user.id}/>
      <Text style={screenStyles.subTitleText}>REQUEST FOR PAYMENT</Text>
      <View style={styles.requestPaymentForm}>
        <Text style={screenStyles.subText}>FOR</Text>
        <InputText
          txtStyle={styles.textInput}
          labelText="From"
          name="payerNumber"
          value={formValues.payerNumber}
          onChangeText={(text) => handleInputChange("payerNumber", text)}
        />
        <InputText
          txtStyle={styles.textInput}
          labelText="Amount"
          name="amount"
          value={formValues.amount}
          onChangeText={(text) => handleInputChange("amount", text)}
        />
        <InputText
          txtStyle={styles.textInput}
          labelText="Reason"
          name="reason"
          value={formValues.reason}
          onChangeText={(text) => handleInputChange("reason", text)}
        />
        <ButtonAction
          onPress={handleFormSubmit}
          buttonText="REQUEST"
          buttonStyles={screenStyles.creditBtnStyles}
          buttonTxtStyles={screenStyles.creditBtnTextStyles}
        />
        {/* Notification Modal */}
        <CustomModal
          visible={notificationVisible}
          onClose={handleOK}
          transactionDetails={transactionDetails}
        />
      </View>
      {isLoading && LoadingIndicator()}
      <View style={styles.logoContainer}>
          {/* Add momo logo here */}
          <Image
            source={require('../../screens/assets/momoLogo.jpg')}
            style={styles.logo}  
          />
        </View>
    </SafeAreaView>
  )
}

export default ReceivePaymentScreen