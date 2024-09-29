import React from 'react';
import {Routes} from './routes';
import {Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

(Text as any).defaultProps = {
  ...(Text as any).defaultProps,
  allowFontScaling: true,
  maxFontSizeMultiplier: 1.5,
};

const App = (): React.JSX.Element => {
  return (
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
  );
};

export default App;
