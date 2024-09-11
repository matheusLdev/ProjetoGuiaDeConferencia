import React, {useState} from 'react';
import styled from 'styled-components/native';
import Colors from '../styles/Colors';

interface AlertProps {
  message: string;
  type: 'success' | 'error';
}

export const useAlert = () => {
  const [alert, setAlert] = useState<AlertProps | null>(null);

  const showAlert = (message: string, type: 'success' | 'error') => {
    setAlert({message, type});
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };

  const AlertComponent = () => {
    return (
      alert && (
        <AlertContainer type={alert.type}>
          <AlertText>{alert.message}</AlertText>
        </AlertContainer>
      )
    );
  };

  return {showAlert, AlertComponent};
};

const AlertContainer = styled.View<{type: 'success' | 'error'}>`
  background-color: ${props =>
    props.type === 'success' ? 'green' : `${Colors.red}`};
  position: absolute;
  top: 10px;
  right: 10px;
  padding: 20px;
  border-radius: 10px;
  z-index: 1;
`;

const AlertText = styled.Text`
  color: ${Colors.light_gray};
  font-size: 16px;
`;
