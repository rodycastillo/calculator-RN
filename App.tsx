import React from 'react';
import { SafeAreaView } from 'react-native';
import { CalculatorScreen } from './src/screens/CalculatorScreen';
import { styles } from './src/theme/appTheme';


export const App = () => {
  return (
    <SafeAreaView style={ styles.background }>
      <CalculatorScreen />
    </SafeAreaView>
  );
};
