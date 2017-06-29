import React from 'react';
import { StatusBar, StyleSheet, View } from 'react-native';
import { AppNavigator, AuthNavigator, PhotoMapNavigator, YelpNavigator } from '../routes';
import styles from '../styles';
import { connect } from 'react-redux';

const App = () => (
  <View style={styles.app}>
    <StatusBar barStyle="dark-content" />
    <YelpNavigator />
  </View>
);

export default connect()(App);