import * as React from 'react';
import { Button } from 'react-native-paper';

interface ButtonActionProps {
  onPress: () => void;
  buttonText: string;
}

const ButtonLink: React.FC<ButtonActionProps> = ({ onPress, buttonText }) => (
  <Button icon="camera" mode="contained" onPress={onPress}>
    {buttonText}
  </Button>
);

export default ButtonLink;