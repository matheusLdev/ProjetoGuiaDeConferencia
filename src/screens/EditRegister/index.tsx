import React from 'react';
import {ContainerMain} from './styles';
import Header from '../../components/Header';

export const EditRegister = () => {
  return (
    <ContainerMain>
      <Header ButtonReturn={true} TitleHeader="Editar Cadastro" />
    </ContainerMain>
  );
};
