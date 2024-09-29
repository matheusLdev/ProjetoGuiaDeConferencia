import React from 'react';
import {Routes} from './routes';
import {Text} from 'react-native';

(Text as any).defaultProps = {
  ...(Text as any).defaultProps,
  allowFontScaling: true, // Pode ajustar para true se quiser limitar com maxFontSizeMultiplier
  maxFontSizeMultiplier: 1.2, // Limita o aumento da fonte
};

const App = (): React.JSX.Element => {
  return <Routes />;
};

export default App;
