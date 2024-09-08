import styled from 'styled-components/native';
import Colors from '../../styles/Colors';

export const ContainerMain = styled.View`
  background-color: ${Colors.yellow};
  flex: 1;
`;

export const Container = styled.View`
  background-color: ${Colors.light_gray};
  flex: 1;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  elevation: 5;
  padding: 20px;
  justify-content: space-between;
`;
