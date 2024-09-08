import styled from 'styled-components/native';
import Colors from '../../styles/Colors';

export const Container = styled.View`
  margin-bottom: 20px;
`;

export const Label = styled.Text`
  color: ${Colors.black};
  font-size: 16px;
  margin-bottom: 4px;
`;

export const InputWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  height: 50px;
  border-width: 1px;
  border-color: #ccc;
  border-radius: 10px;
  padding: 8px;
`;

export const StyledTextInput = styled.TextInput.attrs({
  placeholderTextColor: '#ccc',
})`
  flex: 1;
  height: 50px;
  font-size: 16px;
  color: ${Colors.black};
`;

export const IconWrapper = styled.TouchableOpacity`
  margin-left: 8px;
`;

export const IconImg = styled.Image`
  width: 24px;
  height: 24px;
`;
