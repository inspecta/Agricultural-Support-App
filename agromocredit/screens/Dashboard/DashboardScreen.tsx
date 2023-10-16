import React from "react";
import { Text, TouchableOpacity, View, Image } from "react-native";
import { IconButton } from "react-native-paper";
import ButtonAction from "../../components/Buttons/ButtonAction";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./DashboardStyle";

const DashboardScreen = () => {

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.subTitle}>
                <Text style={styles.pageTitle}>MULINDE DERRICK</Text>
                <Image source={require('./titleImg.png')} />
            </View>
            <View style={styles.subTitle} >
                <Text style={styles.titleTabs}>MERCHANT ID</Text>
                <Text style={styles.titleTabs}>85674912</Text>
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
                    <TouchableOpacity>
                        <View>
                            <Text>UGX 20,800</Text>
                        </View>
                        <Text>TOTAL EARNED</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View>
                            <Text>UGX 32,800</Text>
                        </View>
                        <Text>TOTAL CREDIT</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <View>
                        <ButtonAction onPress={() => console.log('Pressed')} buttonText="RECEIVE PAYMENT" />
                        <ButtonAction onPress={() => console.log('Pressed')} buttonText="PAY LOAN" />
                    </View>
                    <ButtonAction onPress={() => console.log('Pressed')} buttonText="MARKET PLACE" />
                </View>
            </View>
        </SafeAreaView>
    );

}

export default DashboardScreen;