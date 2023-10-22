import React, { useState, useEffect } from "react"
import { View, Text } from "react-native"
import { IconButton } from "react-native-paper"
import { styles } from "./CreditScoreStyle"
import { screenStyles } from "../screens/screenStyles"
import axios from "axios"

interface CreditScoreProps {
  owner: number
}

const CreditScore: React.FC<CreditScoreProps> = ({ owner }) => {
  const [creditScore, setCreditScore] = useState(0)

  useEffect(() => {
    const fetchCreditScore = async () => {
      try {
        const response = await axios.get(
          `http://192.168.9.200:8080/calculate-credit-score/${owner}`
        )
        setCreditScore(response.data)
      } catch (error) {
        console.error("Error fetching credit score:", error)
      }
    }

    fetchCreditScore()
  }, [owner])

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
