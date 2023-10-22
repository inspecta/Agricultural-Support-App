import { StyleSheet, Text, View } from "react-native"
import WelcomeScreen from "./screens/Welcome/WelcomeScreen"
import DashboardScreen from "./screens/Dashboard/DashboardScreen"
import ReceivePaymentScreen from "./screens/Transactions/ReceivePaymentScreen"
import PayLoanScreen from "./screens/Credit/PayLoanScreen"
import EarningsScreen from "./screens/Transactions/EarningsScreen"
import CreditScreen from "./screens/Credit/CreditScreen"
import BorrowingScreen from "./screens/Credit/BorrowingSCreen"
import LentOutScreen from "./screens/Credit/LentOutScreen"
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import WithdrawScreenal from "./screens/Transactions/WithdrawalScreen"
import WithdrawalsScreen from "./screens/Transactions/WithdrawalsScreen"
import {Provider} from "react-redux";
import { store } from "./services/store"
import TransferScreen from "./screens/Transactions/TransferScreen"

const Stack = createStackNavigator()

export default function App() {
  
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Welcome"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="Welcome" component={WelcomeScreen} />
          <Stack.Screen name="Dashboard" component={DashboardScreen} />
          <Stack.Screen
            name="ReceivePaymentScreen"
            component={ReceivePaymentScreen}
          />
          <Stack.Screen name="Withdraw" component={WithdrawScreenal} />
          <Stack.Screen name="Withdraws" component={WithdrawalsScreen} />
          <Stack.Screen name="Borrowing" component={BorrowingScreen} />
          <Stack.Screen name="PayLoan" component={PayLoanScreen} />
          <Stack.Screen name="Earnings" component={EarningsScreen} />
          <Stack.Screen name="Credit" component={CreditScreen} />
          <Stack.Screen name="LentOut" component={LentOutScreen} />
          <Stack.Screen name="Transfer" component={TransferScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
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
