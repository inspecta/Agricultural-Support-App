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
            <EarningsScreenHeaders />
            <View style={screenStyles.subTitle}>
                <Text style={screenStyles.subTitleText}>COMPARISON TO LAST MONTH</Text>
                <Text style={screenStyles.subTitleText}>SEP</Text>
            </View>
            <View style={screenStyles.subTitle}>
                <Text style={screenStyles.majorText}>UGX 15,300</Text>
                <View style={screenStyles.subTitle}>
                    <Text style={styles.comparisonText}>UGX 440</Text>
                    <IconButton icon="arrow-up" iconColor="#E42C64" size={14} />
                </View>
            </View>
            <View style={styles.contentContainer}>
                <View style={styles.contentRecord}>
                    <View style={styles.recordDate}>
                        <Text style={styles.dateText}>15</Text>
                    </View>
                    <View style={styles.recordProduct}>
                        <Text style={screenStyles.subTitleText}>MANGOES</Text>
                        <View style={styles.productCategory}>
                            <IconButton icon="fruit-cherries" iconColor="#E42C64" size={15} style={styles.productIcon} />
                            <Text style={screenStyles.subText}>FRUITS</Text>
                        </View>
                    </View>
                    <View>
                        <Text style={screenStyles.subTitleText}>UGX 20,800</Text>
                        <Text style={screenStyles.subText}>0771823425</Text>
                    </View>
                    <IconButton icon="chevron-right" size={17} iconColor="#fff" />
                </View>
                <View style={styles.contentRecord}>
                    <View style={styles.recordDate}>
                        <Text style={styles.dateText}>15</Text>
                    </View>
                    <View style={styles.recordProduct}>
                        <Text style={screenStyles.subTitleText}>BANANAS</Text>
                        <View style={styles.productCategory}>
                            <IconButton icon="food" iconColor="#E42C64" size={15} style={styles.productIcon} />
                            <Text style={screenStyles.subText}>FOOD</Text>
                        </View>
                    </View>
                    <View>
                        <Text style={screenStyles.subTitleText}>UGX 175,800</Text>
                        <Text style={screenStyles.subText}>0771823425</Text>
                    </View>
                    <IconButton icon="chevron-right" size={17} iconColor="#fff" />
                </View>
                <View style={styles.contentRecord}>
                    <View style={styles.recordDate}>
                        <Text style={styles.dateText}>14</Text>
                    </View>
                    <View style={styles.recordProduct}>
                        <Text style={screenStyles.subTitleText}>MIXED</Text>
                        <View style={styles.productCategory}>
                            <IconButton icon="shopping" iconColor="#E42C64" size={15} style={styles.productIcon} />
                            <Text style={screenStyles.subText}>MIXED</Text>
                        </View>
                    </View>
                    <View>
                        <Text style={screenStyles.subTitleText}>UGX 200,800</Text>
                        <Text style={screenStyles.subText}>0771823425</Text>
                    </View>
                    <IconButton icon="chevron-right" size={17} iconColor="#fff" />
                </View>
                <View style={styles.contentRecord}>
                    <View style={styles.recordDate}>
                        <Text style={styles.dateText}>10</Text>
                    </View>
                    <View style={styles.recordProduct}>
                        <Text style={screenStyles.subTitleText}>MILK</Text>
                        <View style={styles.productCategory}>
                            <IconButton icon="cow" iconColor="#E42C64" size={15} style={styles.productIcon} />
                            <Text style={screenStyles.subText}>DAIRY</Text>
                        </View>
                    </View>
                    <View>
                        <Text style={screenStyles.subTitleText}>UGX 20,800</Text>
                        <Text style={screenStyles.subText}>0771823425</Text>
                    </View>
                    <IconButton icon="chevron-right" size={17} iconColor="#fff" />
                </View>
                <View style={styles.contentRecord}>
                    <View style={styles.recordDate}>
                        <Text style={styles.dateText}>10</Text>
                    </View>
                    <View style={styles.recordProduct}>
                        <Text style={screenStyles.subTitleText}>EGGS</Text>
                        <View style={styles.productCategory}>
                            <IconButton icon="egg" iconColor="#E42C64" size={15} style={styles.productIcon} />
                            <Text style={screenStyles.subText}>POULTRY</Text>
                        </View>
                    </View>
                    <View>
                        <Text style={screenStyles.subTitleText}>UGX 12,800</Text>
                        <Text style={screenStyles.subText}>0771823425</Text>
                    </View>
                    <IconButton icon="chevron-right" size={17} iconColor="#fff" />
                </View>
                <View style={styles.contentRecord}>
                    <View style={styles.recordDate}>
                        <Text style={styles.dateText}>09</Text>
                    </View>
                    <View style={styles.recordProduct}>
                        <Text style={screenStyles.subText}>PINEAPPLES</Text>
                        <View style={styles.productCategory}>
                            <IconButton icon="fruit-cherries" iconColor="#E42C64" size={15} style={styles.productIcon} />
                            <Text style={screenStyles.subText}>FRUITS</Text>
                        </View>
                    </View>
                    <View style={styles.recordTransaction}>
                        <Text style={screenStyles.subTitleText}>UGX 10,800</Text>
                        <Text style={screenStyles.subText}>0771823425</Text>
                    </View>
                    <IconButton icon="chevron-right" size={17} iconColor="#fff" />
                </View>
            </View>
        </SafeAreaView>
    );
    }

export default EarningsScreen;