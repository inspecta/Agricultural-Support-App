import React, { useState } from "react"
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
} from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { styles } from "./ProductStyle"
import ButtonAction from "../../components/Buttons/ButtonAction"
import InputText from "../../components/Inputs/InputText"
import { useNavigation } from "@react-navigation/native"
import { screenStyles } from "../screenStyles"
import { useLoginUserMutation } from "../../services/slices/transactionSlice"
import { log } from "console"
import { marketStyles } from "./marketStyles"
import { IconButton } from "react-native-paper"

interface Product {
    productName: string
    price: string
    image: any
    supplier: string
    category: string
  }

interface ProductScreenProps {
    route: {
      params: {
        product: Product
      }
    }
  }

const Product: React.FC<ProductScreenProps> = ({ route }) => {
    const { product } = route.params
    const [activeDisplay, setActiveDisplay] = useState("details")

    let contentDisplay

    const handleChange = (newDisplay: React.SetStateAction<string>) => {
      setActiveDisplay(newDisplay)
    }

    if (activeDisplay === "details") {
      contentDisplay = (
        <View style={styles.contentContainer}>
          <View style={styles.productContainer}>
            <Text style={styles.productName}>
            {product.productName}
            </Text>
            <IconButton onPress={() => handleChange("minimize")} icon="chevron-down" iconColor="#ffcb05" size={32} style={marketStyles.creditableIcon} />
          </View>
          <Text style={styles.productPrice}>{product.price}</Text>
          <View style={styles.productContainer}>
            <Text style={styles.categoryText}>{product.supplier}</Text>
            <Text style={styles.categoryText}>{product.category}</Text>
          </View>
          <View style={styles.productContainer}>
              <IconButton icon="credit-card-clock" iconColor="#ffcb05" size={24} style={marketStyles.creditableIcon} />
              <Text style={styles.categoryText}>You can purchase this product on credit</Text>
          </View>
          <View style={styles.productContainer}>
              <ButtonAction
              onPress={() => console.log("Create Account")}
              buttonText="PAY WITH MOMO"
              buttonStyles={styles.payButton}
              buttonTxtStyles={styles.payBtnTextStyles}
              />
              <ButtonAction
              onPress={() => console.log("Create Account")}
              buttonText="BUY ON CREDIT"
              buttonStyles={styles.creditButton}
              buttonTxtStyles={styles.creditBtnTextStyles}
              />
          </View>
      </View>
      )}else {
        contentDisplay = (
          <View style={styles.contentContainer}>
            
              <ButtonAction
              onPress={() => handleChange("details")}
              buttonText="VIEW DETAILS"
              buttonStyles={screenStyles.creditBtnStyles}
              buttonTxtStyles={screenStyles.creditBtnTextStyles}
              />
        </View>
        )
      }
    
  return (
    <SafeAreaView style={screenStyles.creditScreenContainer}>
      <ImageBackground
        source={product.image}
        style={styles.welcomeScreenContainer}
      >
        <TouchableOpacity
          onPress={() => handleChange("minimize")}
          style={styles.banner}
        ></TouchableOpacity>
        <View style={styles.bottomContent}>
          {contentDisplay}
        </View>
      </ImageBackground>
    </SafeAreaView>
  )
}

export default Product
