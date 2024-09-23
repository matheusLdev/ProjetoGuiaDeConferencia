import React, {useEffect, useState} from 'react';
import {Container, ContainerBtn, ContainerInfo, ContainerMain} from './styles';
import EditIcon from '../../assets/images/edit.png';
import Header from '../../components/Header';
import Button from '../../components/Button';
import Colors from '../../styles/Colors';
import {InputText} from '../../components/InputText';
import {useAlert} from '../../hooks/useAlert';
import {useNavigation} from '@react-navigation/native';
import {User} from '../../types';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {cleanFormatCurrency, formatCurrency} from '../../utils/Currency';

export const EditRegister = () => {
  const {showAlert, AlertComponent} = useAlert();
  const {goBack} = useNavigation();
  const [user, setUser] = useState<User>({
    name: '',
    surname: '',
    ticketPrice: undefined,
  });

  useEffect(() => {
    const loadUserData = async () => {
      try {
        const userData = await AsyncStorage.getItem('user');
        if (userData) {
          setUser(JSON.parse(userData));
        }
      } catch (error) {
        showAlert('Ocorreu um erro ao carregar suas informações', 'error');
      }
    };

    loadUserData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleInputChange = (id: string, value: string) => {
    setUser(prevUser => ({...prevUser, [id]: value}));
  };

  const updateInfoUser = async () => {
    if (user.ticketPrice) {
      user.ticketPrice = cleanFormatCurrency(user.ticketPrice.toString());
    }

    try {
      await AsyncStorage.setItem('user', JSON.stringify(user));
      showAlert('Cadastro atualizado com sucesso', 'success');

      goBack();
    } catch (error) {
      showAlert('Erro ao atualizar cadastro', 'error');
    }
  };

  return (
    <ContainerMain>
      <AlertComponent />
      <Header ButtonReturn={true} TitleHeader="Editar Cadastro" />
      <Container>
        <ContainerInfo>
          <InputText
            id="name"
            label="Nome"
            placeholder="Digite seu nome"
            defaultValue={user?.name || ''}
            icon={EditIcon}
            onChangeText={text => handleInputChange('name', text)}
          />
          <InputText
            id="surname"
            label="Sobrenome"
            placeholder="Digite seu sobrenome"
            defaultValue={user?.surname || ''}
            icon={EditIcon}
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
            icon={EditIcon}
            onChangeText={text => handleInputChange('ticketPrice', text)}
          />
        </ContainerInfo>
        <ContainerBtn>
          <Button
            text="VOLTAR"
            onPress={() => goBack()}
            color={Colors.off_white}
          />
          <Button text="SALVAR" onPress={updateInfoUser} />
        </ContainerBtn>
      </Container>
    </ContainerMain>
  );
};
