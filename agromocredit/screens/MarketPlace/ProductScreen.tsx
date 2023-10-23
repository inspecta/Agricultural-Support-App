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
import { useNavigation } from "@react-navigation/native"
import { screenStyles } from "../screenStyles"
import { marketStyles } from "./marketStyles"
import { IconButton } from "react-native-paper"

interface ProductScreenProps {
  route: {
    params: {
      product: {
        id: string
        name: string
        price: number
        supplierNumber: string
        category: string
        image: any
        supplierName: string
      }
      maxLoan: number
    }
  }
}

const Product: React.FC<ProductScreenProps> = ({ route }) => {
    const { product, maxLoan } = route.params
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
            {product.name}
            </Text>
            <IconButton onPress={() => handleChange("minimize")} icon="chevron-down" iconColor="#ffcb05" size={32} style={marketStyles.creditableIcon} />
          </View>
          <Text style={styles.productPrice}>{product.price}</Text>
          <View style={styles.productContainer}>
            <Text style={styles.categoryText}>{`Supplier: ${product.supplierName}`}</Text>
            <Text style={styles.categoryText}>{product.category}</Text>
          </View>
          <View style={styles.productContainer}>
            {product.price <= maxLoan ? (
                <>
                  <IconButton icon="credit-card-clock" iconColor="#ffcb05" size={24} style={marketStyles.creditableIcon} />
                  <Text style={styles.categoryText}>You can purchase this product on credit</Text>
                </>
              ): (
                <>
                  <IconButton icon="credit-card-clock" iconColor="#000" size={24} style={marketStyles.creditableIcon} />
                  <Text style={styles.categoryText}>Your credit score doesnt qualify for a credit purchase</Text>
                </>
              )
            }
          </View>
          <View style={styles.productContainer}>
              <ButtonAction
              onPress={() => console.log("Create Account")}
              buttonText="PAY WITH MOMO"
              buttonStyles={styles.payButton}
              buttonTxtStyles={styles.payBtnTextStyles}
              />
              {product.price <= maxLoan ? (
                <ButtonAction
                onPress={() => console.log("Create Account")}
                buttonText="BUY ON CREDIT"
                buttonStyles={styles.creditButton}
                buttonTxtStyles={styles.creditBtnTextStyles}
                />
              ): (
                <ButtonAction
                onPress={() => console.log("Create Account")}
                buttonText="BUY ON CREDIT"
                buttonStyles={styles.creditButtonDisabled}
                buttonTxtStyles={styles.creditBtnTextStylesDisabled}
                />
              )}
              
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
        source={ {uri: product.image}}
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
