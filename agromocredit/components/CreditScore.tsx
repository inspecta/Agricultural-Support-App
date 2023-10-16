
import React from "react"
import { View, Text} from "react-native"
import { IconButton } from "react-native-paper"
import {styles} from "./CreditScoreStyle"
import { screenStyles } from "../screens/screenStyles"

const CreditScore = () => {
    return (
        <View style={styles.container}>
                        <View style={styles.textContainer}>
                            <IconButton icon="credit-card-fast" iconColor="#fff" size={22} />
                            <View>
                                <Text style={screenStyles.subTitleText}>CREDIT</Text>
                                <Text style={screenStyles.subTitleText}>SCORE</Text>
                            </View>
                        </View>
                        <View style={styles.scoreContainer}><Text style={styles.creditScore}>6.2</Text></View>
                    </View>
    )
}

export default CreditScore;