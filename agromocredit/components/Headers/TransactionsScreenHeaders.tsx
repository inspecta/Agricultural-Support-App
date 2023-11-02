import React, { useState, useEffect } from "react"
import { View, Text } from "react-native"
import CreditScore from "../CreditScore"
import { screenStyles } from "../../screens/screenStyles"
import getCurrentDate from "../../functions/getCurrentDate"
import axios from "axios"

interface TransactionsScreenHeaderProps {
  pageTitle: string
  owner: number
}

const EarningsScreenHeaders: React.FC<TransactionsScreenHeaderProps> = ({
  pageTitle,
  owner,
}) => {
  const [totalEarned, setTotalEarned] = useState<number | null>(null)

  const fetchTotalEarned = async () => {
    try {
      const response = await axios.get(
        `https://agromocredit.onrender.com/${owner}/total-earned`
      )
      setTotalEarned(response.data)
    } catch (error) {
      console.error("Error fetching totalEarned:", error)
    }
  }

  useEffect(() => {
    fetchTotalEarned()
  }, [])

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
            UGX {totalEarned !== null ? totalEarned.toLocaleString() : "..."}
          </Text>
        </View>
        <CreditScore owner={owner} />
      </View>
    </>
  )
}

export default EarningsScreenHeaders
