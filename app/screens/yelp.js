import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class Yelp extends Component {
  state = {
    url: 'https://api.yelp.com/v3/businesses/search',
    token: 'Bear a9MzwEfTK-duK-I9P_Wty-IH8LnLs8USoQQDTFVt_7Yg6J0NtavbQeQE-1_nIsDa8hJCToAcYxoi8tDRMupvcgqR0M_5kWcLMsCeRvcXnWy4o1G8nwQpVqCqn59TWXYx',
  }
  static navigationOptions = {
    title: 'Yelp',
  };
  componentWillMount(){

  }

  fetchBusinesses() {
    return fetch('')
  }

  render() {
    return (
      <View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Yelp;
