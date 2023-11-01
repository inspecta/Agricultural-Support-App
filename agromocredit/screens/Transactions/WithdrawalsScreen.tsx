import React, { useEffect, useState } from "react"
import { SafeAreaView } from "react-native-safe-area-context"
import { View, Text, ScrollView } from "react-native"
import { IconButton } from "react-native-paper"
import { styles } from "./EarningsStyle"
import { screenStyles } from "../screenStyles"
import TransactionsScreenHeaders from "../../components/Headers/TransactionsScreenHeaders"
import TransactionRecord from "../../components/TransactionRecord"
import axios from "axios"
import LoadingIndicator from "../Notifications/LoadingIndicator"
import formatDateTime from "../../functions/FormatDateTime"
import { useGetWithdrawsQuery } from "../../services/slices/transactionSlice"
import ErrorMessage from "../Notifications/ErrorMessage"

interface Transaction {
  id: number
  amount: number
  description: string
  transactionType: string
  transactionDate: string
  partyInvolved: string
}

const WithdrawalsScreen: React.FC = ({ route }) => {
  const { user } = route.params
  const [transactions, setTransactions] = useState<Transaction[]>([])
  const [isLoading, setIsLoading] = useState(true)

  const {
    data: earnings,
    error: earningsError,
    isLoading: loadingEarnings,
  } = useGetWithdrawsQuery(user.id)

  useEffect(() => {
    if (earnings) {
      setTransactions(earnings)
      setIsLoading(false)
    }
  }, [earnings])

  return (
    <SafeAreaView style={screenStyles.container}>
      <TransactionsScreenHeaders pageTitle="WITHDRAWS" owner={user.id} />
      <View style={screenStyles.subTitle}>
        <Text style={screenStyles.subTitleText}>CURRENT BALANCE</Text>
      </View>
      <View style={screenStyles.subTitle}>
        <Text style={screenStyles.majorText}>
          UGX {user.balance.toLocaleString()}
        </Text>

        <View style={screenStyles.subTitle}>
          {/* <Text style={styles.comparisonText}>UGX 440</Text> */}
          <IconButton icon="arrow-up" iconColor="#ffcb05" size={14} />
        </View>
      </View>
      {isLoading ? (
        LoadingIndicator()
      ) : (
        <ScrollView>
          {transactions.length === 0 && (
            <ErrorMessage message="No withdraws available at the moment." />
          )}
          {transactions.map((transaction, index) => {
            return (
              <TransactionRecord
                key={transaction.id}
                recordDate={formatDateTime(transaction.transactionDate).date}
                recordValue={transaction.description}
                recordIcon="shopping"
                recordSubject="GENERAL"
                recordSubAttr1={`UGX ${transaction.amount.toLocaleString()}`}
                recordSubAttr2={transaction.partyInvolved}
                recordDated={true}
                detailsIcon={true}
                creditScreen={false}
              />
            )
          })}
        </ScrollView>
      )}
    </SafeAreaView>
  )
}

export default WithdrawalsScreen
