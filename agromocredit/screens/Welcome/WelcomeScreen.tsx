import React, { useState } from "react"
import { View, Text, TouchableOpacity, ImageBackground } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { styles } from "./WelcomeStyle"
import ButtonAction from "../../components/Buttons/ButtonAction"
import InputText from "../../components/Inputs/InputText"
import { useNavigation } from "@react-navigation/native"
import LoadingIndicator from "../Notifications/LoadingIndicator"
import { screenStyles } from "../screenStyles"
import { useLoginUserMutation } from "../../services/slices/transactionSlice"

const WelcomeScreen = () => {
  const [activeForm, setActiveForm] = useState("buttons")
  const [momoNumber, setMomoNumber] = useState("")
  const [password, setPassword] = useState("")
  const [isLoading, setIsLoading] = React.useState(false)

  const [loginUser] = useLoginUserMutation()

  const navigation = useNavigation()

  let bottomContent

  const handleChange = (newForm: React.SetStateAction<string>) => {
    setActiveForm(newForm)
  }

  const handleLogin = async () => {
    setIsLoading(true)

    try {
      const result = await loginUser({
        phoneNumber: momoNumber,
        password: password,
      })

      if ("data" in result && result.data) {
        setIsLoading(false)
        const userData = result.data
        navigation.navigate("Dashboard", {
          user: userData,
        } as { user: any })
      } else {
        console.log("Not authenticated")
      }
    } catch (error) {
      setIsLoading(false)
      console.log("Invalid Credentials.")
    } finally {
      setIsLoading(false)
    }
  }

  if (activeForm === "buttons") {
    bottomContent = (
      <View style={styles.buttonsContainer}>
        <Text style={screenStyles.creditScreenPageTitle}>
          WELCOME TO AGROMOCREDIT
        </Text>
        <ButtonAction
          onPress={() => handleChange("register")}
          buttonText="CREATE ACCOUNT"
          buttonStyles={screenStyles.creditBtnStyles}
          buttonTxtStyles={screenStyles.creditBtnTextStyles}
        />
        <ButtonAction
          onPress={() => handleChange("login")}
          buttonText="LOGIN"
          buttonStyles={screenStyles.creditBtnStyles}
          buttonTxtStyles={screenStyles.creditBtnTextStyles}
        />
      </View>
    )
  } else if (activeForm === "register") {
    bottomContent = (
      <View style={styles.buttonsContainer}>
        <Text style={screenStyles.creditScreenPageTitle}>
          CREATE AN ACCOUNT
        </Text>
        <InputText labelText="Email" txtStyle={screenStyles.textInput} />
        <InputText
          labelText="MOMO Registered Number"
          txtStyle={screenStyles.textInput}
        />
        <InputText labelText="Full Name" txtStyle={screenStyles.textInput} />
        <InputText labelText="Password" txtStyle={screenStyles.textInput} />
        <InputText
          labelText="Confirm Password"
          txtStyle={screenStyles.textInput}
        />
        <ButtonAction
          onPress={() => handleChange("login")}
          buttonText="REGISTER"
          buttonStyles={screenStyles.creditBtnStyles}
          buttonTxtStyles={screenStyles.creditBtnTextStyles}
        />
        <Text style={screenStyles.creditScreenSubText}>
          Already have an account?
        </Text>
        <ButtonAction
          onPress={() => handleChange("login")}
          buttonText="LOGIN"
          buttonStyles={screenStyles.creditBtnStyles}
          buttonTxtStyles={screenStyles.creditBtnTextStyles}
        />
      </View>
    )
  } else if (activeForm === "login") {
    bottomContent = (
      <View style={styles.buttonsContainer}>
        <Text style={screenStyles.creditScreenPageTitle}>SIGN IN</Text>
        <InputText
          labelText="MOMO Registered Number"
          name="momoNumber"
          onChangeText={setMomoNumber}
          value={momoNumber}
          txtStyle={screenStyles.textInput}
        />
        <InputText
          labelText="Password"
          name="password"
          onChangeText={setPassword}
          value={password}
          txtStyle={screenStyles.textInput}
        />
        <ButtonAction
          onPress={handleLogin}
          buttonText="LOGIN"
          buttonStyles={screenStyles.creditBtnStyles}
          buttonTxtStyles={screenStyles.creditBtnTextStyles}
        />
        <Text style={screenStyles.creditScreenSubText}>Not registered?</Text>
        <ButtonAction
          onPress={() => handleChange("register")}
          buttonText="Create Account"
          buttonStyles={screenStyles.creditBtnStyles}
          buttonTxtStyles={screenStyles.creditBtnTextStyles}
        />
        {/* Loading Indicator */}
        {isLoading && LoadingIndicator()}
      </View>
    )
  }

  return (
    <SafeAreaView style={screenStyles.creditScreenContainer}>
      <ImageBackground
        source={require("../../assets/welcome.png")}
        style={styles.welcomeScreenContainer}
      >
        <TouchableOpacity
          style={styles.banner}
          onPress={() => handleChange("buttons")}
        ></TouchableOpacity>
        <View style={styles.bottomContent}>{bottomContent}</View>
      </ImageBackground>
    </SafeAreaView>
  )
}

export default WelcomeScreen
