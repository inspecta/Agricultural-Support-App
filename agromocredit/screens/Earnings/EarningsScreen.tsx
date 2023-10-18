import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text, View } from "react-native";
import Icon from "react-native-paper/lib/typescript/components/Icon";
import { IconButton } from "react-native-paper";
import { styles } from "./EarningsStyle";
import {screenStyles} from "../screenStyles"
import EarningsScreenHeaders from "../../components/Headers/EarningsScreenHeaders";
import TransactionRecord from "../../components/TransactionRecord";

const EarningsScreen = () => {
    return (
        <SafeAreaView style={screenStyles.container}>
            <EarningsScreenHeaders />
            <View style={screenStyles.subTitle}>
                <Text style={screenStyles.subTitleText}>COMPARISON TO LAST MONTH</Text>
                <Text style={screenStyles.subTitleText}>SEP</Text>
            </View>
            <View style={screenStyles.subTitle}>
                <Text style={screenStyles.majorText}>UGX 15,300</Text>
                <View style={screenStyles.subTitle}>
                    <Text style={styles.comparisonText}>UGX 440</Text>
                    <IconButton icon="arrow-up" iconColor="#ffcb05" size={14} />
                </View>
            </View>
            <View style={styles.contentContainer}>
                <TransactionRecord
                    recordDate={15}
                    recordValue="MANGOES"
                    recordIcon="fruit-cherries"
                    recordSubject="FRUITS"
                    recordSubAttr1="UGX 20,800"
                    recordSubAttr2="0771823425"
                    recordDated={true}
                    detailsIcon={true}
                    creditScreen={false}    
                />
                <TransactionRecord
                    recordDate={15}
                    recordValue="BANANAS"
                    recordIcon="food"
                    recordSubject="FOOD"
                    recordSubAttr1="UGX 175,800"
                    recordSubAttr2="0771823425"
                    recordDated={true}
                    detailsIcon={true}
                    creditScreen={false}    
                />
                <TransactionRecord
                    recordDate={14}
                    recordValue="MIXED"
                    recordIcon="shopping"
                    recordSubject="MIXED"
                    recordSubAttr1="UGX 200,800"
                    recordSubAttr2="0771823425"
                    recordDated={true}
                    detailsIcon={true}
                    creditScreen={false}    
                />
                <TransactionRecord
                    recordDate={14}
                    recordValue="MILK"
                    recordIcon="cow"
                    recordSubject="DIARY"
                    recordSubAttr1="UGX 200,800"
                    recordSubAttr2="0771823425"
                    recordDated={true}
                    detailsIcon={true}
                    creditScreen={false}    
                />
                <TransactionRecord
                    recordDate={10}
                    recordValue="EGGS"
                    recordIcon="egg"
                    recordSubject="POULTRY"
                    recordSubAttr1="UGX 12,800"
                    recordSubAttr2="0771823425"
                    recordDated={true}
                    detailsIcon={true}
                    creditScreen={false}    
                />
                <TransactionRecord
                    recordDate={9}
                    recordValue="PINEAPPLES"
                    recordIcon="fruit-cherries"
                    recordSubject="FRUITS"
                    recordSubAttr1="UGX 10,800"
                    recordSubAttr2="0771823425"
                    recordDated={true}
                    detailsIcon={true}
                    creditScreen={true}    
                />
            </View>
        </SafeAreaView>
    );
    }

export default EarningsScreen;