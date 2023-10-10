import React from "react";
import { Text, View } from "react-native";
import { Button, IconButton } from "react-native-paper";
import ButtonAction from "../../components/Buttons/ButtonAction";

const DashboardScreen = () => {

    return (
        <>
        <Text>Mulinde Derrick </Text>
        <View >
            <Text>Merchant ID</Text>
            <Text>85674912</Text>
        </View>
        <View >
            <View>
                <Text>YOUR CURRENT BALANCE</Text>
                <Text>UGX 0</Text>
            </View>
            <View>
                <View>
                    <IconButton icon="pencil" iconColor="#707070" size={15} />
                    <Text>CREDIT SCORE</Text>
                </View>
                <Text>6.2</Text>
            </View>
            <View>
                <Text>TRANSACTIONS</Text>
                <View>
                    <View>
                        <Text>UGX 20,800</Text>
                    </View>
                    <Text>TOTAL EARNED</Text>
                </View>
                <View>
                    <View>
                        <Text>UGX 32,800</Text>
                    </View>
                    <Text>TOTAL CREDIT</Text>
                </View>
            </View>
            <View>
                <View>
                    <ButtonAction onPress={() => console.log('Pressed')} buttonText="RECEIVE PAYMENT" />
                    <ButtonAction onPress={() => console.log('Pressed')} buttonText="PQY LOAN" />
                </View>
                <ButtonAction onPress={() => console.log('Pressed')} buttonText="MARKET PLACE" />
            </View>

        </View>
        
        </>
    );

}

export default DashboardScreen;