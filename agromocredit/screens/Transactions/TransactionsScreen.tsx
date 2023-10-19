import React, { useEffect, useState } from "react"
import { View, Text, ScrollView } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import axios from "axios"
import LoadingIndicator from "../Notifications/LoadingIndicator"
import formatDateTime from "../../functions/FormatDateTime"

interface Transaction {
  id: number
  amount: number
  description: string
  transactionType: string
  transactionDate: string
}

const TransactionsScreen: React.FC = ({ route }) => {
  const { user } = route.params
  const [transactions, setTransactions] = useState<Transaction[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchTransactions = async () => {
      const transactionsUrl = `http://192.168.1.117:8080/transactions/${user.id}`

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
    <SafeAreaView>
      <Text>TRANSACTIONS</Text>
      <View>
        <Text>AVAILABLE BALANCE: {user.balance}</Text>
      </View>
      <View>
        <Text>
          {user.name} {user.phoneNumber}
        </Text>
      </View>
      {isLoading ? (
        LoadingIndicator()
      ) : (
        <ScrollView>
          {transactions.length === 0 && (
            <Text>No transactions at the moment</Text>
          )}
          <View>
            {transactions.map((transaction, index) => (
              <View
                key={transaction.id}
                style={{
                  backgroundColor: index % 2 === 0 ? "white" : "gray",
                  padding: 16,
                }}
              >
                <Text>
                  Amount: {transaction.amount}, Description:{" "}
                  {transaction.description}
                </Text>
                <Text>{formatDateTime(transaction.transactionDate).date}</Text>
                <Text>{formatDateTime(transaction.transactionDate).time}</Text>

                {transaction.transactionType === "Request Payment" && (
                  <Text>Payment</Text>
                )}
                {transaction.transactionType === "Withdraw" && (
                  <Text>Withdraw</Text>
                )}
              </View>
            ))}
          </View>
        </ScrollView>
      )}
    </SafeAreaView>
  )
}

export default TransactionsScreen
