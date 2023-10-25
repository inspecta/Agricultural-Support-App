import React, { useState, useEffect } from "react"
import { View, Text, Image } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import InputText from "../../components/Inputs/InputText"
import ButtonAction from "../../components/Buttons/ButtonAction"
import { screenStyles } from "../screenStyles"
import { styles } from "../../components/Headers/CreditScreenHeaderStyle"
import LoadingIndicator from "../Notifications/LoadingIndicator"
import CustomModal from "../Notifications/CustomModal"
import { useNavigation } from "@react-navigation/native"
import axios from "axios"
import { useGetTotalLoanBalanceQuery } from "../../services/slices/transactionSlice"
import CreditScore from "../../components/CreditScore"
import { useGetBalanceQuery } from "../../services/slices/transactionSlice"

const CreditPurchaseScreen: React.FC = ({ route }) => {
  const navigation = useNavigation()
  const { user, product } = route.params

  const [borrowAmount, setBorrowAmount] = useState("")
  const [isLoading, setIsLoading] = React.useState(false)
  const [notificationVisible, setNotificationVisible] = useState(false)
  const [transactionDetails, setTransactionDetails] = useState({
    amount: "",
    loanProvider: "",
    reason: "",
  })

  const { data: totalLoanBalance } = useGetTotalLoanBalanceQuery(user.id)
  const { data: userBalance } = useGetBalanceQuery(user.id)

  /*** Handle borrowing money */
  const handleBorrowing = async () => {
    setIsLoading(true)

    try {
      const saveLoanUrl = `https://agromocredit.onrender.com/save-loan/${user.id}`
      const response = await axios.post(saveLoanUrl, {
        amount: creditAmount,
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

  const creditAmount = product.price * 0.08 + product.price

  const handleOK = () => {
    setNotificationVisible(false)
    navigation.navigate("Dashboard", {
      user: user,
    })
  }
  return (
    <SafeAreaView style={screenStyles.creditScreenContainer}>
      <View style={styles.container}>
        <View style={screenStyles.subTitle}>
          <Text style={screenStyles.creditScreenPageTitle}>
            CREDIT PURCHASE
          </Text>
        </View>
        <View style={screenStyles.subTitle}>
          <View>
            <Text style={screenStyles.subTitleText}>{user.name}</Text>
            <Text style={screenStyles.subTitleText}>{user.phoneNumber}</Text>
            <Text style={screenStyles.creditScreenSubTitleText}>
              ACC BAL: UGX {userBalance}
            </Text>
          </View>
          <CreditScore owner={user.id} />
        </View>
        <View style={screenStyles.subTitle}>
          <Text style={screenStyles.creditScreenSubTitleText}>
            CURRENT LOAN BALANCE:
          </Text>
          <Text>{totalLoanBalance.toLocaleString()}</Text>
        </View>
      </View>
      <View style={screenStyles.contentContainer}>
        <Text style={screenStyles.creditScreenSubTitleText}>
          YOU ARE BUYING {product.name} ON CREDIT
        </Text>
        <Image
          source={{ uri: product.image }}
          style={{
            width: 200,
            height: 200,
            borderRadius: 10,
            marginVertical: 10,
          }}
        />
        <Text style={screenStyles.creditScreenMajorText}>
          AT UGX {creditAmount}
        </Text>
        <Text style={{ fontSize: 13, color: "red" }}>Interest Rate: 8.0%</Text>
        <View style={screenStyles.creditScreenSubTitleText}>
          <InputText
            txtStyle={screenStyles.creditScreenTextInput2}
            labelText={product.price.toLocaleString()}
            value={product.price.toLocaleString()}
          />
          <ButtonAction
            onPress={() => handleBorrowing()}
            buttonText="BUY ON CREDIT"
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
    </SafeAreaView>
  )
}

export default CreditPurchaseScreen
