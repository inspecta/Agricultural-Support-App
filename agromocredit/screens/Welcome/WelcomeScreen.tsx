import React from "react";
import { View, Text, Image } from "react-native";
import { styles } from "./WelcomeStyle";
import ButtonLink from "../../components/Button/ButtonLink"

const WelcomeScreen = () => {
    return (
        <View style={styles.container} > 
            <Image source={require('../../assets/welcome.png')} style={styles.welcomeImage}  />
            <Text style={styles.welcomeText} >Welcome to AgroMoCredit</Text>
            <ButtonLink path="/create" linktext="Create Account" />
            <ButtonLink path="/login" linktext="Login" />
        </View>
    )
};

export default WelcomeScreen;