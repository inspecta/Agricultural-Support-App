import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import WelcomeScreen from './screens/Welcome/WelcomeScreen';
import DashboardScreen from './screens/Dashboard/DashboardScreen'
import ReceivePaymentScreen from './screens/Earnings/ReceivePaymentScreen';
import PayLoanScreen from './screens/Credit/PayLoanScreen';
import EarningsScreen from './screens/Earnings/EarningsScreen';
import CreditScreen from './screens/Credit/CreditScreen';
import BorrowingScreen from './screens/Credit/BorrowingSCreen';
import LentOutScreen from './screens/Credit/LentOutScreen';

export default function App() {
  return (
    <>
    {/*<WelcomeScreen />*/}
    {/*<DashboardScreen />*/}
    {/*<ReceivePaymentScreen />*/}
    {/*<PayLoanScreen />*/}
    {/*<EarningsScreen />*/}
    {<CreditScreen />}
    {/*<BorrowingScreen />*/}
    {/*<LentOutScreen />*/}
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

