import React, { useState, useEffect } from "react"
import { Text, TouchableOpacity, View, Image } from "react-native";
import { IconButton } from "react-native-paper";
import ButtonAction from "../../components/Buttons/ButtonAction";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./DashboardStyle";
import { screenStyles } from "../screenStyles";
import CreditScore from "../../components/CreditScore";
import { useNavigation } from "@react-navigation/native"
import axios from "axios"

interface User {
  name: string
  balance: number
  id: number
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
  const [totalCredit, setTotalCredit] = useState<number | null>(null)

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

  const fetchTotalEarned = async () => {
    try {
      const response = await axios.get(
        `http://192.168.1.117:8080/${route.params.user.id}/total-earned`
      )
      setTotalEarned(response.data)
    } catch (error) {
      console.error("Error fetching data:", error)
    }
  }

  const fetchTotalCredit = async () => {
    try {
      const response = await axios.get(
        `http://192.168.1.117:8080/${route.params.user.id}/total-credit`
      )
      setTotalCredit(response.data)
    } catch (error) {
      console.error("Error fetching data:", error)
    }
  }

  useEffect(() => {
    fetchTotalEarned()
    fetchTotalCredit()
    fetchBalance()

    const intervalId = setInterval(() => {
      fetchTotalEarned()
      fetchTotalCredit()
      fetchBalance()
    }, 1000)

    return () => clearInterval(intervalId)
  }, [])

    return (
        <SafeAreaView style={screenStyles.container}>
            <View style={screenStyles.subTitle}>
                <Text style={screenStyles.pageTitle}>{user.name.toUpperCase()}</Text>
                <Image source={require('../assets/titleImg.png')} />
            </View>
            <View style={screenStyles.subTitle} >
                <Text style={styles.titleTabs}>MERCHANT ID</Text>
                <Text style={styles.titleTabs}>85674912</Text>
            </View>
            <View >
                <View style={screenStyles.subTitle}>
                    <View>
                        <Text style={screenStyles.subTitleText}>YOUR CURRENT BALANCE</Text>
                        <Text style={screenStyles.majorText}>UGX {currentBalance}</Text>
                    </View>
                    <CreditScore />
                </View>
                <View style={styles.transactionsContainer}>
                    <Text style={styles.transactionsTitle}>TRANSACTIONS</Text>
                    <TouchableOpacity style={styles.transactionsSections}>
                        <View style={styles.transactionsButton}>
                            <Text style={styles.transactionsButtonText}>UGX {totalEarned !== null ? totalEarned : "Loading..."}</Text>
                        </View>
                        <Text style={styles.transactionsText}>TOTAL EARNED</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.transactionsSections}>
                        <View style={styles.transactionsButton}>
                            <Text style={styles.transactionsButtonText}>UGX {totalCredit !== null ? totalCredit : "Loading..."}</Text>
                        </View >
                        <Text style={styles.transactionsText}>TOTAL CREDIT</Text>
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
                                buttonText="RECEIVE PAYMENT"
                                buttonStyles={styles.btnStyles}
                                buttonTxtStyles={screenStyles.creditBtnTextStyles}
                            />
                            <ButtonAction
                                onPress={() => {
                                  navigation.navigate("LentOut", {
                                    user: user,
                                  })
                                }}
                                buttonText="PAY LOAN"
                                buttonStyles={styles.btnStyles}
                                buttonTxtStyles={screenStyles.creditBtnTextStyles}
                            />
                    </View>
                        <ButtonAction
                            onPress={() => console.log('Pressed')}
                            buttonText="MARKET PLACE"
                            buttonStyles={screenStyles.creditBtnStyles}
                            buttonTxtStyles={screenStyles.creditBtnTextStyles}
                        />
                </View>
            </View>
        </SafeAreaView>
    );

export default DashboardScreen
