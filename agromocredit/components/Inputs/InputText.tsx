import React from "react"
import { TextInput, View, Text } from "react-native"

interface InputTextProps {
    labelText?: string
    name?: string
    txtStyle: object;
  }

const InputText:  React.FC<InputTextProps> = ({ labelText, txtStyle, name, ...rest }) => {
    const [text, setText] = React.useState('');
    return (
      <View>
        {labelText && <Text>{labelText}</Text>}
        <TextInput style={txtStyle} label={labelText} placeholder={labelText} value={text} {...rest}/>;
      </View>
    )
  };

export default InputText
