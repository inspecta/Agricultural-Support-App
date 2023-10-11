import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import WelcomeScreen from './screens/Welcome/WelcomeScreen';
import DashboardScreen from './screens/Dashboard/DashboardScreen'
import ReceivePaymentScreen from './screens/Earnings/ReceivePaymentScreen';
import PayLoanScreen from './screens/Credit/PayLoanScreen';

export default function App() {
  return (
    <>
    { /*<WelcomeScreen />*/ }
    { /*<DashboardScreen />*/}
    {/*<ReceivePaymentScreen />*/}
    <PayLoanScreen />
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

