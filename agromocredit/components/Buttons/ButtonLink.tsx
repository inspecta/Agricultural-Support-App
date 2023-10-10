import * as React from 'react';
import { Button } from 'react-native-paper';

interface ButtonLinkProps {
  path: string;
  linktext: string;
}

const ButtonLink: React.FC<ButtonLinkProps> = ({ path, linktext }) => (
  <Button icon="camera" mode="contained" onPress={() => console.log(path)}>
    {linktext}
  </Button>
);

export default ButtonLink;