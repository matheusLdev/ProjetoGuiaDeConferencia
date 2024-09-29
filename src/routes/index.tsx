import React from 'react';
import {useNavigationState} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Home} from '../screens/Home';
import {EditRegister} from '../screens/EditRegister';
import {ConferenceGuide} from '../screens/ConferenceGuide';
import {HistoryConferenceGuide} from '../screens/HistoryConferenceGuide';
import {SeeConferenceGuide} from '../screens/HistoryConferenceGuide/SeeConferenceGuide';
import {Welcome} from '../screens/Welcome';
import {SplashScreen} from '../screens/SplashScreen';
import {useBackHandler} from '../hooks/useBackHandler';

const Stack = createStackNavigator();

export const Routes = () => {
  const routeName = useNavigationState(
    state => state?.routes[state.index]?.name,
  );
  const isExitAppScreen = routeName === 'Home' || routeName === 'Welcome';

  useBackHandler(isExitAppScreen);

  return (
    <Stack.Navigator
      initialRouteName={'SplashScreen'}
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="EditRegister" component={EditRegister} />
      <Stack.Screen name="ConferenceGuide" component={ConferenceGuide} />
      <Stack.Screen
        name="HistoryConferenceGuide"
        component={HistoryConferenceGuide}
      />
      <Stack.Screen name="SeeConferenceGuide" component={SeeConferenceGuide} />
    </Stack.Navigator>
  );
};
