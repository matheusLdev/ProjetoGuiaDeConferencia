/* eslint-disable prettier/prettier */
import React from 'react';
import Header from '../../../components/Header';
import {Container, ContainerBtn, ContainerContent, ContainerMain, InfoText} from './styles';
import Button from '../../../components/Button';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Conference} from '../../../types';
import {formatDate} from '../../../utils/Date';
import {useAlert} from '../../../hooks/useAlert';
import { NavigationProp, RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import Colors from '../../../styles/Colors';
import { formatCurrency } from '../../../utils/Currency';
import { RootStackParamList } from '../../../routes/types';

type ConferenceDetailsRoute = RouteProp<{ params: { conference: Conference} }, 'params'>;

export const SeeConferenceGuide = () => {
  const {goBack, navigate} = useNavigation<NavigationProp<RootStackParamList>>();
  const {showAlert, AlertComponent} = useAlert();
  const route = useRoute<ConferenceDetailsRoute>();
  const { conference } = route.params;
  
  const deleteConference = async (conferenceId: string) => {
    try {
      const conferencesResponse = await AsyncStorage.getItem('conferences');
      let conferences: Conference[] = conferencesResponse ? JSON.parse(conferencesResponse) : [];
      const updatedConferences = conferences.filter(c => c.id !== conferenceId);
      await AsyncStorage.setItem('conferences', JSON.stringify(updatedConferences));
      showAlert(`A conferência foi excluída com sucesso.`, 'success');
      navigate('HistoryConferenceGuide');
    } catch (error) {
      showAlert('Erro ao excluir a conferência. Tente novamente.', 'error');
    }
  };

  return (
    <ContainerMain>
      <AlertComponent />
      <Header ButtonReturn={true} TitleHeader={`Conferência ${conference?.date && formatDate(conference?.date)}`} />
      <Container>
        <ContainerContent>
          {conference && 
            <>
              <InfoText>Roleta Inicial - RI = {conference.initialRoulette}</InfoText>
              <InfoText>Roleta Final - RF = {conference.finalRoulette}</InfoText>
              <InfoText>Total de Passageiro - PT = {conference.totalPassenger}</InfoText>
              <InfoText>Gratuidade - GR = {conference.gratuity}</InfoText>
              <InfoText>Vale Transporte - VT = {conference.transportVoucher}</InfoText>
              <InfoText>Sem Cartão - SC = {conference.noCard}</InfoText>
              <InfoText>Passageiro Normal - P = {conference.normalPassenger}</InfoText>
              <InfoText>Valor da Passagem = {conference.ticketPrice && formatCurrency(conference.ticketPrice)}</InfoText>
              <InfoText>Dinheiro em caixa = {conference.cashInHand && formatCurrency(conference.cashInHand)}</InfoText>
            </>
          }
        </ContainerContent>
        <ContainerBtn>
          <Button
            text="VOLTAR"
            onPress={() => goBack()}
            color={Colors.light_yellow}
          />
          <Button 
            text="EXCLUIR"
            onPress={() => deleteConference(conference.id)}
            color="#cb00007f"
          />
        </ContainerBtn>
      </Container>
    </ContainerMain>
  );
};
