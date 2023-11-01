import React, { useState } from "react"
import { View, Text, TouchableOpacity, ImageBackground } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { styles } from "./WelcomeStyle"
import ButtonAction from "../../components/Buttons/ButtonAction"
import InputText from "../../components/Inputs/InputText"
import { useNavigation } from "@react-navigation/native"
import LoadingIndicator from "../Notifications/LoadingIndicator"
import { screenStyles } from "../screenStyles"
import {
  useLoginUserMutation,
  useRegisterUserMutation,
} from "../../services/slices/transactionSlice"
import InputPassword from "../../components/Inputs/InputPassword"
import InputNumber from "../../components/Inputs/InputNumber"
import ErrorMessage from "../Notifications/ErrorMessage"

const WelcomeScreen = () => {
  const [activeForm, setActiveForm] = useState("buttons")
  const [momoNumber, setMomoNumber] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [email, setEmail] = useState("")
  const [fullName, setFullName] = useState("")
  const [isLoading, setIsLoading] = React.useState(false)
  const [errorMessage, setErrorMessage] = React.useState("")

  // Register

  const [loginUser] = useLoginUserMutation()
  const [registerUser] = useRegisterUserMutation()

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
          newBalance: userData.balance,
        } as { user: any })
      } else {
        setErrorMessage("Invalid phone number or password.")
      }
    } catch (error) {
      setIsLoading(false)
      setErrorMessage("Invalid phone number or password.")
    } finally {
      setIsLoading(false)
    }
  }

  const handleRegister = async () => {
    setIsLoading(true)

    try {
      if (password !== confirmPassword) {
        setErrorMessage("Passwords do not match")
      }

      const result = await registerUser({
        phoneNumber: momoNumber,
        email,
        name: fullName,
        password,
      })

      if ("data" in result && result.data) {
        const userData = result.data
        navigation.navigate("Dashboard", {
          user: userData,
        })
      } else {
        setErrorMessage("Sorry. Couldn't register user!")
      }
    } catch (error) {
      console.error("Registration error:", error)
      setErrorMessage("Error registering user")
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
        {errorMessage && <ErrorMessage message={errorMessage} />}
        <InputNumber
          labelText="MTN Phone Number"
          name="momoNumber"
          onChangeText={setMomoNumber}
          value={momoNumber}
          txtStyle={screenStyles.textInput}
        />
        <InputText
          labelText="Full Name"
          onChangeText={setFullName}
          value={fullName}
          txtStyle={screenStyles.textInput}
        />
        <InputText
          labelText="Email"
          onChangeText={setEmail}
          value={email}
          txtStyle={screenStyles.textInput}
        />
        <InputPassword
          labelText="Password"
          onChangeText={setPassword}
          value={password}
          txtStyle={screenStyles.textInput}
        />
        <InputPassword
          labelText="Confirm Password"
          onChangeText={setConfirmPassword}
          value={confirmPassword}
          txtStyle={screenStyles.textInput}
        />
        <ButtonAction
          onPress={() => handleRegister()}
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
        {isLoading && LoadingIndicator()}
      </View>
    )
  } else if (activeForm === "login") {
    bottomContent = (
      <View style={styles.buttonsContainer}>
        <Text style={screenStyles.creditScreenPageTitle}>SIGN IN</Text>
        {errorMessage && <ErrorMessage message={errorMessage} />}
        <InputNumber
          labelText="MTN Phone Number"
          name="momoNumber"
          onChangeText={setMomoNumber}
          value={momoNumber}
          txtStyle={screenStyles.textInput}
        />
        <InputPassword
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
