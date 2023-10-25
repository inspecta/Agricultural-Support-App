import React from "react"
import { TextInput, View, Text } from "react-native"

interface InputTextProps {
  labelText?: string
  name?: string
  txtStyle: object
  onChangeText?: (text: string) => void
  value?: string
}

const InputText: React.FC<InputTextProps> = ({
  labelText,
  txtStyle,
  name,
  onChangeText,
  value,
  ...rest
}) => {
  const [text, setText] = React.useState("")
  return (
    <TextInput
      onChangeText={onChangeText}
      style={txtStyle}
      placeholder={labelText}
      placeholderTextColor="rgba(255, 255, 255, 0.8)"
      value={value}
      {...rest}
    />
  )
}

export default InputText
