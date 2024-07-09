import React from 'react';
import { View, Text, TextInput, TextInputProps } from 'react-native';
import { styles } from './style';

interface InputTextProps extends TextInputProps {
  label: string;
  id: string;
}

export const InputText: React.FC<InputTextProps> = ({ label, id, ...rest }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        {...rest}
        placeholder={label}
        style={styles.input}
        testID={id}
      />
    </View>
  );
};
