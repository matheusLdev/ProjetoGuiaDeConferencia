import {useFocusEffect} from '@react-navigation/native';
import {BackHandler} from 'react-native';
import {useCallback} from 'react';

export const useBackHandler = (shouldExitApp: boolean) => {
  useFocusEffect(
    useCallback(() => {
      const onBackPress = () => {
        if (shouldExitApp) {
          BackHandler.exitApp();
          return true;
        }
        return false;
      };

      const backHandler = BackHandler.addEventListener(
        'hardwareBackPress',
        onBackPress,
      );

      return () => {
        backHandler.remove();
      };
    }, [shouldExitApp]),
  );
};
