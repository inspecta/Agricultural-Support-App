import React, { useState, useEffect } from "react"
import { View, Text } from "react-native"
import { screenStyles } from "../../screens/screenStyles"
import TransactionRecord from "../TransactionRecord"
import {
  useGetUserLoansQuery,
  useGetTotalLoanBalanceQuery,
} from "../../services/slices/transactionSlice"
import LoadingIndicator from "../../screens/Notifications/LoadingIndicator"
import ErrorMessage from "../../screens/Notifications/ErrorMessage"

interface CreditHistoryProps {
  user: {
    name: string
    balance: number
    id: number
    phoneNumber: string
  }
}

const CreditHistory: React.FC<CreditHistoryProps> = ({ user }) => {
  const { data: userLoanBalance } = useGetTotalLoanBalanceQuery(user.id)
  const { data: fetchedLoans } = useGetUserLoansQuery(user.id)

  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 2000)
  }, [])

  return (
    <View style={screenStyles.contentContainer}>
      <Text style={screenStyles.creditScreenSubTitleText}>LOAN HISTORY</Text>
      <Text style={{ fontWeight: "bold", fontSize: 28 }}>
        UGX {userLoanBalance?.toLocaleString()}
      </Text>
      <View style={screenStyles.recordContainer}>
        {isLoading ? (
          LoadingIndicator()
        ) : fetchedLoans && fetchedLoans.length > 0 ? (
          fetchedLoans.map((loan) => {
            const formattedDate = new Date(loan.created_at).toLocaleDateString()
            const amount = loan.amount.toFixed(2)

            return (
              <TransactionRecord
                key={loan.id}
                recordDate={formattedDate}
                recordValue={loan.user.name}
                recordIcon=""
                recordSubject={loan.loan_provider_id.name}
                recordSubAttr1={`${amount.toLocaleString()} UGX`}
                recordSubAttr2=""
                recordDated={true}
                detailsIcon={false}
                creditScreen={true}
              />
            )
          })
        ) : (
          <View>
            <ErrorMessage message="No loan records now." />
          </View>
        )}
      </View>
    </View>
  )
}

export default CreditHistory
