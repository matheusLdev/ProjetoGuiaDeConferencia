import React from 'react';
import {ImageSourcePropType, TextInputProps} from 'react-native';
import {
  Container,
  IconImg,
  IconWrapper,
  InputWrapper,
  Label,
  StyledTextInput,
} from './styles';

interface InputTextProps extends TextInputProps {
  label: string;
  id: string;
  placeholder: string;
  icon?: ImageSourcePropType;
}

export const InputText: React.FC<InputTextProps> = ({
  label,
  placeholder,
  id,
  icon,
  ...rest
}) => {
  return (
    <Container>
      <Label>{label}</Label>
      <InputWrapper>
        <StyledTextInput placeholder={placeholder} testID={id} {...rest} />
        {icon && (
          <IconWrapper onPress={() => {}}>
            <IconImg source={icon} />
          </IconWrapper>
        )}
      </InputWrapper>
    </Container>
  );
};
