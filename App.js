import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>App</Text>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    textAlign: 'center',
    justifyContent: 'center',
  },
  text: {
    fontWeight: 'bold',
  },
});
