import React, {useState} from "react";
import { View, Text, TouchableOpacity, ImageBackground } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Button, IconButton } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./CategoryProductStyle";
import { marketStyles} from "./marketStyles";
import InputText from "../../components/Inputs/InputText";
import { useNavigation } from "@react-navigation/native"
import ButtonAction from "../../components/Buttons/ButtonAction";
import { screenStyles } from "../screenStyles";

const CategoryProductsScreen: React.FC = ({ route }) => {
    const { category } = route.params
    const [formValues, setFormValues] = useState({
        payerNumber: "",
        amount: "",
        reason: "",
      })

    const navigation = useNavigation()
    const handleInputChange = (name: string, value: string) => {
        setFormValues({
          ...formValues,
          [name]: value,
        })
      }
    
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
            <View  style={marketStyles.categoriesContainer}>
                <TouchableOpacity 
                    style={styles.categoryCard}
                    onPress={() => {
                        navigation.navigate("Product", {
                            product: { productName: "Polvo", price: "UGX 15000", image: require("./assets/pestcide2.jpg") },
                        })
                    }}
                    >
                    <ImageBackground
                        source={require("./assets/pestcide2.jpg")}
                        style={styles.cardImage}
                        imageStyle={{ borderRadius: 20}}
                    >
                    <View style={styles.cardTextContainer}>
                        <View>
                            <Text style={styles.productName}>Polvo</Text>
                            <Text style={styles.productPrice}>UGX 15000</Text>
                        </View>
                        <IconButton icon="credit-card-clock" iconColor="#ffcb05" size={18} style={marketStyles.creditableIcon} />
                    </View>
                    </ImageBackground>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={styles.categoryCard}
                    onPress={() => {
                        navigation.navigate("Product", {
                            product: { productName: "Coffee", price: "UGX 5000", image: require("./assets/machine1.jpg") },
                        })
                    }}
                    >
                    <ImageBackground
                        source={require("./assets/seedling1.jpeg")}
                        style={styles.cardImage}
                        imageStyle={{ borderRadius: 20}}
                    >
                    <View style={styles.cardTextContainer}>
                        <View>
                            <Text style={styles.productName}>Coffee</Text>
                            <Text style={styles.productPrice}>UGX 5000</Text>
                        </View>
                        <IconButton icon="credit-card-clock" iconColor="#ffcb05" size={18} style={marketStyles.creditableIcon} />
                    </View>
                    </ImageBackground>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.categoryCard}
                    onPress={() => {
                        navigation.navigate("Product", {
                            product: { productName: "Irrigator", price: "UGX 600000", image: require("./assets/pestcide1.webp") },
                        })
                    }}
                    >
                    <ImageBackground
                        source={require("./assets/machine1.jpg")}
                        style={styles.cardImage}
                        imageStyle={{ borderRadius: 20}}
                    >
                    <View style={styles.cardTextContainer}>
                        <View>
                            <Text style={styles.productName}>Irrigator</Text>
                            <Text style={styles.productPrice}>UGX 600000</Text>
                        </View>
                        <IconButton icon="credit-card-clock" iconColor="#fff" size={18} style={marketStyles.creditableIcon} />
                    </View>
                    </ImageBackground>
                </TouchableOpacity>
                <TouchableOpacity style={styles.categoryCard}>
                    <ImageBackground
                        source={require("./assets/pestcide1.webp")}
                        style={styles.cardImage}
                        imageStyle={{ borderRadius: 20}}
                    >
                    <View style={styles.cardTextContainer}>
                        <View>
                            <Text style={styles.productName}>Raid</Text>
                            <Text style={styles.productPrice}>UGX 30000</Text>
                        </View>
                        <IconButton icon="credit-card-clock" iconColor="#ffcb05" size={18} style={marketStyles.creditableIcon} />
                    </View>
                    </ImageBackground>
                </TouchableOpacity>
                <TouchableOpacity style={styles.categoryCard}>
                    <ImageBackground
                        source={require("./assets/tool1.jpg")}
                        style={styles.cardImage}
                        imageStyle={{ borderRadius: 20}}
                    >
                    <View style={styles.cardTextContainer}>
                        <View>
                            <Text style={styles.productName}>Sprayer</Text>
                            <Text style={styles.productPrice}>UGX 300000</Text>
                        </View>
                        <IconButton icon="credit-card-clock" iconColor="#fff" size={18} style={marketStyles.creditableIcon} />
                    </View>
                    </ImageBackground>
                </TouchableOpacity>
                <TouchableOpacity style={styles.categoryCard}>
                    <ImageBackground
                        source={require("./assets/seedling4.jpg")}
                        style={styles.cardImage}
                        imageStyle={{ borderRadius: 20}}
                    >
                    <View style={styles.cardTextContainer}>
                        <View>
                            <Text style={styles.productName}>Bayer</Text>
                            <Text style={styles.productPrice}>UGX 150000</Text>
                        </View>
                        <IconButton icon="credit-card-clock" iconColor="#ffcb05" size={18} style={marketStyles.creditableIcon} />
                    </View>
                    </ImageBackground>
                </TouchableOpacity>
            </View>
            <ButtonAction
                onPress={() => { console.log("clicked")
                }}
                buttonText="LOAD MORE ..."
                buttonStyles={screenStyles.creditBtnStyles}
                buttonTxtStyles={screenStyles.creditBtnTextStyles}
            />
            </ScrollView>
        </ScrollView>
    </SafeAreaView>
  )
}

export default CategoryProductsScreen