import React, { useState } from 'react';
import { View, Text, Pressable, TextInput, StyleSheet, StatusBar } from 'react-native';

export default function GeradorSenhaScreen() {
  const [senha, setSenha] = useState('');

  const gerarSenha = () => {
    const letrasMaiusculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const letrasMinusculas = 'abcdefghijklmnopqrstuvwxyz';
    const numeros = '0123456789';
    const simbolos = '!@#$%&*_-+=<>?(){}[]|:;,.^~`';
    const caracteres = letrasMaiusculas + letrasMinusculas + numeros + simbolos;

    let senhaGerada = '';
    const tamanho = 15;

    for (let i = 0; i < tamanho; i++) {
      const index = Math.floor(Math.random() * caracteres.length);
      senhaGerada += caracteres[index];
    }

    setSenha(senhaGerada);
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <Text style={styles.title}>🔐</Text>

      <TextInput
        style={styles.input}
        value={senha}
        editable={false}
        placeholder="Sua senha aparecerá aqui"
        placeholderTextColor="#999"
      />

      <Pressable
        style={({ pressed }) => [styles.button, pressed && styles.buttonPressed]}
        onPress={gerarSenha}
      >
        <Text style={styles.buttonText}>Gerar Senha</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff0f6',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#c2185b',
    marginBottom: 30,
    textAlign: 'center',
  },
  input: {
    width: '100%',
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 16,
    fontSize: 18,
    color: '#880e4f',
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#f06292',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  button: {
    backgroundColor: '#f06292',
    paddingVertical: 14,
    paddingHorizontal: 28,
    borderRadius: 30,
    elevation: 4,
  },
  buttonPressed: {
    opacity: 0.85,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
