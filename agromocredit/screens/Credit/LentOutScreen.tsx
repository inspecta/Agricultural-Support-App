import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import CreditScreenHeader from "../../components/Headers/CreditScreenHeader";
import { View, Text } from "react-native";
import { screenStyles } from "../screenStyles";
import TransactionRecord from "../../components/TransactionRecord";

const LentOutScreen = () => {
    return (
        <SafeAreaView style={screenStyles.creditScreenContainer}>
            <CreditScreenHeader activeButton="lent" screenTitle="CREDIT STATUS" />
            <View style={screenStyles.contentContainer}>
                <Text style={screenStyles.creditScreenSubTitleText}>SOLD ON CREDIT</Text>
                <Text style={screenStyles.creditScreenMajorText}>UGX 898,000</Text>
                <View style={screenStyles.recordContainer}>
                    <TransactionRecord
                        recordDate="15 SEP"
                        recordValue="ATUKWASE BETTY"
                        recordIcon=""
                        recordSubject="EGGS"
                        recordSubAttr1="UGX 498,000"
                        recordSubAttr2="UGX 500,000"
                        recordDated={true}
                        detailsIcon={false}
                        creditScreen={true}    
                    />
                    <TransactionRecord
                        recordDate="13 MAR"
                        recordValue="BENEDICT JEMBA"
                        recordIcon=""
                        recordSubject="WEED MASTER"
                        recordSubAttr1="UGX 0"
                        recordSubAttr2="UGX 400,000"
                        recordDated={true}
                        detailsIcon={false}
                        creditScreen={true}    
                    />
                </View>
            </View>
        </SafeAreaView>
    );
};

export default LentOutScreen;