/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import Header from '../../components/Header';
import {Container, ContainerMain, SubTitleText} from './styles';
import Button from '../../components/Button';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Conference, User} from '../../types';
import {FlatList, View} from 'react-native';
import {dateFormat, formatDate} from '../../utils/Date';
import {useAlert} from '../../hooks/useAlert';

export const HistoryConferenceGuide = () => {
  const [user, setUser] = useState<User>();
  const [conferences, setConferences] = useState<Conference[]>([]);
  const {showAlert, AlertComponent} = useAlert();

  useEffect(() => {
    const loadData = async () => {
      const userResponse = await AsyncStorage.getItem('user');
      const conferencesResponse = await AsyncStorage.getItem('conferences');

      if (userResponse) {
        setUser(JSON.parse(userResponse));
      }
      if (conferencesResponse) {
        const loadedConferences: Conference[] = JSON.parse(conferencesResponse);
        loadedConferences.sort((a, b) => {
          const dateA = new Date(dateFormat(a.date));
          const dateB = new Date(dateFormat(b.date));
          return dateB.getTime() - dateA.getTime();
        });

        setConferences(loadedConferences);
      }
    };

    loadData();
  }, []);

  const clearHistory = async () => {
    await AsyncStorage.removeItem('conferences');
    setConferences([]);
    showAlert('As conferências foram excluídas com sucesso.', 'success');
  };

  return (
    <ContainerMain>
      <AlertComponent />
      <Header ButtonReturn={true} TitleHeader="Histórico de Conferência" />
      <Container>
        <SubTitleText>
          {user
            ? conferences.length > 0
              ? `${user.name} ${user.surname}, aqui está seu histórico de conferência:`
              : `${user.name} ${user.surname}, seu histórico de conferência está vazio.`
            : 'Preencha seu nome e sobrenome na tela de editar cadastro.'}
        </SubTitleText>

        <FlatList
          data={conferences}
          keyExtractor={conference => conference.id}
          renderItem={({item}: {item: Conference}) => (
            <Button
              text={`Guia de conferência - ${formatDate(item.date)}`}
              onPress={() => {
                console.log('Conferência ID: ', item.id);
              }}
            />
          )}
        />

        <View
          style={{
            marginTop: 40,
          }}
        />

        <Button
          text="LIMPAR HISTÓRICO"
          onPress={clearHistory}
          color="#cb00007f"
        />
      </Container>
    </ContainerMain>
  );
};
