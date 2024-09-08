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

export const StyledTextInput = styled.TextInput.attrs({
  placeholderTextColor: '#ccc',
})`
  height: 50px;
  border-width: 1px;
  border-color: #ccc;
  border-radius: 20px;
  padding: 8px;
  font-size: 16px;
  color: ${Colors.black};
`;
