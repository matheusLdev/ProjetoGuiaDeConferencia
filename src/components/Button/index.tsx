import React from 'react';
import {ButtonText, ButtonStyled} from './styles';
import {ButtonProps} from '../../types';
import Colors from '../../styles/Colors';

const Button = ({
  color = `${Colors.light_yellow}`,
  text,
  onPress,
}: ButtonProps) => {
  return (
    <ButtonStyled onPress={onPress} color={color}>
      <ButtonText>{text}</ButtonText>
    </ButtonStyled>
  );
};

export default Button;
