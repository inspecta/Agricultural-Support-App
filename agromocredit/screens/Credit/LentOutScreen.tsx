import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import CreditScreenHeader from "../../components/Headers/CreditScreenHeader";
import { View, Text } from "react-native";
import { IconButton } from "react-native-paper";

const LentOutScreen = () => {
    return (
        <SafeAreaView>
            <CreditScreenHeader activeButton="lent" screenTitle="CREDIT STATUS" />
            <View>
                <Text>SOLD ON CREDIT</Text>
                <Text>UGX 898,000</Text>
                <View>
                    <IconButton icon="eye" />
                    <View>
                        <Text>ATUKWASE BETTY</Text>
                        <Text>EGGS</Text>
                    </View>
                    <View>
                        <Text>UGX 498,000</Text>
                        <Text>UGX 500,000</Text>
                    </View>
                </View>
                <View>
                    <IconButton icon="eye" />
                    <View>
                        <Text>BENEDICT JEMBA</Text>
                        <Text>WEED MASTER</Text>
                    </View>
                    <View>
                        <Text>UGX 0</Text>
                        <Text>UGX 400,000</Text>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default LentOutScreen;