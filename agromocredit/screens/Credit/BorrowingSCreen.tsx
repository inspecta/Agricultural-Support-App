import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import CreditScreenHeader from "../../components/Headers/CreditScreenHeader";
import { View, Text } from "react-native";
import { IconButton } from "react-native-paper";
import InputText from "../../components/Inputs/InputText";
import ButtonAction from "../../components/Buttons/ButtonAction";
import { screenStyles } from "../screenStyles";
import TransactionRecord from "../../components/TransactionRecord";

const BorrowingScreen = () => {
    return (
        <SafeAreaView style={screenStyles.creditScreenContainer}>
            <CreditScreenHeader screenTitle="CREDIT STATUS" activeButton="borrow" />
            <View style={screenStyles.contentContainer}>
                <Text style={screenStyles.creditScreenSubTitleText}>OUTSTANDING CREDIT</Text>
                <Text style={screenStyles.creditScreenMajorText}>- UGX 567,000</Text>
                <View style={screenStyles.recordContainer}>
                    <TransactionRecord
                        recordDate="15 SEP"
                        recordValue="MULUNDO SAM"
                        recordIcon=""
                        recordSubject="WEED MASTER"
                        recordSubAttr1="UGX 498,000"
                        recordSubAttr2="UGX 500,000"
                        recordDated={true}
                        detailsIcon={false}
                        creditScreen={true}    
                    />
                    <TransactionRecord
                        recordDate="15 JUL"
                        recordValue="MOMO"
                        recordIcon=""
                        recordSubject="GENERAL"
                        recordSubAttr1="UGX 50,000"
                        recordSubAttr2="UGX 500,000"
                        recordDated={true}
                        detailsIcon={false}
                        creditScreen={true}    
                    />
                </View>
                <View style={screenStyles.creditScreenSubTitleText}>
                    <Text>AMOUNT</Text>
                    <InputText txtStyle={screenStyles.creditScreenTextInput} labelText="UGX 450,000" />
                    <ButtonAction
                        onPress={() => console.log('Pressed')}
                        buttonText="BORROW"
                        buttonStyles={screenStyles.creditBtnStyles}
                        buttonTxtStyles={screenStyles.creditBtnTextStyles}
                    />
                </View>
            </View>
        </SafeAreaView>
    );
};

export default BorrowingScreen;