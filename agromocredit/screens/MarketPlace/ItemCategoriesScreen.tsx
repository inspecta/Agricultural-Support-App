import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { IconButton } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import { screenStyles } from "../screenStyles";
import { styles } from "./ItemCategoriesStyle";
import { marketStyles} from "./marketStyles";

const ItemCategoriesScreen = () => {
  return (
    <SafeAreaView>
        <ScrollView style={marketStyles.container}>
            <View style={marketStyles.titleContainer}>
                <Text style={marketStyles.screenTitle}>CATEGORIES</Text>
            </View>
            <View  style={styles.categoriesContainer}>
                <TouchableOpacity style={styles.categoryCard}>
                    <IconButton icon="bug" iconColor="#ffcb05" size={72} />
                    <Text >PEST CIDES</Text>
                    <Text style={marketStyles.smallText}>87 items</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.categoryCard}>
                    <IconButton icon="mower" iconColor="#ffcb05" size={72} />
                    <Text>GARDEN TOOLS</Text>
                    <Text style={marketStyles.smallText}>87 items</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.categoryCard}>
                    <IconButton icon="tractor" iconColor="#ffcb05" size={72} />
                    <Text>MACHINERY</Text>
                    <Text style={marketStyles.smallText}>87 items</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.categoryCard}>
                    <IconButton icon="flower" iconColor="#ffcb05" size={72} />
                    <Text>SEEDLINGS</Text>
                    <Text style={marketStyles.smallText}>87 items</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.categoryCard}>
                    <IconButton icon="flash" iconColor="#ffcb05" size={72} />
                    <Text>FERTILIZERS</Text>
                    <Text style={marketStyles.smallText}>87 items</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.categoryCard}>
                    <IconButton icon="corn" iconColor="#ffcb05" size={72} />
                    <Text>FEEDS</Text>
                    <Text style={marketStyles.smallText}>87 items</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    </SafeAreaView>
  )
}

export default ItemCategoriesScreen