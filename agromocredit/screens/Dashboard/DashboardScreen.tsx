import React, { useState, useEffect } from "react"
import { Text, TouchableOpacity, View, Image } from "react-native"
import ButtonAction from "../../components/Buttons/ButtonAction"
import { SafeAreaView } from "react-native-safe-area-context"
import { styles } from "./DashboardStyle"
import { screenStyles } from "../screenStyles"
import CreditScore from "../../components/CreditScore"
import { useNavigation, useFocusEffect } from "@react-navigation/native"
import { ScrollView } from "react-native-gesture-handler"
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

const DashboardScreen: React.FC<DashboardScreenProps> = ({ route }) => {
  const { user } = route.params
  const navigation = useNavigation()
  const [currentBalance, setCurrentBalance] = useState<number | null>(null)
  const [totalEarned, setTotalEarned] = useState<number | null>(null)
  const [totalWithdrawn, setTotalWithdrawn] = useState<number | null>(null)

  const fetchData = async () => {
    try {
      const balanceResponse = await axios.get(
        `https://agromocredit.onrender.com/${user.id}/get-balance`
      )
      setCurrentBalance(balanceResponse.data)

      const earnedResponse = await axios.get(
        `https://agromocredit.onrender.com/${user.id}/total-earned`
      )
      setTotalEarned(earnedResponse.data)

      const withdrawnResponse = await axios.get(
        `https://agromocredit.onrender.com/${user.id}/total-credit`
      )
      setTotalWithdrawn(withdrawnResponse.data)
    } catch (error) {
      console.error("Error fetching data:", error)
    }
  }

  useFocusEffect(
    React.useCallback(() => {
      fetchData()
    }, [])
  )

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <SafeAreaView>
      <ScrollView style={screenStyles.container}>
        <View style={screenStyles.subTitle}>
          <Text style={screenStyles.pageTitle}>{user.name.toUpperCase()}</Text>
          <Image source={require("../assets/titleImg.png")} />
        </View>
        <View style={screenStyles.subTitle}>
          <Text style={styles.titleTabs}>CUSTOMER ID</Text>
          <Text style={styles.titleTabs}>{user.phoneNumber}</Text>
        </View>
        <View>
          <View style={screenStyles.subTitle}>
            <View>
              <Text style={screenStyles.subTitleText}>
                YOUR CURRENT BALANCE
              </Text>
              <Text style={screenStyles.majorText}>
                UGX {currentBalance ? currentBalance.toLocaleString() : 0}
              </Text>
            </View>
            <CreditScore owner={user.id} />
          </View>
          <View style={styles.transactionsContainer}>
            <Text style={styles.transactionsTitle}>TRANSACTIONS</Text>
            <TouchableOpacity
              style={styles.transactionsSections}
              onPress={() => {
                navigation.navigate("Earnings", {
                  user: user,
                })
              }}
            >
              <View style={styles.transactionsButton}>
                <Text style={styles.transactionsButtonText}>
                  UGX {totalEarned ? totalEarned.toLocaleString() : 0}
                </Text>
              </View>
              <Text style={styles.transactionsText}>EARNINGS</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.transactionsSections}
              onPress={() => {
                navigation.navigate("Withdraws", {
                  user: user,
                })
              }}
            >
              <View style={styles.transactionsButton}>
                <Text style={styles.transactionsButtonText}>
                  UGX {totalWithdrawn ? totalWithdrawn.toLocaleString() : 0}
                </Text>
              </View>
              <Text style={styles.transactionsText}>WITHDRAWALS</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.buttonsContainer}>
            <View style={styles.screenButtonsContainer}>
              <ButtonAction
                onPress={() => {
                  navigation.navigate("ReceivePaymentScreen", {
                    user: user,
                  })
                }}
                buttonText="RECEIVE A PAYMENT"
                buttonStyles={styles.btnStyles}
                buttonTxtStyles={screenStyles.creditBtnTextStyles}
              />
              <ButtonAction
                onPress={() => {
                  navigation.navigate("Withdraw", {
                    user: user,
                  })
                }}
                buttonText="WITHDRAW"
                buttonStyles={styles.btnStyles}
                buttonTxtStyles={screenStyles.creditBtnTextStyles}
              />
              <ButtonAction
                onPress={() => {
                  navigation.navigate("Transfer", {
                    user: user,
                  })
                }}
                buttonText="MAKE A PAYMENT"
                buttonStyles={styles.btnStyles}
                buttonTxtStyles={screenStyles.creditBtnTextStyles}
              />
              <ButtonAction
                onPress={() => {
                  navigation.navigate("Credit", {
                    user: user,
                  })
                }}
                buttonText="LOANS"
                buttonStyles={screenStyles.creditBtnStyles}
                buttonTxtStyles={screenStyles.creditBtnTextStyles}
              />
            </View>
            <ButtonAction
              onPress={() => {
                navigation.navigate("MarketPlace", {
                  user: user,
                })
              }}
              buttonText="MARKET PLACE"
              buttonStyles={screenStyles.creditBtnStyles}
              buttonTxtStyles={screenStyles.creditBtnTextStyles}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default DashboardScreen
