import React, {useState} from 'react';
import {Container, ContainerInfo, ContainerMain} from './styles';
import Header from '../../components/Header';
import Button from '../../components/Button';
import {InputText} from '../../components/InputText';
import {useAlert} from '../../hooks/useAlert';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {User} from '../../types';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {cleanFormatCurrency, formatCurrency} from '../../utils/Currency';
import {RootStackParamList} from '../../routes/types';

export const Welcome = () => {
  const {showAlert, AlertComponent} = useAlert();
  const {navigate} = useNavigation<NavigationProp<RootStackParamList>>();
  const [user, setUser] = useState<User>({
    name: '',
    surname: '',
    ticketPrice: undefined,
  });

  const handleInputChange = (id: string, value: string) => {
    setUser(prevUser => ({...prevUser, [id]: value}));
  };

  const createUser = async () => {
    if (user.name === '' && user.surname === '') {
      showAlert('Os campos Nome e Sobrenome são obrigatórios.', 'error');
      return;
    }

    if (user.ticketPrice) {
      user.ticketPrice = cleanFormatCurrency(user.ticketPrice.toString());
    }

    if (user.name) {
      user.name = user.name.trim();
    }

    if (user.surname) {
      user.surname = user.surname.trim();
    }

    try {
      await AsyncStorage.setItem('user', JSON.stringify(user));
      showAlert('Usuário cadastrado com sucesso', 'success');
      navigate('Home');
    } catch (error) {
      showAlert('Erro ao atualizar cadastro', 'error');
    }
  };

  return (
    <ContainerMain>
      <AlertComponent />
      <Header
        ButtonReturn={false}
        TitleHeader="Bem vindo ao Guia de Conferência"
      />
      <Container>
        <ContainerInfo>
          <InputText
            id="name"
            label="Digite seu nome"
            placeholder="Digite seu nome"
            defaultValue={user?.name || ''}
            onChangeText={text => handleInputChange('name', text)}
          />
          <InputText
            id="surname"
            label="Digite seu sobrenome"
            placeholder="Digite seu sobrenome"
            defaultValue={user?.surname || ''}
            onChangeText={text => handleInputChange('surname', text)}
          />
          <InputText
            id="ticketPrice"
            label="Valor da Passagem"
            placeholder="Digite o valor da passagem"
            keyboardType="numeric"
            defaultValue={
              user.ticketPrice ? formatCurrency(user?.ticketPrice) : ''
            }
            onChangeText={text => handleInputChange('ticketPrice', text)}
          />
        </ContainerInfo>
        <Button text="AVANÇAR" onPress={createUser} />
      </Container>
    </ContainerMain>
  );
};
