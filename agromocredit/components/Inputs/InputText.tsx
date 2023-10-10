import React from "react";
import { TextInput } from "react-native-paper";

interface InputTextProps {
    labelText: string;
  }

const InputText:  React.FC<InputTextProps> = ({ labelText }) => {
    const [text, setText] = React.useState('');
    return <TextInput label={labelText} placeholder={labelText} value={text} onChange={text => setText(text)} />;
    };

export default InputText;