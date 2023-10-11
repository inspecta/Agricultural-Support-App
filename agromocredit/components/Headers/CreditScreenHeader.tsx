import React from "react";
import { View } from "react-native";
import { Text } from "react-native";
import ButtonAction from "../Buttons/ButtonAction";

interface ButtonActionProps {
    activeButton: string;
    screenTitle: string;
  }

const CreditScreenHeader: React.FC<ButtonActionProps> = ({ screenTitle, activeButton }) => {
    return (
        <View>
            <Text>{screenTitle}</Text>
            <Text>UGX 567,700</Text>
            <View>
                <ButtonAction buttonText="PAY NOW" onPress={() => console.log("Pressed")} />
                <ButtonAction buttonText="CREDIT HISTORY" onPress={() => console.log("Pressed")} />
                <ButtonAction buttonText="LENT OUT" onPress={() => console.log("Pressed")} />
                <ButtonAction buttonText="MOMO BORROW" onPress={() => console.log("Pressed")} />
            </View>
        </View>
    )
}

export default CreditScreenHeader;