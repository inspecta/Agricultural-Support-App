import React from "react"
import { TextInput, View, Text, StyleSheet } from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"

interface InputPasswordProps {
  labelText?: string
  name?: string
  txtStyle: object
  onChangeText?: (text: string) => void
  value?: string
}

const InputPassword: React.FC<InputPasswordProps> = ({
  labelText,
  txtStyle,
  name,
  onChangeText,
  value,
  ...rest
}) => {
  const [secureTextEntry, setSecureTextEntry] = React.useState(true)

  const toggleSecureEntry = () => {
    setSecureTextEntry(!secureTextEntry)
  }

  return (
    <View style={styles.container}>
      <TextInput
        onChangeText={onChangeText}
        style={txtStyle}
        placeholder={labelText}
        placeholderTextColor="rgba(255, 255, 255, 0.9)"
        value={value}
        secureTextEntry={secureTextEntry}
        {...rest}
      />

      <Icon
        name={secureTextEntry ? "eye" : "eye-slash"}
        size={20}
        onPress={toggleSecureEntry}
        style={styles.icon}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
  },
  icon: {
    marginLeft: 10,
  },
})

export default InputPassword
