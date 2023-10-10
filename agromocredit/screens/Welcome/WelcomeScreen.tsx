import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./WelcomeStyle";
import ButtonAction from "../../components/Buttons/ButtonAction"
import InputText from "../../components/Inputs/InputText";

const WelcomeScreen = () => {

    const [activeForm, setActiveForm] = useState('buttons')

    let bottomContent;

    const handleChange = (newForm: React.SetStateAction<string>) => {
        setActiveForm(newForm)
    }

    if(activeForm === 'buttons'){
        bottomContent = (
            <>
            <Text style={styles.welcomeText} >WELCOME TO AGROMOCREDIT</Text>
            <ButtonAction onPress={() => handleChange("register")} buttonText="Create Account" />
            <ButtonAction onPress={() => handleChange("login")} buttonText="Login" />
            </>
        )
    }else if(activeForm === "register"){
        bottomContent = (
            <>
            <Text style={styles.welcomeText} >CREATE AN ACCOUNT</Text>
            <InputText labelText="Email" />
            <InputText labelText="MOMO Registered Number" />
            <InputText labelText="Full Name" />
            <InputText labelText="Password" />
            <InputText labelText="Confirm Password" />
            <Text style={styles.welcomeText} >Already have an account? </Text>
            <ButtonAction onPress={() => handleChange("login")} buttonText="Login" />
            </>
        )
    }else if (activeForm === 'login'){
        bottomContent = (
            <>
            <Text style={styles.welcomeText} >SIGN IN</Text>
            <InputText labelText="MOMO Registered Number" />
            <InputText labelText="Password" />
            <Text style={styles.welcomeText} >Not registered? </Text>
            <ButtonAction onPress={() => handleChange("register")} buttonText="Create Account" />
            </>
        )
    }


    return (
        <SafeAreaView style={styles.container} >
            <TouchableOpacity onPress={() => handleChange("buttons")} > 
                <Image source={require('../../assets/welcome.png')} style={styles.welcomeImage}  />
            </TouchableOpacity>
                <View>
                {bottomContent}
                </View>
        </SafeAreaView>
    )
};

export default WelcomeScreen;