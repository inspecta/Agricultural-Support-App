import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { IconButton } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./ItemCategoriesStyle";
import { marketStyles } from "./marketStyles";
import { useNavigation } from "@react-navigation/native"
import ButtonAction from "../../components/Buttons/ButtonAction";
import { screenStyles } from "../screenStyles";

interface User {
    name: string
    balance: number
    id: number
    phoneNumber: string
  }
  
  interface ItemCategoriesScreenProps {
    route: {
      params: {
        user: User
      }
    }
  }

const ItemCategoriesScreen: React.FC<ItemCategoriesScreenProps> = ({ route }) => {
    const navigation = useNavigation()
    const { user } = route.params
  return (
    <SafeAreaView>
        <ScrollView style={marketStyles.container}>
            <View style={marketStyles.titleContainer}>
                <Text style={marketStyles.screenTitle}>CATEGORIES</Text>
            </View>
            <View style={marketStyles.categoriesContainer}>
                <TouchableOpacity
                    style={styles.categoryCard}
                    onPress={() => {
                        navigation.navigate("CategoryProducts", {
                            category: "PEST CIDES",
                        })
                    }}
                >
                    <IconButton icon="bug" iconColor="#ffcb05" size={72} />
                    <Text>PEST CIDES</Text>
                    <Text style={marketStyles.smallText}>87 items</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.categoryCard}
                    onPress={() => {
                        navigation.navigate("CategoryProducts", {
                            category: "GARDEN TOOLS",
                        })
                    }}
                >
                    <IconButton icon="mower" iconColor="#ffcb05" size={72} />
                    <Text>GARDEN TOOLS</Text>
                    <Text style={marketStyles.smallText}>87 items</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={styles.categoryCard}
                    onPress={() => {
                        navigation.navigate("CategoryProducts", {
                            category: "MACHINERY",
                        })
                    }}
                >
                    <IconButton icon="tractor" iconColor="#ffcb05" size={72} />
                    <Text>MACHINERY</Text>
                    <Text style={marketStyles.smallText}>87 items</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.categoryCard}
                    onPress={() => {
                        navigation.navigate("CategoryProducts", {
                            category: "SEEDLINGS",
                        })
                    }}
                >
                    <IconButton icon="flower" iconColor="#ffcb05" size={72} />
                    <Text>SEEDLINGS</Text>
                    <Text style={marketStyles.smallText}>87 items</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.categoryCard}
                    onPress={() => {
                        navigation.navigate("CategoryProducts", {
                            category: "FERTILIZERS",
                        })
                    }}
                >
                    <IconButton icon="flash" iconColor="#ffcb05" size={72} />
                    <Text>FERTILIZERS</Text>
                    <Text style={marketStyles.smallText}>87 items</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.categoryCard}
                    onPress={() => {
                        navigation.navigate("CategoryProducts", {
                            category: "FEEDS",
                        })
                    }}
                >
                    <IconButton icon="corn" iconColor="#ffcb05" size={72} />
                    <Text>FEEDS</Text>
                    <Text style={marketStyles.smallText}>87 items</Text>
                </TouchableOpacity>
            </View>
            <ButtonAction
                onPress={() => {
                    navigation.navigate("Transfer", {
                        user: user,
                    })
                }}
                buttonText="MAKING A PAYMENT?"
                buttonStyles={screenStyles.creditBtnStyles}
                buttonTxtStyles={screenStyles.creditBtnTextStyles}
                />
        </ScrollView>
    </SafeAreaView>
  )
}

export default ItemCategoriesScreen
