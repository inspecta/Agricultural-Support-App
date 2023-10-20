import React from "react"
import { TextInput, View, Text } from "react-native"

interface InputTextProps {
    labelText?: string
    name?: string
    txtStyle: object;
    onChangeText?: (text: string) => void;
    value?: string;
  }

const InputText:  React.FC<InputTextProps> = ({ labelText, txtStyle, name, onChangeText, value, ...rest }) => {
    const [text, setText] = React.useState('');
    return (
      <View>
        <TextInput onChangeText={onChangeText} style={txtStyle} placeholder={labelText} value={value} {...rest}/>;
      </View>
    )
  };

export default InputText
