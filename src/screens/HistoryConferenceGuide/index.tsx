import React from 'react';
import Header from '../../components/Header';
import {Container, ContainerMain, SubTitleText} from './styles';
import Button from '../../components/Button';

export const HistoryConferenceGuide = () => {
  return (
    <ContainerMain>
      <Header ButtonReturn={true} TitleHeader="Histórico de Conferência" />
      <Container>
        <SubTitleText>
          Solange Machado, seu histórico de conferência está vazio.
          {/* Solange Machado, aqui está seu histórico de conferência: */}
        </SubTitleText>
        <Button text="VOLTAR PARA PÁGINA INICIAL" onPress={() => {}} />
      </Container>
    </ContainerMain>
  );
};
