import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, SafeAreaView, TextInput, Button, View } from 'react-native';

export default function App() {
  const [ListaPrimos, setListaPrimos] = useState('');
  const [N, setN] = useState('');

  const doEratostenes = () => {
    const isPrime = new Array(Number(N) + 1).fill(true);
    isPrime[0] = isPrime[1] = false;

    for (let i = 2; i <= Math.sqrt(N); i++) {
      if (isPrime[i]) {
        for (let j = i * i; j <= N; j += i) {
          isPrime[j] = false;
        }
      }
    }
    const primes = [];  
    for (let i = 2; i <= N; i++) {
      if (isPrime[i]) {
        primes.push(i);
      }
    }
    setListaPrimos(primes);
  };


  return (
   <SafeAreaView style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={setN}
        value={N}
        keyboardType="numeric"
      />
      <Button title="Calcular" onPress={doEratostenes} />
      <Text>{[...ListaPrimos].toString()}</Text>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ccc',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    backgroundColor: '#fff',
    width: '90%',
  }
});
