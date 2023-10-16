import React from "react"
import { View, Text } from "react-native"
import CreditScore from "../CreditScore"
import { screenStyles } from "../../screens/screenStyles"

const EarningsScreenHeaders = () => {
    return (
        <>
            <View style={screenStyles.subTitle}>
                <Text style={screenStyles.pageTitle}>TRANSACTIONS</Text>
                <Text style={screenStyles.pageTitle}>OCT 2023</Text>
            </View>
            <View style={screenStyles.subTitle}>
                <View>
                    <Text style={screenStyles.subTitleText}>TOTAL EARNED</Text>
                    <Text style={screenStyles.majorText}>UGX 20,800</Text>
                </View>
                <CreditScore />
            </View>
        </>
    )
}

export default EarningsScreenHeaders