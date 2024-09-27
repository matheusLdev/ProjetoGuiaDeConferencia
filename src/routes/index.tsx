import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Home} from '../screens/Home';
import {EditRegister} from '../screens/EditRegister';
import {ConferenceGuide} from '../screens/ConferenceGuide';
import {HistoryConferenceGuide} from '../screens/HistoryConferenceGuide';
import {SeeConferenceGuide} from '../screens/HistoryConferenceGuide/SeeConferenceGuide';
import {Welcome} from '../screens/Welcome';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createStackNavigator();

export const Routes = () => {
  const [userExist, setUserExist] = useState<boolean>();

  useEffect(() => {
    const loadUserData = async () => {
      const userData = await AsyncStorage.getItem('user');
      userData ? setUserExist(true) : setUserExist(false);
    };

    loadUserData();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={userExist ? 'Home' : 'Welcome'}
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="EditRegister" component={EditRegister} />
        <Stack.Screen name="ConferenceGuide" component={ConferenceGuide} />
        <Stack.Screen
          name="HistoryConferenceGuide"
          component={HistoryConferenceGuide}
        />
        <Stack.Screen
          name="SeeConferenceGuide"
          component={SeeConferenceGuide}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
