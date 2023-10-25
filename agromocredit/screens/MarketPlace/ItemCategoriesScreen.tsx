import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { ScrollView } from "react-native";
import { IconButton } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./ItemCategoriesStyle";
import { marketStyles } from "./marketStyles";
import { useNavigation } from "@react-navigation/native";
import ButtonAction from "../../components/Buttons/ButtonAction";
import { screenStyles } from "../screenStyles";
import { useGetProductsByCategoryQuery } from "../../services/slices/marketPlaceSlice";

interface User {
  name: string;
  balance: number;
  id: number;
  phoneNumber: string;
}

interface ItemCategoriesScreenProps {
  route: {
    params: {
      user: User;
    };
  }
}

const ItemCategoriesScreen: React.FC<ItemCategoriesScreenProps> = ({ route }) => {
  const categories = [
    { name: "pestcides", label: "PEST CIDES", icon: "bug" },
    { name: "gardenTools", label: "GARDEN TOOLS", icon: "mower" },
    { name: "machinery", label: "MACHINERY", icon: "tractor" },
    { name: "seedlings", label: "SEEDLINGS", icon: "flower" },
    { name: "fertilizers", label: "FERTILIZERS", icon: "flash" },
    { name: "feeds", label: "FEEDS", icon: "corn" },
  ];

  const navigation = useNavigation();
  const { user } = route.params;

  return (
    <SafeAreaView>
      <ScrollView style={marketStyles.container}>
        <View style={marketStyles.titleContainer}>
          <Text style={marketStyles.screenTitle}>CATEGORIES</Text>
        </View>
        <View style={marketStyles.categoriesContainer}>
          {categories.map((category) => {
            const { data } = useGetProductsByCategoryQuery(category.label);
            return (
              <TouchableOpacity
                style={styles.categoryCard}
                key={category.name} // Add a unique key
                onPress={() => {
                  navigation.navigate("CategoryProducts", {
                    category: category.label,
                    products: data,
                    user: user, // Use the data from the query
                  });
                }}
              >
                <IconButton icon={category.icon} iconColor="#ffcb05" size={72} />
                <Text>{category.label}</Text>
                <Text style={marketStyles.smallText}>{`${data?.length} item(s)`}</Text>
              </TouchableOpacity>
            );
          })}
        </View>
        <ButtonAction
          onPress={() => {
            navigation.navigate("Transfer", {
              user: user,
            });
          }}
          buttonText="MAKING A PAYMENT?"
          buttonStyles={screenStyles.creditBtnStyles}
          buttonTxtStyles={screenStyles.creditBtnTextStyles}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default ItemCategoriesScreen;
