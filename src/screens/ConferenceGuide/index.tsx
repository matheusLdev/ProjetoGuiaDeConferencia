/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import {Container, ContainerMain} from './styles';
import Header from '../../components/Header';
import {ScrollView} from 'react-native';
import {InputText} from '../../components/InputText';
import Button from '../../components/Button';
import Colors from '../../styles/Colors';
import {useAlert} from '../../hooks/useAlert';
import {ConferenceInfo, User} from '../../types';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {formatCurrency} from '../../utils/Currency';
import uuid from 'react-native-uuid';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../../routes/types';

export const ConferenceGuide = () => {
  const {showAlert, AlertComponent} = useAlert();
  const {navigate} = useNavigation<NavigationProp<RootStackParamList>>();
  const [form, setForm] = useState<ConferenceInfo>({
    initialRoulette: undefined,
    finalRoulette: undefined,
    totalPassenger: undefined,
    gratuity: undefined,
    transportVoucher: undefined,
    noCard: undefined,
    normalPassenger: undefined,
    ticketPrice: undefined,
    cashInHand: undefined,
  });

  const handleChange = (value: string, field: keyof typeof form) => {
    const numericValue = value ? Number(value) : undefined;

    setForm(prevForm => ({
      ...prevForm,
      [field]: numericValue,
      ...(field === 'initialRoulette' || field === 'finalRoulette'
        ? {
            totalPassenger: undefined,
            normalPassenger: undefined,
            cashInHand: undefined,
          }
        : {}),
      ...(field === 'gratuity' ||
      field === 'noCard' ||
      field === 'transportVoucher'
        ? {normalPassenger: undefined, cashInHand: undefined}
        : {}),
    }));
  };

  useEffect(() => {
    const loadData = async () => {
      try {
        const userData = await AsyncStorage.getItem('user');

        if (userData) {
          const user: User = JSON.parse(userData);
          setForm(prevForm => ({
            ...prevForm,
            ticketPrice: user.ticketPrice,
          }));
        }
      } catch (error) {
        showAlert('Erro ao carregar seus dados', 'error');
      }
    };

    loadData();
  }, []);

  useEffect(() => {
    if (form.initialRoulette && form.finalRoulette) {
      const totalPassengers = form.finalRoulette - form.initialRoulette;
      setForm(prevForm => ({
        ...prevForm,
        totalPassenger: totalPassengers > 0 ? totalPassengers : undefined,
      }));
    } else {
      setForm(prevForm => ({
        ...prevForm,
        totalPassenger: undefined,
      }));
    }
  }, [form.initialRoulette, form.finalRoulette]);

  useEffect(() => {
    if (
      form.totalPassenger !== undefined &&
      form.gratuity !== undefined &&
      form.noCard !== undefined &&
      form.transportVoucher !== undefined
    ) {
      const sumOfPassengers =
        form.gratuity + form.noCard + form.transportVoucher;

      if (sumOfPassengers > form.totalPassenger) {
        showAlert(
          'A soma de gratuidade, vale-transporte e sem cartão excede o total de passageiros!',
          'error',
        );
      } else {
        const normalPassengers = form.totalPassenger - sumOfPassengers;
        setForm(prevForm => ({
          ...prevForm,
          normalPassenger: normalPassengers >= 0 ? normalPassengers : 0,
        }));
      }
    } else {
      setForm(prevForm => ({
        ...prevForm,
        normalPassenger: undefined,
      }));
    }
  }, [form.totalPassenger, form.gratuity, form.noCard, form.transportVoucher]);

  useEffect(() => {
    if (form.normalPassenger !== undefined && form.ticketPrice) {
      const cashInHand = form.normalPassenger * form.ticketPrice;
      setForm(prevForm => ({
        ...prevForm,
        cashInHand: cashInHand,
      }));
    } else {
      setForm(prevForm => ({
        ...prevForm,
        cashInHand: undefined,
      }));
    }
  }, [form.normalPassenger, form.ticketPrice]);

  const handleSubmit = async () => {
    try {
      const newConference = {
        id: uuid.v4(),
        date: new Date().toISOString(),
        ...form,
      };
      console.log('Conferência salva:', newConference);

      const existingConferences = await AsyncStorage.getItem('conferences');
      const conferences = existingConferences
        ? JSON.parse(existingConferences)
        : [];

      conferences.push(newConference);

      await AsyncStorage.setItem('conferences', JSON.stringify(conferences));
      showAlert('Conferência registrada com sucesso!', 'success');
      setForm({
        initialRoulette: undefined,
        finalRoulette: undefined,
        totalPassenger: undefined,
        gratuity: undefined,
        transportVoucher: undefined,
        noCard: undefined,
        normalPassenger: undefined,
        ticketPrice: undefined,
        cashInHand: undefined,
      });
      navigate('Home');
    } catch (error) {
      console.error(error);
      showAlert(
        'Erro ao salvar a conferência, por favor, tente novamente',
        'error',
      );
    }
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
            keyboardType="numeric"
            defaultValue={form.initialRoulette?.toString()}
            onChangeText={text => handleChange(text, 'initialRoulette')}
          />
          <InputText
            label="Roleta Final - RF"
            id="finalRoulette"
            placeholder="Digite Roleta Final"
            keyboardType="numeric"
            defaultValue={form.finalRoulette?.toString()}
            onChangeText={text => handleChange(text, 'finalRoulette')}
          />
          <InputText
            label="Total Passageiro - PT"
            id="totalPassenger"
            placeholder="Total de passageiro"
            keyboardType="numeric"
            editable={false}
            defaultValue={form.totalPassenger?.toString()}
            onChangeText={text => handleChange(text, 'totalPassenger')}
          />
          {form.totalPassenger && (
            <>
              <InputText
                label="Gratuidade - GR"
                id="gratuity"
                placeholder="Digite as gratuidades"
                keyboardType="numeric"
                defaultValue={form.gratuity?.toString()}
                onChangeText={text => handleChange(text, 'gratuity')}
              />
              <InputText
                label="Vale Transporte - VT"
                id="transportVoucher"
                placeholder="Digite a quantidade de vale-transporte"
                keyboardType="numeric"
                defaultValue={form.transportVoucher?.toString()}
                onChangeText={text => handleChange(text, 'transportVoucher')}
              />
              <InputText
                label="Sem Cartão - SC"
                id="noCard"
                placeholder="Digite a quantidade passageiro sem cartão"
                keyboardType="numeric"
                defaultValue={form.noCard?.toString()}
                onChangeText={text => handleChange(text, 'noCard')}
              />
              <InputText
                label="Passageiro Normal - P"
                id="normalPassenger"
                placeholder="Total de passageiro normais"
                keyboardType="numeric"
                editable={false}
                defaultValue={form.normalPassenger?.toString()}
                onChangeText={text => handleChange(text, 'normalPassenger')}
              />
              <InputText
                label="Valor da Passagem"
                id="ticketPrice"
                placeholder="Valor da passagem"
                keyboardType="numeric"
                editable={false}
                defaultValue={
                  form.ticketPrice
                    ? formatCurrency(form.ticketPrice)
                    : undefined
                }
              />
              <InputText
                label="Dinheiro em Caixa"
                id="cashInHand"
                placeholder="Dinheiro em caixa"
                keyboardType="numeric"
                editable={false}
                defaultValue={
                  form.cashInHand ? formatCurrency(form.cashInHand) : undefined
                }
                onChangeText={text => handleChange(text, 'cashInHand')}
              />
              <Button
                color={Colors.yellow}
                text="SALVAR CONFERÊNCIA"
                onPress={handleSubmit}
              />
            </>
          )}
        </ScrollView>
      </Container>
    </ContainerMain>
  );
};
