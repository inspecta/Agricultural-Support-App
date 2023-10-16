import { StatusBar } from "expo-status-bar"
import { StyleSheet, Text, View } from "react-native"
import WelcomeScreen from "./screens/Welcome/WelcomeScreen"
import DashboardScreen from "./screens/Dashboard/DashboardScreen"
import ReceivePaymentScreen from "./screens/Earnings/ReceivePaymentScreen"
import PayLoanScreen from "./screens/Credit/PayLoanScreen"
import EarningsScreen from "./screens/Earnings/EarningsScreen"
import CreditScreen from "./screens/Credit/CreditScreen"
import BorrowingScreen from "./screens/Credit/BorrowingSCreen"
import LentOutScreen from "./screens/Credit/LentOutScreen"
import { NavigationContainer, StackActions } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Dashboard" component={DashboardScreen} />
        <Stack.Screen
          name="ReceivePaymentScreen"
          component={ReceivePaymentScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
})
