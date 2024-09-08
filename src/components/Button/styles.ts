import styled from 'styled-components/native';
import Colors from '../../styles/Colors';

export const ButtonStyled = styled.TouchableOpacity<{color: string}>`
  background-color: ${({color}) => color || Colors.yellow};
  min-width: 140px;
  height: 50px;
  padding: 10px 20px;
  margin: 10px;
  border-radius: 30px;
  align-items: center;
  justify-content: center;
`;

export const ButtonText = styled.Text`
  color: ${Colors.black};
  font-weight: 600;
  font-size: 18px;
`;
