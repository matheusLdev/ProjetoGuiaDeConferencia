import React from 'react';
import Header from '../../components/Header';
import {
  ContainerMain,
  ContainerNavigation,
  HomeContainer,
  InfoText,
  InfoTextBold,
} from './styles';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import Button from '../../components/Button';
import {RootStackParamList} from '../../routes/types';

export const Home = () => {
  const {navigate} = useNavigation<NavigationProp<RootStackParamList>>();

  return (
    <ContainerMain>
      <Header ButtonReturn={false} TitleHeader="Guia de Conferência" />
      <HomeContainer>
        <ContainerNavigation>
          <Button
            text="REGISTRAR NOVA CONFERÊNCIA"
            onPress={() => navigate('ConferenceGuide')}
          />
          <Button
            text="HISTÓRICO DE CONFERÊNCIA"
            onPress={() => navigate('HistoryConferenceGuide')}
          />
          <Button
            text="EDITAR CADASTRO"
            onPress={() => navigate('EditRegister')}
          />
        </ContainerNavigation>
        <InfoText>
          <InfoTextBold>*ATENÇÃO: </InfoTextBold>Todas as informações são
          guardadas na memória do seu aparelho.
        </InfoText>
      </HomeContainer>
    </ContainerMain>
  );
};
