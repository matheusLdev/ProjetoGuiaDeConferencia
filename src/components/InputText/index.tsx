import React from 'react';
import {TextInputProps} from 'react-native';
import {Container, Label, StyledTextInput} from './styles';

interface InputTextProps extends TextInputProps {
  label: string;
  id: string;
  placeholder: string;
}

export const InputText: React.FC<InputTextProps> = ({
  label,
  placeholder,
  id,
  ...rest
}) => {
  return (
    <Container>
      <Label>{label}</Label>
      <StyledTextInput placeholder={placeholder} testID={id} {...rest} />
    </Container>
  );
};
