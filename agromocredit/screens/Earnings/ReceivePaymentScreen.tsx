import React from "react";
import { Text, View } from "react-native";
import InputText from "../../components/Inputs/InputText";
import { SafeAreaView } from "react-native-safe-area-context";
import { IconButton, TextInput } from 'react-native-paper';
import SelectDropDown from "react-native-select-dropdown";
import ButtonAction from "../../components/Buttons/ButtonAction"; 

const ReceivePaymentScreen = () => {

    const [searchQuery, setSearchQuery] = React.useState('');

    const products = ["MILK", "ORANGES", "PINEAPPLES"];

    const handleSelect = (selectedItem: any, index: number) => {
        setSearchQuery(selectedItem);
    };

    return (
        <SafeAreaView>
            <View>
                <Text>TRANSACTIONS</Text>
                <Text>OCT 2023</Text>
            </View>
            <View>
                <Text>TOTAL EARNED</Text>
                <Text>UGX 20,800</Text>
            </View>
            <View>
                <Text>Request for Payment</Text>
                <SelectDropDown
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
                <InputText labelText="From" />
                <InputText labelText="Amount" />
                <ButtonAction onPress={() => console.log('Pressed')} buttonText="SEND" />
            </View>
        </SafeAreaView>
        
    );
    };

export default ReceivePaymentScreen;