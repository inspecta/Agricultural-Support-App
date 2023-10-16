import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import CreditScreenHeader from "../../components/Headers/CreditScreenHeader";
import { View, Text } from "react-native";
import { IconButton } from "react-native-paper";
import InputText from "../../components/Inputs/InputText";
import ButtonAction from "../../components/Buttons/ButtonAction";

const BorrowingScreen = () => {
    return (
        <SafeAreaView>
            <CreditScreenHeader screenTitle="CREDIT STATUS" activeButton="borrow" />
            <View>
                <Text>OUTSTANDING CREDIT</Text>
                <Text>-UGX 567,000</Text>
                <View>
                    <View>
                        <IconButton icon="plus" />
                        <View>
                            <Text>MULUNDO SAM</Text>
                            <Text>WEED MASTER</Text>
                        </View>
                        <View>
                            <Text>-UGX 498,000</Text>
                            <Text>UGX 500,000</Text>
                        </View>
                    </View>
                    <View>
                        <IconButton icon="plus" />
                        <View>
                            <Text>MOMO</Text>
                            <Text>GENERAL</Text>
                        </View>
                        <View>
                            <Text>-UGX 50,000</Text>
                            <Text>UGX 500,000</Text>
                        </View>
                    </View>
                </View>
                <View>
                    <Text>AMOUNT</Text>
                    <InputText labelText="UGX 450,000" />
                    <ButtonAction onPress={() => console.log('Pressed')} buttonText="BORROW" />
                </View>
            </View>
        </SafeAreaView>
    );
};

export default BorrowingScreen;