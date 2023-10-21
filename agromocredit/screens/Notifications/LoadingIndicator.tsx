import { View, ActivityIndicator, StyleSheet } from "react-native"
import { styles } from "./LoadingIndicatorStyle"

const LoadingIndicator = () => {
  return (
    <View style={styles.loadingContainer}>
      <ActivityIndicator size="large" color="#36e600" />
    </View>
  )
}

export default LoadingIndicator
