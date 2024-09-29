import React, {useEffect, useState} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../../routes/types';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const SplashScreen = () => {
  const {navigate} = useNavigation<NavigationProp<RootStackParamList>>();
  const [userExist, setUserExist] = useState<boolean | undefined>(undefined);

  useEffect(() => {
    const loadUserData = async () => {
      try {
        const userData = await AsyncStorage.getItem('user');
        setUserExist(!!userData);
      } catch (error) {
        console.error('Erro ao carregar dados do usuário', error);
      }
    };

    loadUserData();
  }, []);

  useEffect(() => {
    if (userExist !== undefined) {
      const timer = setTimeout(() => {
        if (userExist) {
          navigate('Home');
        } else {
          navigate('Welcome');
        }
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [navigate, userExist]);

  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/images/gdr.png')}
        style={styles.logo}
      />
      <Text style={styles.welcomeText}>Bem-vindo ao Guia de Conferência</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  welcomeText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
});
