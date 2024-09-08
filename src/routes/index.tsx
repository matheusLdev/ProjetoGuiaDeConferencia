import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Home} from '../screens/Home';
import {EditRegister} from '../screens/EditRegister';
import {ConferenceGuide} from '../screens/ConferenceGuide';
import {HistoryConferenceGuide} from '../screens/HistoryConferenceGuide';

const Stack = createStackNavigator();

export const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="EditRegister" component={EditRegister} />
        <Stack.Screen name="ConferenceGuide" component={ConferenceGuide} />
        <Stack.Screen
          name="HistoryConferenceGuide"
          component={HistoryConferenceGuide}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
