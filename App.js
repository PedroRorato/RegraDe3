import React from 'react';
import { Keyboard, StyleSheet, TouchableWithoutFeedback, View } from 'react-native';
import Header from './components/Header';
import Calculadora from './components/Calculadora';

export default function App() {

  return (
    <TouchableWithoutFeedback onPress={() => {Keyboard.dismiss()}} >
      <View style={styles.container}>
        <Header title="Regra de 3" />
        <Calculadora />
      </View>
    </TouchableWithoutFeedback>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ddd',
    paddingTop: 25,
    textAlign: 'center'
  },
});
