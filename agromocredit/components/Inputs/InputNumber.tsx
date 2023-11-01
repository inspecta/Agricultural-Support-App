import React from "react"
import { TextInput, View, Text, StyleSheet } from "react-native"

interface InputNumberProps {
  labelText?: string
  name?: string
  txtStyle: object
  onChangeText?: (text: string) => void
  value?: string
}

const InputNumber: React.FC<InputNumberProps> = ({
  labelText,
  txtStyle,
  name,
  onChangeText,
  value,
  ...rest
}) => {
  return (
    <View style={styles.container}>
      <TextInput
        onChangeText={onChangeText}
        style={txtStyle}
        placeholder={labelText}
        placeholderTextColor="rgba(255, 255, 255, 0.9)"
        keyboardType="numeric"
        value={value}
        {...rest}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 0,
  },
})

export default InputNumber
