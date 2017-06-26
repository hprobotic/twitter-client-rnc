import React from 'react';
import { StatusBar, StyleSheet, View } from 'react-native';
import { AppNavigator, AuthNavigator } from '../routes';
import styles from '../styles';

const App = () => (
  <View style={styles.app}>
    <StatusBar barStyle="light-content" />
    <AuthNavigator />
  </View>
);

export default App;
