import React from "react";
import { Text, View } from "react-native";
import InputText from "../../components/Inputs/InputText";
import { SafeAreaView } from "react-native-safe-area-context";
import { IconButton, TextInput } from 'react-native-paper';
import SelectDropDown from "react-native-select-dropdown";
import ButtonAction from "../../components/Buttons/ButtonAction";
import { screenStyles } from "../screenStyles";
import {styles} from "./ReceivePaymentStyle" 
import EarningsScreenHeaders from "../../components/Headers/EarningsScreenHeaders";

const ReceivePaymentScreen = () => {

    const [searchQuery, setSearchQuery] = React.useState('');

    const products = ["MILK", "ORANGES", "PINEAPPLES"];

    const handleSelect = (selectedItem: any, index: number) => {
        setSearchQuery(selectedItem);
    };

    return (
        <SafeAreaView style={screenStyles.container}>
            <EarningsScreenHeaders />
            <Text style={screenStyles.subTitleText}>REQUEST FOR PAYMENT</Text>
            <View style={styles.requestPaymentForm}>
                <Text style={screenStyles.subText}>FOR</Text>
                <View style={styles.dropDown}>
                    <SelectDropDown
                            buttonStyle={styles.dropdownButton}
                            buttonTextStyle={styles.dropdownButtonText}
                            defaultButtonText="Pick a Product"
                            data={products} 
                            onSelect={(selectedItem, index)=>{
                                handleSelect(selectedItem, index)
                            }}
                            buttonTextAfterSelection={(selectedItem, index)=>{
                                return selectedItem
                            }}
                            rowTextForSelection={(item, index)=>{
                                return item
                            }}/>
                    <IconButton icon="chevron-down" size={17} />
                </View>
                <InputText txtStyle={styles.textInput} labelText="From" />
                <InputText txtStyle={styles.textInput} labelText="Amount" />
                <ButtonAction  
                    onPress={() => console.log('Pressed')}
                    buttonText="SEND"
                    btnColor="#ffcb05" 
                    btnIcon=""
                    txtColor="#000"
                    rippleClr="#ff0"
                    btnContentStyling={styles.sendBtnStyles}
                    />
            </View>
        </SafeAreaView>
        
    );
    };

export default ReceivePaymentScreen;