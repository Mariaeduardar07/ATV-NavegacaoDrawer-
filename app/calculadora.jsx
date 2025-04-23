import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const buttons = [
  ['7', '8', '9', '/'],
  ['4', '5', '6', '*'],
  ['1', '2', '3', '-'],
  ['0', '.', 'C', '+'],
  ['='],
];

const operators = ['/', '*', '-', '+', '='];

export default function Calculadora() {
  const [input, setInput] = useState('');
  const [resultado, setResultado] = useState('');

  const handlePress = (value) => {
    if (value === 'C') {
      limpar();
    } else if (value === '=') {
      calcular();
    } else {
      setInput((prev) => prev + value);
    }
  };

  const calcular = () => {
    try {
      const resultadoCalculado = eval(input);
      setResultado(resultadoCalculado.toString());
    } catch {
      setResultado('Erro');
    }
  };

  const limpar = () => {
    setInput('');
    setResultado('');
  };

  return (
    <View style={styles.container}>
      <View style={styles.displayContainer}>
        <Text style={styles.inputText}>{input || '0'}</Text>
        <Text style={styles.resultText}>{resultado}</Text>
      </View>

      <View style={styles.buttonsContainer}>
        {buttons.map((row, rowIndex) => (
          <View key={rowIndex} style={styles.row}>
            {row.map((btn) => (
              <TouchableOpacity
                key={btn}
                style={[
                  styles.button,
                  operators.includes(btn) ? styles.operatorButton : styles.defaultButton,
                  btn === 'C' && styles.clearButton,
                  btn === '=' && styles.equalsButton,
                ]}
                onPress={() => handlePress(btn)}
              >
                <Text style={styles.buttonText}>{btn}</Text>
              </TouchableOpacity>
            ))}
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff0f6',
    padding: '5%',
    justifyContent: 'flex-end',
  },
  displayContainer: {
    marginBottom: '5%',
  },
  inputText: {
    fontSize: 75,
    fontWeight: 'bold',
    textAlign: 'right',
    color: '#880e4f',
    marginBottom: '2%',
  },
  resultText: {
    fontSize: 50,
    textAlign: 'right',
    color: '#666',
  },
  buttonsContainer: {
    justifyContent: 'space-between',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: '3%',
  },
  button: {
    width: 88,
    padding: 20,
    borderRadius: 12,
    alignItems: 'center',
    margin: '1%',
    flex: 1,
  },
  defaultButton: {
    backgroundColor: '#880e4f',
  },
  operatorButton: {
    backgroundColor: '#af0d7b',
  },
  clearButton: {
    backgroundColor: '#cc0264',
  },
  equalsButton: {
    backgroundColor: '#c41b76',
    flex: 1,
  },
  buttonText: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
  },
});
