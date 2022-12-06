import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import Main from './src/Pages/Main';

const App = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Main />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
