import React, {useState} from "react";
import { View, Text, Image } from "react-native";
import ButtonAction from "../Buttons/ButtonAction";
import { useNavigation } from "@react-navigation/native"
import { styles } from "./CreditScreenHeaderStyle";
import { screenStyles } from "../../screens/screenStyles";

interface CreditScreenHeaderProps {
    activeButton: string;
    screenTitle: string;
    user: {
        name: string
        balance: number
        id: number
        phoneNumber: string
    }
    handleTabs: (activeButton: string) => void
  }
  
const CreditScreenHeader: React.FC<CreditScreenHeaderProps> = ({ screenTitle, activeButton, handleTabs, user }) => {
    const navigation = useNavigation()
    return (
        <View style={styles.container}>
            <View style={screenStyles.subTitle}>
                <Text style={screenStyles.creditScreenPageTitle}>{screenTitle}</Text>
                <Image source={require('../../screens/assets/titleImg.png')} />
            </View>
            <View style={screenStyles.subTitle}>
            <Text style={screenStyles.creditScreenMajorText}>UGX 567,700</Text> 
            </View> 
            <View style={styles.buttonContainer}>
                <ButtonAction
                    onPress={() => {handleTabs('pay')}}
                    buttonText="PAY NOW"
                    buttonStyles={activeButton === 'pay' ? styles.activeBtnStyles : styles.creditBtnStyles}
                    buttonTxtStyles={activeButton === 'pay' ? styles.activeBtnTextStyles : styles.creditBtnTextStyles}
                />
                <ButtonAction
                    onPress={() => {handleTabs('history')}}
                    buttonText="CREDIT HISTORY"
                    buttonStyles={activeButton === 'history' ? styles.activeBtnStyles : styles.creditBtnStyles}
                    buttonTxtStyles={activeButton === 'history' ? styles.activeBtnTextStyles : styles.creditBtnTextStyles}
                />
                <ButtonAction
                    onPress={() => {handleTabs('borrow')}}
                    buttonText="BORROW"
                    buttonStyles={activeButton === 'borrow' ? styles.activeBtnStyles : styles.creditBtnStyles}
                    buttonTxtStyles={activeButton === 'borrow' ? styles.activeBtnTextStyles : styles.creditBtnTextStyles}
                />
            </View>
        </View>
    )
}

export default CreditScreenHeader;