import React, { useState } from "react";
import { View, Text, TouchableOpacity, ImageBackground } from "react-native";
import { ScrollView } from "react-native";
import { IconButton } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./CategoryProductStyle";
import { marketStyles } from "./marketStyles";
import InputText from "../../components/Inputs/InputText";
import { useNavigation } from "@react-navigation/native";
import ButtonAction from "../../components/Buttons/ButtonAction";
import { screenStyles } from "../screenStyles";
import { useGetCreditScoreQuery } from "../../services/slices/transactionSlice";

const CategoryProductsScreen: React.FC = ({ route }) => {
  const { user } = route.params;
  const { category, products } = route.params;
  const [formValues, setFormValues] = useState({
    payerNumber: "",
    amount: "",
    reason: "",
  });
  const [loadMore, setLoadMore] = useState(false);
  const [productsDisplaying, setProductsDisplaying] = useState(6);

  const { data: creditScore } = useGetCreditScoreQuery(user.id);

  const maxLoan = creditScore ? (creditScore / 10) * 1000000 : 0;

  const handleLoadMore = () => {
    setProductsDisplaying(productsDisplaying + 6);
  };

  const navigation = useNavigation();
  const handleInputChange = (name: string, value: string) => {
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  return (
    <SafeAreaView>
      <ScrollView style={marketStyles.container}>
        <View style={marketStyles.titleContainer}>
          <Text style={marketStyles.screenTitle}>{category}</Text>
        </View>
        <InputText
          txtStyle={marketStyles.textInput}
          labelText="Search"
          name="amount"
          value={formValues.amount}
          onChangeText={(text) => handleInputChange("amount", text)}
        />
        <ScrollView>
          <View style={marketStyles.categoriesContainer}>
            {products.slice(0, productsDisplaying).map((product) => {
              return (
                <TouchableOpacity
                  style={styles.categoryCard}
                  key={product.id} // Use a unique identifier like "id" as the key
                  onPress={() => {
                    navigation.navigate("Product", {
                      product: product,
                      maxLoan: maxLoan,
                      user: user,
                    });
                  }}
                >
                  <ImageBackground
                    source={{ uri: product.image }} // Correct the image source
                    style={styles.cardImage}
                    imageStyle={{ borderRadius: 20 }}
                  >
                    <View style={styles.cardTextContainer}>
                      <View>
                        <Text style={styles.productName}>{product.name}</Text>
                        <Text style={styles.productPrice}>{product.price}</Text>
                      </View>
                      {product.price <= maxLoan ? (
                        <IconButton
                          icon="credit-card-clock"
                          iconColor="#ffcb05"
                          size={18}
                          style={marketStyles.creditableIcon}
                        />
                      ) : (
                        <IconButton
                          icon="credit-card-clock"
                          iconColor="#fff"
                          size={18}
                          style={marketStyles.creditableIcon}
                        />
                      )}
                    </View>
                  </ImageBackground>
                </TouchableOpacity>
              );
            })}
          </View>
          {productsDisplaying < products.length && ( // Check if there are more products to load
            <ButtonAction
              onPress={handleLoadMore}
              buttonText="LOAD MORE ..."
              buttonStyles={screenStyles.creditBtnStyles}
              buttonTxtStyles={screenStyles.creditBtnTextStyles}
            />
          )}
        </ScrollView>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CategoryProductsScreen;
