import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text, View } from "react-native";
import CreditScreenHeader from "../../components/Headers/CreditScreenHeader";
import { RadioButton } from "react-native-paper";
import InputText from "../../components/Inputs/InputText";
import ButtonAction from "../../components/Buttons/ButtonAction";

const PayLoanScreen = () => {

    const [checked, setChecked] = React.useState('0704445667');
    
    return (
    <SafeAreaView>
        <CreditScreenHeader screenTitle="CREDIT STATUS" activeButton="pay" />
        <View>
            <Text>OUTSTANDING LOANS</Text>
            <Text>-UGX 567,000</Text>
            <View>
                <View>
                    <View>
                        <RadioButton
                            value="0704445667"
                            status={checked === '0704445667' ? 'checked' : 'unchecked'}
                            onPress={()=>setChecked('0704445667')}
                        />
                    </View>
                    <View>
                        <Text>MULUNDO SAM</Text>
                        <Text>WEED MASTER</Text>
                    </View>
                    <View>
                        <Text>-UGX 477,000</Text>
                        <Text>UGX 500,000</Text>
                    </View>
                </View>
                <View>
                    <View>
                        <RadioButton
                            value="mtn"
                            status={checked === 'mtn' ? 'checked' : 'unchecked'}
                            onPress={()=>setChecked('mtn')}
                        />
                    </View>
                    <View>
                        <Text>MTN</Text>
                        <Text>GENERAL</Text>
                    </View>
                    <View>
                        <Text>-UGX 50,000</Text>
                        <Text>UGX 150,000</Text>
                    </View>
                </View>
            </View>
            <View>
                <Text>AMOUNT</Text>
                <InputText labelText="UGX 498,100" />
                <ButtonAction buttonText="PAY" onPress={() => console.log("Pressed")} />
            </View>
        </View>
    </SafeAreaView>
    );
    };

export default PayLoanScreen;