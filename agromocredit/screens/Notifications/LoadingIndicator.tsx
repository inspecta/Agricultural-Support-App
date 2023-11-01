import { View, ActivityIndicator, StyleSheet } from "react-native"
import { styles } from "./LoadingIndicatorStyle"

const LoadingIndicator = () => {
  return (
    <View style={styles.loadingContainer}>
      <ActivityIndicator size={75} color="#36e600" />
    </View>
  )
}

export default LoadingIndicator
