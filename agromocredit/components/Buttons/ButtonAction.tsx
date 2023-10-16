import * as React from 'react';
import { Pressable, Text } from 'react-native';

interface ButtonActionProps {
  onPress: () => void;
  buttonText: string;
  buttonStyles: object;
  buttonTxtStyles: object;
}

const ButtonLink: React.FC<ButtonActionProps> = ({ onPress, buttonText, buttonStyles, buttonTxtStyles}) => (
  <Pressable 
    onPress={onPress}
    style={buttonStyles}
    >
      <Text style={buttonTxtStyles}>{buttonText}</Text>
    </Pressable>
);

export default ButtonLink
