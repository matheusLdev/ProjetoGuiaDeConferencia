import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Home} from '../screens/Home';
import {Menu} from '../screens/Menu';
import {ConferenceGuide} from '../screens/ConferenceGuide';
import {HistoryConferenceGuide} from '../screens/HistoryConferenceGuide';

const Stack = createStackNavigator();

export const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Menu" component={Menu} />
        <Stack.Screen name="ConferenceGuide" component={ConferenceGuide} />
        <Stack.Screen
          name="HistoryConferenceGuide"
          component={HistoryConferenceGuide}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
