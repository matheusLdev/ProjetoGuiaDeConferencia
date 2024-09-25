import React, {useEffect, useState} from 'react';
import Header from '../../components/Header';
import {Container, ContainerMain, SubTitleText} from './styles';
import Button from '../../components/Button';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Conference, User} from '../../types';

export const HistoryConferenceGuide = () => {
  const {goBack} = useNavigation();
  const [user, setUser] = useState<User>();
  const [conferences, setConferences] = useState<Conference>();

  useEffect(() => {
    const loadData = async () => {
      const userResponse = await AsyncStorage.getItem('user');
      const conferencesResponse = await AsyncStorage.getItem('conferences');

      if (userResponse) {
        setUser(JSON.parse(userResponse));
      }
      if (conferencesResponse) {
        setConferences(JSON.parse(conferencesResponse));
      }
    };

    loadData();
  }, []);

  return (
    <ContainerMain>
      <Header ButtonReturn={true} TitleHeader="Histórico de Conferência" />
      <Container>
        <SubTitleText>
          {user
            ? conferences
              ? `${user.name} ${user.surname}, aqui está seu histórico de conferência:`
              : `${user.name} ${user.surname}, seu histórico de conferência está vazio.`
            : 'Preencha seu nome e sobrenome na tela de editar cadastro.'}
        </SubTitleText>
        <Button text="VOLTAR PARA PÁGINA INICIAL" onPress={() => goBack()} />
      </Container>
    </ContainerMain>
  );
};
