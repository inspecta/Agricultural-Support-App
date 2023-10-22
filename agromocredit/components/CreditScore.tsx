import React, { useState, useEffect } from "react"
import { View, Text } from "react-native"
import { IconButton } from "react-native-paper"
import { styles } from "./CreditScoreStyle"
import { screenStyles } from "../screens/screenStyles"
import axios from "axios"
import { useGetCreditScoreQuery } from "../services/slices/transactionSlice"

interface CreditScoreProps {
  owner: number
}

const CreditScore: React.FC<CreditScoreProps> = ({ owner }) => {
  const [creditScore, setCreditScore] = useState(0)
  const {data:scoreValue } = useGetCreditScoreQuery(owner)

  useEffect(() => {
    if(scoreValue) {
        setCreditScore(scoreValue)
    }

  }, [scoreValue])

  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <IconButton icon="credit-card-fast" iconColor="#fff" size={22} />
        <View>
          <Text style={screenStyles.subTitleText}>CREDIT</Text>
          <Text style={screenStyles.subTitleText}>SCORE</Text>
        </View>
      </View>
      <View style={styles.scoreContainer}>
        <Text style={styles.creditScore}>{creditScore}</Text>
      </View>
    </View>
  )
}

export default CreditScore
