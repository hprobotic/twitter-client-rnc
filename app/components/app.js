import React from 'react';
import { StatusBar, StyleSheet, View } from 'react-native';
import { AppNavigator, AuthNavigator, PhotoMapNavigator } from '../routes';
import styles from '../styles';

const App = () => (
  <View style={styles.app}>
    <StatusBar barStyle="dark-content" />
    <PhotoMapNavigator />
  </View>
);

export default App;