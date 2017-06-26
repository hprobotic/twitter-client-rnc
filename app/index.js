import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import { App } from './components';
import store from './redux/store';

const twrnc = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

export default twrnc;

AppRegistry.registerComponent('twrnc', () => twrnc);
