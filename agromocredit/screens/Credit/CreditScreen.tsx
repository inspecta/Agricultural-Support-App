import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import CreditScreenHeader from "../../components/Headers/CreditScreenHeader";
import { View, Text } from "react-native";
import { screenStyles } from "../screenStyles";

const CredditScreen = () => {
    return (
        <SafeAreaView style={screenStyles.creditScreenContainer}>
            <CreditScreenHeader screenTitle="CREDIT STATUS" activeButton="history" />
            <View style={screenStyles.contentContainer}>
                <Text style={screenStyles.creditScreenSubTitleText}>HISTROY</Text>
                <Text style={screenStyles.creditScreenMajorText}>-UGX 898,000</Text>
                <View>
                    <View>
                        <Text>15 SEP</Text>
                    </View>
                    <View>
                        <Text>MULUNDO SAM</Text>
                        <Text>WEED MASTER</Text>
                    </View>
                    <View>
                        <Text>UGX 20,800</Text>
                        <Text>UGX 500,000</Text>
                    </View>
                </View>
                <View>
                    <View>
                        <Text>22 APR</Text>
                    </View>
                    <View>
                        <Text>MOMO</Text>
                        <Text>GENERAL</Text>
                    </View>
                    <View>
                        <Text>UGX 0</Text>
                        <Text>UGX 200,000</Text>
                    </View>
                </View>
                <View>
                    <View>
                        <Text>13 MAR</Text>
                    </View>
                    <View>
                        <Text>MULUNDO SAM</Text>
                        <Text>WEED MASTER</Text>
                    </View>
                    <View>
                        <Text>UGX 0</Text>
                        <Text>UGX 500,000</Text>
                    </View>
                </View>
                <View>
                    <View>
                        <Text>02 JAN</Text>
                    </View>
                    <View>
                        <Text>MOMO</Text>
                        <Text>GENERAL</Text>
                    </View>
                    <View>
                        <Text>UGX 0</Text>
                        <Text>UGX 600,000</Text>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default CredditScreen