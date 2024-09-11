import React, {useState} from 'react';
import {Container, ContainerMain} from './styles';
import Header from '../../components/Header';
// import {NavigationProp, useNavigation} from '@react-navigation/native';
// import {RootStackParamList} from '../../routes/types';
import {ScrollView} from 'react-native';
import {InputText} from '../../components/InputText';
import Button from '../../components/Button';
import Colors from '../../styles/Colors';
import {useAlert} from '../../hooks/useAlert';

export const ConferenceGuide = () => {
  // const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const {showAlert, AlertComponent} = useAlert();
  const [form, setForm] = useState({
    initialRoulette: '',
    finalRoulette: '',
    totalPassenger: '',
    gratuity: '',
    transportVoucher: '',
    noCard: '',
    normalPassenger: '',
    ticketPrice: '',
    cashInHand: '',
  });

  const handleChange = (value: string, field: keyof typeof form) => {
    setForm({...form, [field]: value});
  };

  const handleSubmit = () => {
    showAlert('Conferência registrada com sucesso!', 'success');
  };

  return (
    <ContainerMain>
      <AlertComponent />
      <Header ButtonReturn={true} TitleHeader="Registrar Nova Conferência" />
      <Container>
        <ScrollView>
          <InputText
            label="Roleta Inicial - RI"
            id="initialRoulette"
            placeholder="Digite Roleta Inicial"
            value={form.initialRoulette}
            onChangeText={text => handleChange(text, 'initialRoulette')}
          />
          <InputText
            label="Roleta Final - RF"
            id="finalRoulette"
            placeholder="Digite Roleta Final"
            value={form.finalRoulette}
            onChangeText={text => handleChange(text, 'finalRoulette')}
          />
          <InputText
            label="Total Passageiro - PT"
            id="totalPassenger"
            placeholder="Total de passageiro"
            value={form.totalPassenger}
            onChangeText={text => handleChange(text, 'totalPassenger')}
          />
          <InputText
            label="Gratuidade - GR"
            id="gratuity"
            placeholder="Digite as gratuidades"
            value={form.gratuity}
            onChangeText={text => handleChange(text, 'gratuity')}
          />
          <InputText
            label="Vale Transporte - VT"
            id="transportVoucher"
            placeholder="Digite a quantidade de vale-transporte"
            value={form.transportVoucher}
            onChangeText={text => handleChange(text, 'transportVoucher')}
          />
          <InputText
            label="Sem Cartão - SC"
            id="noCard"
            placeholder="Digite a quantidade passageiro sem cartão"
            value={form.noCard}
            onChangeText={text => handleChange(text, 'noCard')}
          />
          <InputText
            label="Passageiro Normal - P"
            id="normalPassenger"
            placeholder="Total de passageiro normais"
            value={form.normalPassenger}
            onChangeText={text => handleChange(text, 'normalPassenger')}
          />
          <InputText
            label="Valor da Passagem"
            id="ticketPrice"
            placeholder="Valor da passagem"
            value={form.ticketPrice}
            onChangeText={text => handleChange(text, 'ticketPrice')}
          />
          <InputText
            label="Dinheiro em Caixa"
            id="cashInHand"
            placeholder="Dinheiro em caixa"
            value={form.cashInHand}
            onChangeText={text => handleChange(text, 'cashInHand')}
          />
          <Button
            color={Colors.yellow}
            text="EFETUAR CONFERÊNCIA"
            onPress={handleSubmit}
          />
        </ScrollView>
      </Container>
    </ContainerMain>
  );
};
