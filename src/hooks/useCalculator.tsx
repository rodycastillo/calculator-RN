import React, { useRef, useState }  from 'react'


enum Operators {
  sum,
  rest,
  multiplication,
  divide
}
export const useCalculator = () => {

  const [number, setNumber] = useState('0')
  const [lastNumber, setLastNumber] = useState('0')

  const lastOperation = useRef<Operators>()

  const clean = () => {
    setNumber('0')
    setLastNumber('0')
  }

  const buildNumber = (numberTexto: string) => {

    if(number.includes('.') && numberTexto === '.') return;

    if(number.startsWith('0') || number.startsWith('-0')){
      if ( numberTexto === '.') {
        setNumber(number + numberTexto)
      } else if ( numberTexto === '0' && number.includes('.') ) {
        setNumber(number + numberTexto)
      } else if ( numberTexto !== '0' && !number.includes('.') ) {
        setNumber(numberTexto)
      } else if ( numberTexto === '0' && !number.includes('.') ) {
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

  const changeForLastNumber = () => {
    if(number.endsWith('.')) {
      setLastNumber(number.slice(0, -1))
    } else {
      setLastNumber(number)
    }
    setNumber('0')
  }

  const buttonDivide = () => {
    changeForLastNumber()
    lastOperation.current = Operators.divide
  }

  const buttonMultiplication = () => {
    changeForLastNumber()
    lastOperation.current = Operators.multiplication
  }

  const buttonRest = () => {
    changeForLastNumber()
    lastOperation.current = Operators.rest
  }

  const buttonSum = () => {
    changeForLastNumber()
    lastOperation.current = Operators.sum
  }

  const total = () => {
    const num1 = Number(number)
    const num2 = Number(lastNumber)

    switch(lastOperation.current) {
      case Operators.sum:
        setNumber(`${num1 + num2}`)
        break;
      case Operators.rest:
        setNumber(`${num2 - num1}`)
        break;
      case Operators.divide:
        setNumber(`${num2 / num1}`)
        break;
      case Operators.multiplication:
        setNumber(`${num1 * num2}`)
        break;
    }
  }
  return { 
    total,
    buttonSum,
    buttonRest,
    buttonDivide,
    buttonMultiplication,
    buildNumber,
    btnDelete,
    positiveNegative,
    clean,
    number,
    lastNumber 
  }
}

