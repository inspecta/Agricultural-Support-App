import React from "react"
import { View, Text } from "react-native"
import CreditScore from "../CreditScore"
import { screenStyles } from "../../screens/screenStyles"
import { useGetTotalEarnedQuery } from "../../services/slices/transactionSlice"
import getCurrentDate from "../../functions/getCurrentDate"

interface TransactionsScreenHeaderProps {
  pageTitle: string
  owner: number
}

const EarningsScreenHeaders: React.FC<TransactionsScreenHeaderProps> = ({
  pageTitle,
  owner,
}) => {
  const { data: totalEarned } = useGetTotalEarnedQuery(owner)
  return (
    <>
      <View style={screenStyles.subTitle}>
        <Text style={screenStyles.pageTitle}>{pageTitle}</Text>
        <Text style={screenStyles.pageTitle}>{getCurrentDate()}</Text>
      </View>
      <View style={screenStyles.subTitle}>
        <View>
          <Text style={screenStyles.subTitleText}>TOTAL EARNED</Text>
          <Text style={screenStyles.majorText}>
            UGX {totalEarned && totalEarned.toLocaleString()}
          </Text>
        </View>
        <CreditScore owner={owner} />
      </View>
    </>
  )
}

export default EarningsScreenHeaders
