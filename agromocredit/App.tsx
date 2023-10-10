import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import WelcomeScreen from './screens/Welcome/WelcomeScreen';
import DashboardScreen from './screens/Dashboard/DashboardScreen'

export default function App() {
  return (
    <>
    { /*<WelcomeScreen />*/ }
    <DashboardScreen />
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

