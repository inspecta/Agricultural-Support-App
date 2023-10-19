import React from "react";
import { View, Text, Image } from "react-native";
import ButtonAction from "../Buttons/ButtonAction";
import { styles } from "./CreditScreenHeaderStyle";
import { screenStyles } from "../../screens/screenStyles";

interface ButtonActionProps {
    activeButton: string;
    screenTitle: string;
  }

const CreditScreenHeader: React.FC<ButtonActionProps> = ({ screenTitle, activeButton }) => {
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
                    onPress={() => console.log('Pressed')}
                    buttonText="PAY NOW"
                    buttonStyles={activeButton === 'pay' ? styles.activeBtnStyles : styles.creditBtnStyles}
                    buttonTxtStyles={activeButton === 'pay' ? styles.activeBtnTextStyles : styles.creditBtnTextStyles}
                />
                <ButtonAction
                    onPress={() => console.log('Pressed')}
                    buttonText="CREDIT HISTORY"
                    buttonStyles={activeButton === 'history' ? styles.activeBtnStyles : styles.creditBtnStyles}
                    buttonTxtStyles={activeButton === 'history' ? styles.activeBtnTextStyles : styles.creditBtnTextStyles}
                />
                <ButtonAction
                    onPress={() => console.log('Pressed')}
                    buttonText="LENT OUT"
                    buttonStyles={activeButton === 'lent' ? styles.activeBtnStyles : styles.creditBtnStyles}
                    buttonTxtStyles={activeButton === 'lent' ? styles.activeBtnTextStyles : styles.creditBtnTextStyles}
                />
                <ButtonAction
                    onPress={() => console.log('Pressed')}
                    buttonText="MOMO BORROW"
                    buttonStyles={activeButton === 'borrow' ? styles.activeBtnStyles : styles.creditBtnStyles}
                    buttonTxtStyles={activeButton === 'borrow' ? styles.activeBtnTextStyles : styles.creditBtnTextStyles}
                />
            </View>
        </View>
    )
}

export default CreditScreenHeader;