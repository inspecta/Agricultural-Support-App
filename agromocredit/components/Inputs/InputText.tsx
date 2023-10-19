import React from "react";
import { TextInput } from "react-native-paper";

interface InputTextProps {
    labelText: string;
    txtStyle: object;
  }

const InputText:  React.FC<InputTextProps> = ({ labelText, txtStyle }) => {
    const [text, setText] = React.useState('');
    return <TextInput style={txtStyle} label={labelText} placeholder={labelText} value={text}/>;
    };

export default InputText;