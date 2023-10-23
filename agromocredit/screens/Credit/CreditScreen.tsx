import React, { useState, useEffect } from "react"
import { SafeAreaView } from "react-native-safe-area-context"
import CreditScreenHeader from "../../components/Headers/CreditScreenHeader"
import { View, Text } from "react-native"
import { screenStyles } from "../screenStyles"
import TransactionRecord from "../../components/TransactionRecord"
import {
  useGetUserLoansQuery,
  useGetTotalLoanBalanceQuery,
} from "../../services/slices/transactionSlice"
import LoadingIndicator from "../Notifications/LoadingIndicator"

const CredditScreen = ({ route }) => {
  const { user } = route.params
  const { data: userLoanBalance } = useGetTotalLoanBalanceQuery(user.id)
  const { data: fetchedLoans } = useGetUserLoansQuery(user.id)

  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 2000)
  }, [])

  return (
    <SafeAreaView style={screenStyles.creditScreenContainer}>
      <CreditScreenHeader
        screenTitle="CREDIT STATUS"
        activeButton="history"
        user={user}
      />
      <View style={screenStyles.contentContainer}>
        <Text style={screenStyles.creditScreenSubTitleText}>LOAN HISTORY</Text>
        <Text style={screenStyles.creditScreenMajorText}>
          UGX {userLoanBalance?.toLocaleString()}
        </Text>
        <View style={screenStyles.recordContainer}>
          {isLoading ? (
            LoadingIndicator()
          ) : fetchedLoans && fetchedLoans.length > 0 ? (
            fetchedLoans.map((loan) => {
              const formattedDate = new Date(
                loan.created_at
              ).toLocaleDateString()
              const amount = loan.amount.toFixed(2)

              return (
                <TransactionRecord
                  key={loan.id}
                  recordDate={formattedDate}
                  recordValue={loan.user.name}
                  recordIcon=""
                  recordSubject={loan.loan_provider_id.name}
                  recordSubAttr1={`Amount: ${amount} UGX`}
                  recordSubAttr2=""
                  recordDated={true}
                  detailsIcon={false}
                  creditScreen={true}
                />
              )
            })
          ) : (
            <View>
              <Text>No loan records available</Text>
            </View>
          )}
        </View>
      </View>
    </SafeAreaView>
  )
}

export default CredditScreen
