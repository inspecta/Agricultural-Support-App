import * as React from 'react';
import { Button } from 'react-native-paper';
import { styles } from './ButtonStyle';

interface ButtonActionProps {
  onPress: () => void;
  buttonText: string;
  btnColor: string;
  btnIcon: string;
  txtColor: string;
  rippleClr: string;
  btnContentStyling: object;
  txtStyle: object;
}

const ButtonLink: React.FC<ButtonActionProps> = ({ onPress, buttonText, btnColor, btnIcon, txtColor, rippleClr , btnContentStyling, txtStyle}) => (
  <Button 
    style={styles.container}
    icon={btnIcon}
    mode="contained"
    onPress={onPress}
    buttonColor={btnColor}
    textColor={txtColor}
    labelStyle={txtStyle}
    rippleColor={rippleClr}
    contentStyle={btnContentStyling} 
  >
    {buttonText}
  </Button>
);

export default ButtonLink;