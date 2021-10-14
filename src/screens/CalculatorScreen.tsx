import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { ButtonCalc } from '../components/ButtonCalc';
import { styles } from '../theme/appTheme';

export const CalculatorScreen = () => {

  const [number, setNumber] = useState('0')
  const [lastNumber, setLastNumber] = useState('0')

  const clean = () => {
    return setNumber('0')
  }

  const buildNumber = (numberTexto: string) => {

    if(number.includes('.') &&numberTexto=='.') return
    if(number.startsWith('0') || number.startsWith('-0')){
      if ( numberTexto === '.') {
        setNumber(number + numberTexto)
      } else if ( numberTexto === '0' && number.includes('.') ) {
        setNumber(number + numberTexto)
      } else if ( numberTexto !== '0' && number.includes('.') ) {
        setNumber(numberTexto)
      } else if ( numberTexto === '0' && number.includes('.') ) {
        setNumber(number)
      } else {
        setNumber(number + numberTexto)
      }
    } else {
      setNumber(number + numberTexto)
    }
  }

  const positiveNegative = () => {
    if(number.includes('-')) {
      setNumber(number.replace('-', ''))
    } else {
      setNumber('-' + number)
    }
  }

  const btnDelete = () => {
    
    let negative = ''
    let numTemp = number
    if(number.includes('-')) {
      negative = '-'
      numTemp = number.substr(1)
    }
    if( numTemp.length >  1) {
      setNumber(negative + numTemp.slice(0, -1))
    } else {
      setNumber('0')
    }

  }

  return (
    <View style={ styles.calculatorContainer }>
      <Text style={styles.resultSmall}>{lastNumber}</Text>
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
        <ButtonCalc text="/" color="#ff9427" action={ clean }/>
      </View>
      <View style={styles.row}>
        <ButtonCalc text="7" action={ buildNumber }/>
        <ButtonCalc text="8" action={ buildNumber }/>
        <ButtonCalc text="9" action={ buildNumber }/>
        <ButtonCalc text="x" color="#ff9427" action={ clean }/>
      </View>
      <View style={styles.row}>
        <ButtonCalc text="4" action={ buildNumber }/>
        <ButtonCalc text="5" action={ buildNumber }/>
        <ButtonCalc text="6" action={ buildNumber }/>
        <ButtonCalc text="-" color="#ff9427" action={ clean }/>
      </View>
      <View style={styles.row}>
        <ButtonCalc text="1" action={ buildNumber }/>
        <ButtonCalc text="2" action={ buildNumber }/>
        <ButtonCalc text="3" action={ buildNumber }/>
        <ButtonCalc text="+" color="#ff9427" action={ clean }/>
      </View>
      <View style={styles.row}>
        <ButtonCalc text="0" width action={ buildNumber }/>
        <ButtonCalc text="." action={ buildNumber }/>
        <ButtonCalc text="=" color="#ff9427" action={ clean }/>
      </View>

    </View>
  );
};

