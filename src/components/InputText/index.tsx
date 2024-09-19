import React, {useState} from 'react';
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
  editable?: boolean;
  icon?: ImageSourcePropType;
}

export const InputText: React.FC<InputTextProps> = ({
  label,
  placeholder,
  id,
  icon,
  editable = true,
  ...rest
}) => {
  const [edit, setEdit] = useState<boolean>(false);

  return (
    <Container>
      <Label>{label}</Label>
      <InputWrapper
        style={{
          backgroundColor: icon
            ? edit
              ? '#fff'
              : '#f0f0f0'
            : editable
            ? '#fff'
            : '#f0f0f0',
        }}>
        <StyledTextInput
          placeholder={placeholder}
          testID={id}
          editable={icon ? edit : editable}
          {...rest}
        />
        {icon && (
          <IconWrapper
            onPress={() => {
              setEdit(prev => !prev);
            }}>
            <IconImg source={icon} />
          </IconWrapper>
        )}
      </InputWrapper>
    </Container>
  );
};
