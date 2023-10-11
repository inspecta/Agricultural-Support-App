import React from "react";
import { Text, View } from "react-native";
import InputText from "../../components/Inputs/InputText";

const ReceivePaymentScreen = () => {
    return (
        <View>
            <Text>Request for a Payment</Text>
            <InputText labelText="From" />
            <InputText labelText="Amount" />
            <InputText labelText="Reason" />
        </View>
    );
    };

export default ReceivePaymentScreen;