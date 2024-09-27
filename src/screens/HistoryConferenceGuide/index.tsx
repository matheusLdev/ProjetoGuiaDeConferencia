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
import {
  NavigationProp,
  useFocusEffect,
  useNavigation,
} from '@react-navigation/native';
import {RootStackParamList} from '../../routes/types';
import Colors from '../../styles/Colors';

export const HistoryConferenceGuide = () => {
  const [user, setUser] = useState<User>();
  const [conferences, setConferences] = useState<Conference[]>([]);
  const {navigate} = useNavigation<NavigationProp<RootStackParamList>>();
  const {showAlert, AlertComponent} = useAlert();

  useEffect(() => {
    const loadData = async () => {
      const userResponse = await AsyncStorage.getItem('user');
      if (userResponse) {
        setUser(JSON.parse(userResponse));
      }
    };
    loadData();
  }, []);

  useFocusEffect(
    React.useCallback(() => {
      const loadConferences = async () => {
        const conferencesResponse = await AsyncStorage.getItem('conferences');
        if (conferencesResponse) {
          const loadedConferences: Conference[] =
            JSON.parse(conferencesResponse);
          loadedConferences.sort((a, b) => {
            const dateA = new Date(dateFormat(a.date));
            const dateB = new Date(dateFormat(b.date));
            return dateB.getTime() - dateA.getTime();
          });

          setConferences(loadedConferences);
        }
      };

      loadConferences();
    }, []),
  );

  const clearHistory = async () => {
    await AsyncStorage.removeItem('conferences');
    setConferences([]);
    showAlert('As conferências foram excluídas com sucesso.', 'success');
  };

  const goSeeConference = (conference: Conference) => {
    navigate('SeeConferenceGuide', {conference});
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
              onPress={() => goSeeConference(item)}
            />
          )}
        />

        <View
          style={{
            marginTop: 40,
          }}
        />

        <Button
          text={
            conferences.length > 0
              ? 'LIMPAR HISTÓRICO'
              : 'VOLTAR PARA PÁGINA INICIAL'
          }
          onPress={
            conferences.length > 0 ? clearHistory : () => navigate('Home')
          }
          color={conferences.length > 0 ? '#cb00007f' : Colors.light_yellow}
        />
      </Container>
    </ContainerMain>
  );
};
