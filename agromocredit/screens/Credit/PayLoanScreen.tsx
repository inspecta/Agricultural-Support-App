import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text, View } from "react-native";
import CreditScreenHeader from "../../components/Headers/CreditScreenHeader";
import { RadioButton } from "react-native-paper";
import InputText from "../../components/Inputs/InputText";
import ButtonAction from "../../components/Buttons/ButtonAction";
import { screenStyles } from "../screenStyles";
import TransactionRecord from "../../components/TransactionRecord";

const PayLoanScreen = () => {
    
    return (
    <SafeAreaView style={screenStyles.creditScreenContainer}>
        <CreditScreenHeader screenTitle="CREDIT STATUS" activeButton="pay" />
        <View style={screenStyles.contentContainer}>
            <Text style={screenStyles.creditScreenSubTitleText}>OUTSTANDING LOANS</Text>
            <Text style={screenStyles.creditScreenMajorText}>- UGX 567,000</Text>
            <View style={screenStyles.recordContainer}>
                <TransactionRecord
                    recordDate=""
                    recordValue="MULUNDO SAM"
                    recordIcon=""
                    recordSubject="WEED MASTER"
                    recordSubAttr1="UGX 498,000"
                    recordSubAttr2="UGX 500,000"
                    recordDated={false}
                    detailsIcon={false}
                    creditScreen={true}    
                />
                <TransactionRecord
                    recordDate=""
                    recordValue="MTN"
                    recordIcon=""
                    recordSubject="GENERAL"
                    recordSubAttr1="UGX 50,000"
                    recordSubAttr2="UGX 150,000"
                    recordDated={false}
                    detailsIcon={false}
                    creditScreen={true}    
                />
            </View>
            <View>
                <Text>AMOUNT</Text>
                <InputText txtStyle={screenStyles.creditScreenTextInput} labelText="UGX 450,000" />
                    <ButtonAction
                        onPress={() => console.log('Pressed')}
                        buttonText="PAY"
                        buttonStyles={screenStyles.creditBtnStyles}
                        buttonTxtStyles={screenStyles.creditBtnTextStyles}
                    />
            </View>
        </View>
    </SafeAreaView>
    );
    };

export default PayLoanScreen;