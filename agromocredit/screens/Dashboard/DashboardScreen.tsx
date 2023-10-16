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
                <View style={styles.subTitle}>
                    <View>
                        <Text style={styles.balanceText}>YOUR CURRENT BALANCE</Text>
                        <Text style={styles.balance}>UGX 89,800</Text>
                    </View>
                    <View style={styles.creditScoreContainer}>
                        <View style={styles.creditScoreTextContainer}>
                            <IconButton icon="credit-card-fast" iconColor="#fff" size={22} />
                            <View>
                                <Text style={styles.creditScoreText}>CREDIT</Text>
                                <Text style={styles.creditScoreText}>SCORE</Text>
                            </View>
                        </View>
                        <View style={styles.scoreContainer}><Text style={styles.creditScore}>6.2</Text></View>
                    </View>
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
                                btnColor="#03A9F1"
                                btnIcon=""
                                txtColor=""
                                rippleClr="#03A999"
                                btnContentStyling={styles.screenBtnStyles}
                            />
                        </View>
                        <View style={styles.screenBtn}>
                            <ButtonAction
                                onPress={() => console.log('Pressed')}
                                buttonText="PAY LOAN" btnColor="#09F9BF"
                                btnIcon=""
                                txtColor="#352B73"
                                rippleClr="#09FFFF"
                                btnContentStyling={styles.screenBtnStyles}
                            />
                        </View>
                    </View>
                    <View style={styles.marketBtn}>
                        <ButtonAction
                            onPress={() => console.log('Pressed')}
                            buttonText="MARKET PLACE"
                            btnColor="#E42C64" 
                            btnIcon=""
                            txtColor=""
                            rippleClr="#E42CCC"
                            btnContentStyling={styles.marketBtnStyles}
                        />
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );

}

export default DashboardScreen;