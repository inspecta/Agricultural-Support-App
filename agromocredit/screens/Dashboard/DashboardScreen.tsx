import React from "react";
import { Text, TouchableOpacity, View, Image } from "react-native";
import { IconButton } from "react-native-paper";
import ButtonAction from "../../components/Buttons/ButtonAction";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./DashboardStyle";
import { screenStyles } from "../screenStyles";
import CreditScore from "../../components/CreditScore";

const DashboardScreen = () => {

    return (
        <SafeAreaView style={screenStyles.container}>
            <View style={screenStyles.subTitle}>
                <Text style={screenStyles.pageTitle}>MULINDE DERRICK</Text>
                <Image source={require('../assets/titleImg.png')} />
            </View>
            <View style={screenStyles.subTitle} >
                <Text style={styles.titleTabs}>MERCHANT ID</Text>
                <Text style={styles.titleTabs}>85674912</Text>
            </View>
            <View >
                <View style={screenStyles.subTitle}>
                    <View>
                        <Text style={screenStyles.subTitleText}>YOUR CURRENT BALANCE</Text>
                        <Text style={screenStyles.majorText}>UGX 89,800</Text>
                    </View>
                    <CreditScore />
                </View>
                <View style={styles.transactionsContainer}>
                    <Text style={styles.transactionsTitle}>TRANSACTIONS</Text>
                    <TouchableOpacity style={styles.transactionsSections}>
                        <View style={styles.transactionsButton}>
                            <Text style={styles.transactionsButtonText}>UGX 20,800</Text>
                        </View>
                        <Text style={styles.transactionsText}>TOTAL EARNED</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.transactionsSections}>
                        <View style={styles.transactionsButton}>
                            <Text style={styles.transactionsButtonText}>UGX 32,800</Text>
                        </View >
                        <Text style={styles.transactionsText}>TOTAL CREDIT</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.buttonsContainer}>
                    <View style={styles.screenButtonsContainer}>
                        <View style={styles.screenBtn}>
                            <ButtonAction 
                                onPress={() => console.log('Pressed')}
                                buttonText="RECEIVE PAYMENT"
                                buttonStyles={styles.btnStyles}
                                buttonTxtStyles={screenStyles.creditBtnTextStyles}
                            />
                        </View>
                        <View style={styles.screenBtn}>
                            <ButtonAction
                                onPress={() => console.log('Pressed')}
                                buttonText="PAY LOAN"
                                buttonStyles={styles.btnStyles}
                                buttonTxtStyles={screenStyles.creditBtnTextStyles}
                            />
                        </View>
                    </View>
                    <View style={styles.marketBtn}>
                        <ButtonAction
                            onPress={() => console.log('Pressed')}
                            buttonText="MARKET PLACE"
                            buttonStyles={screenStyles.creditBtnStyles}
                            buttonTxtStyles={screenStyles.creditBtnTextStyles}
                        />
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );

}

export default DashboardScreen;