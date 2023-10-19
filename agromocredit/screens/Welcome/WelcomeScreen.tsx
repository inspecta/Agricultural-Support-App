import React, { useState } from "react"
import { View, Text, Image, TouchableOpacity } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { styles } from "./WelcomeStyle"
import ButtonAction from "../../components/Buttons/ButtonAction"
import InputText from "../../components/Inputs/InputText"
import { useNavigation } from "@react-navigation/native"
import axios from "axios"
import LoadingIndicator from "../Notifications/LoadingIndicator"

const WelcomeScreen = () => {
  const [activeForm, setActiveForm] = useState("buttons")
  const [momoNumber, setMomoNumber] = useState("")
  const [password, setPassword] = useState("")
  const [isLoading, setIsLoading] = React.useState(false)

  const navigation = useNavigation()

  let bottomContent

  const handleChange = (newForm: React.SetStateAction<string>) => {
    setActiveForm(newForm)
  }

  const handleLogin = async () => {
    setIsLoading(true)

    try {
      const url = "http://192.168.1.117:8080/login-user"

      const response = await axios.post(url, {
        phoneNumber: momoNumber,
        password: password,
      })

      if (response.status === 200) {
        setIsLoading(false)
        const userData = response.data

        navigation.navigate("Dashboard", {
          user: userData,
        })
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
      <>
        <Text style={styles.welcomeText}>WELCOME TO AGROMOCREDIT</Text>
        <ButtonAction
          onPress={() => handleChange("register")}
          buttonText="Create Account"
        />
        <ButtonAction
          onPress={() => handleChange("login")}
          buttonText="Login"
        />
      </>
    )
  } else if (activeForm === "register") {
    bottomContent = (
      <>
        <Text style={styles.welcomeText}>CREATE AN ACCOUNT</Text>
        <InputText labelText="Email" />
        <InputText labelText="MOMO Registered Number" />
        <InputText labelText="Full Name" />
        <InputText labelText="Password" />
        <InputText labelText="Confirm Password" />
        <Text style={styles.welcomeText}>Already have an account? </Text>
        <ButtonAction
          onPress={() => handleChange("login")}
          buttonText="Login"
        />
      </>
    )
  } else if (activeForm === "login") {
    bottomContent = (
      <>
        <Text style={styles.welcomeText}>SIGN IN</Text>
        <InputText
          labelText="MOMO Registered Number"
          name="momoNumber"
          onChangeText={setMomoNumber}
          value={momoNumber}
        />
        <InputText
          labelText="Password"
          name="password"
          onChangeText={setPassword}
          value={password}
        />
        <ButtonAction onPress={handleLogin} buttonText="Login" />
        <Text style={styles.welcomeText}>Not registered? </Text>
        <ButtonAction
          onPress={() => handleChange("register")}
          buttonText="Create Account"
        />

        {/* Loading Indicator */}
        {isLoading && LoadingIndicator()}
      </>
    )
  }

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={() => handleChange("buttons")}>
        <Image
          source={require("../../assets/welcome.png")}
          style={styles.welcomeImage}
        />
      </TouchableOpacity>
      <View>{bottomContent}</View>
    </SafeAreaView>
  )
}

export default WelcomeScreen
