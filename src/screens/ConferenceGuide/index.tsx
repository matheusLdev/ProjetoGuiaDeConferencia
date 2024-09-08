import React from 'react';
import {ContainerMain} from './styles';
import Header from '../../components/Header';

export const ConferenceGuide = () => {
  return (
    <ContainerMain>
      <Header ButtonReturn={true} TitleHeader="Registrar Nova Conferência" />
    </ContainerMain>
  );
};
