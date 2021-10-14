import React from 'react';
import { Text, View } from 'react-native';
import { ButtonCalc } from '../components/ButtonCalc';
import { styles } from '../theme/appTheme';
import { useCalculator } from '../hooks/useCalculator';

export const CalculatorScreen = () => {
  const  { total, buttonSum, buttonRest, buttonDivide, buttonMultiplication,buildNumber, btnDelete, positiveNegative, clean, number, lastNumber } = useCalculator()
  return (
    <View style={ styles.calculatorContainer }>
      {
        (lastNumber!=='0') && (
          <Text style={styles.resultSmall}>{lastNumber}</Text>
        )
      }
      <Text
        style={styles.result}
        numberOfLines={ 1 }
        adjustsFontSizeToFit
      >
        {number}
      </Text>

      <View style={styles.row}>
        <ButtonCalc text="C" color="#9b9b9b" action={ clean }/>
        <ButtonCalc text="+/-" color="#9b9b9b" action={ positiveNegative }/>
        <ButtonCalc text="del" color="#9b9b9b" action={ btnDelete }/>
        <ButtonCalc text="/" color="#ff9427" action={ buttonDivide }/>
      </View>
      <View style={styles.row}>
        <ButtonCalc text="7" action={ buildNumber }/>
        <ButtonCalc text="8" action={ buildNumber }/>
        <ButtonCalc text="9" action={ buildNumber }/>
        <ButtonCalc text="x" color="#ff9427" action={ buttonMultiplication }/>
      </View>
      <View style={styles.row}>
        <ButtonCalc text="4" action={ buildNumber }/>
        <ButtonCalc text="5" action={ buildNumber }/>
        <ButtonCalc text="6" action={ buildNumber }/>
        <ButtonCalc text="-" color="#ff9427" action={ buttonRest }/>
      </View>
      <View style={styles.row}>
        <ButtonCalc text="1" action={ buildNumber }/>
        <ButtonCalc text="2" action={ buildNumber }/>
        <ButtonCalc text="3" action={ buildNumber }/>
        <ButtonCalc text="+" color="#ff9427" action={ buttonSum }/>
      </View>
      <View style={styles.row}>
        <ButtonCalc text="0" width action={ buildNumber }/>
        <ButtonCalc text="." action={ buildNumber }/>
        <ButtonCalc text="=" color="#ff9427" action={ total }/>
      </View>

    </View>
  );
};

