import React from 'react';
import Header from '../../components/Header';
import {ContainerMain} from './styles';

export const HistoryConferenceGuide = () => {
  return (
    <ContainerMain>
      <Header ButtonReturn={true} TitleHeader="Histórico de Conferência" />
    </ContainerMain>
  );
};
