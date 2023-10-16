import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text, View } from "react-native";
import Icon from "react-native-paper/lib/typescript/components/Icon";
import { IconButton } from "react-native-paper";
import { styles } from "./EarningsStyle";
import {screenStyles} from "../screenStyles"
import CreditScore from "../../components/CreditScore";

const EarningsScreen = () => {
    return (
        <SafeAreaView style={screenStyles.container}>
            <View style={screenStyles.subTitle}>
                <Text style={screenStyles.pageTitle}>TRANSACTIONS</Text>
                <Text style={screenStyles.pageTitle}>OCT 2023</Text>
            </View>
            <View style={screenStyles.subTitle}>
                <View>
                    <Text style={screenStyles.subTitleText}>TOTAL EARNED</Text>
                    <Text style={screenStyles.majorText}>UGX 20,800</Text>
                </View>
                <CreditScore />
            </View>
            <View>
                <Text>COMPARISON TO LAST MONTH</Text>
                <Text>SEP</Text>
            </View>
            <View>
                <View>
                    <View>
                        <Text>15</Text>
                    </View>
                    <View>
                        <Text>MANGOES</Text>
                        <View>
                            <IconButton icon="chevron-right" size={17} />
                            <Text>FRUITS</Text>
                        </View>
                    </View>
                    <View>
                        <Text>UGX 20,800</Text>
                        <Text>0771823425</Text>
                    </View>
                    <IconButton icon="chevron-right" size={17} />
                </View>
                <View>
                    <View>
                        <Text>15</Text>
                    </View>
                    <View>
                        <Text>BANANAS</Text>
                        <View>
                            <IconButton icon="chevron-right" size={17} />
                            <Text>FOOD</Text>
                        </View>
                    </View>
                    <View>
                        <Text>UGX 175,800</Text>
                        <Text>0771823425</Text>
                    </View>
                    <IconButton icon="chevron-right" size={17} />
                </View>
                <View>
                    <View>
                        <Text>14</Text>
                    </View>
                    <View>
                        <Text>MIXED</Text>
                        <View>
                            <IconButton icon="chevron-right" size={17} />
                            <Text>MIXED</Text>
                        </View>
                    </View>
                    <View>
                        <Text>UGX 200,800</Text>
                        <Text>0771823425</Text>
                    </View>
                    <IconButton icon="chevron-right" size={17} />
                </View>
                <View>
                    <View>
                        <Text>10</Text>
                    </View>
                    <View>
                        <Text>MILK</Text>
                        <View>
                            <IconButton icon="chevron-right" size={17} />
                            <Text>DAIRY</Text>
                        </View>
                    </View>
                    <View>
                        <Text>UGX 20,800</Text>
                        <Text>0771823425</Text>
                    </View>
                    <IconButton icon="chevron-right" size={17} />
                </View>
                <View>
                    <View>
                        <Text>10</Text>
                    </View>
                    <View>
                        <Text>EGGS</Text>
                        <View>
                            <IconButton icon="chevron-right" size={17} />
                            <Text>POULTRY</Text>
                        </View>
                    </View>
                    <View>
                        <Text>UGX 12,800</Text>
                        <Text>0771823425</Text>
                    </View>
                    <IconButton icon="chevron-right" size={17} />
                </View>
                <View>
                    <View>
                        <Text>09</Text>
                    </View>
                    <View>
                        <Text>PINEAPPLES</Text>
                        <View>
                            <IconButton icon="chevron-right" size={17} />
                            <Text>FRUITS</Text>
                        </View>
                    </View>
                    <View>
                        <Text>UGX 10,800</Text>
                        <Text>0771823425</Text>
                    </View>
                    <IconButton icon="chevron-right" size={17} />
                </View>
            </View>
        </SafeAreaView>
    );
    }

export default EarningsScreen;