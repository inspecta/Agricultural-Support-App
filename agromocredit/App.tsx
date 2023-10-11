import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import WelcomeScreen from './screens/Welcome/WelcomeScreen';
import DashboardScreen from './screens/Dashboard/DashboardScreen'
import ReceivePaymentScreen from './screens/Earnings/ReceivePaymentScreen';
import PayLoanScreen from './screens/Credit/PayLoanScreen';
import EarningsScreen from './screens/Earnings/EarningsScreen';

export default function App() {
  return (
    <>
    { /*<WelcomeScreen />*/ }
    { /*<DashboardScreen />*/}
    {/*<ReceivePaymentScreen />*/}
    {/*<PayLoanScreen />*/}
    <EarningsScreen />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

