import React, { useEffect, useState } from "react"
import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, ScrollView } from "react-native"
import { IconButton } from "react-native-paper";
import { styles } from "./EarningsStyle";
import {screenStyles} from "../screenStyles"
import EarningsScreenHeaders from "../../components/Headers/EarningsScreenHeaders";
import TransactionRecord from "../../components/TransactionRecord";
import axios from "axios"
import LoadingIndicator from "../Notifications/LoadingIndicator"
import formatDateTime from "../../functions/FormatDateTime"

interface Transaction {
    id: number
    amount: number
    description: string
    transactionType: string
    transactionDate: string
    partyInvolved: string
  }
  

const EarningsScreen: React.FC = ({ route }) => {

    const { user } = route.params
    console.log(user)
    const [transactions, setTransactions] = useState<Transaction[]>([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const fetchTransactions = async () => {
        const transactionsUrl = `http://192.168.9.43:8080/transactions/${user.id}`

        try {
            const response = await axios.get(transactionsUrl)
            setTransactions(response.data)
        } catch (error) {
            console.error("Error fetching transactions:", error)
        } finally {
            setIsLoading(false)
        }
        }

        fetchTransactions()
    }, [user.id])
 
    return (
        <SafeAreaView style={screenStyles.container}>
            <EarningsScreenHeaders  />
            <View style={screenStyles.subTitle}>
                <Text style={screenStyles.subTitleText}>CURRENT BALANCE</Text>
                <Text style={screenStyles.subTitleText}>SEP</Text>
            </View>
            <View style={screenStyles.subTitle}>
                <Text style={screenStyles.majorText}>UGX {user.balance}</Text>
                <View style={screenStyles.subTitle}>
                    <Text style={styles.comparisonText}>UGX 440</Text>
                    <IconButton icon="arrow-up" iconColor="#ffcb05" size={14} />
                </View>
            </View>
            {isLoading ? (
                LoadingIndicator()
            ) : (
                <ScrollView>
                    {transactions.length === 0 && (
                        <Text>No transactions at the moment</Text>
                    )}
                    {transactions.map((transaction, index) => {
                        return(<TransactionRecord
                            key={transaction.id}
                            recordDate={formatDateTime(transaction.transactionDate).date}
                            recordValue={transaction.description}
                            recordIcon="shopping"
                            recordSubject="GENERAL"
                            recordSubAttr1={`UGX ${transaction.amount}`}
                            recordSubAttr2={transaction.partyInvolved}
                            recordDated={true}
                            detailsIcon={true}
                            creditScreen={false}    
                            />)
})}
                </ScrollView>
            )}
        </SafeAreaView>
    );
    }

export default EarningsScreen;