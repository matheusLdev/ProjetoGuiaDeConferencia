import styled from 'styled-components/native';
import Colors from '../../../styles/Colors';

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

export const ContainerContent = styled.View`
  background-color: #d9d9d9;
  border-radius: 20px;
  elevation: 1;
  border: 1px solid #b3b3b3;
  padding: 20px;
  margin: 20px;
  justify-content: space-between;
`;

export const InfoText = styled.Text`
  color: ${Colors.black};
  font-size: 18px;
  margin-bottom: 20px;
`;

export const ContainerBtn = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
