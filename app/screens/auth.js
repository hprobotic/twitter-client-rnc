import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import styles from '../styles';

class Auth extends Component {
  static navigationOptions = {
    title: 'Authentication',
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>Auth</Text>
      </View>
    );
  }
}

export default Auth;
