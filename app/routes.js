import React from 'react';
import { StackNavigator, TabNavigator } from 'react-navigation';
import { Counter, Welcome, Auth } from './screens';
import { ralph } from './styles';

const stackConfig = {
  navigationOptions: {
    headerStyle: {
      backgroundColor: ralph.primaryColor,
    },
    headerTintColor: ralph.backgroundColor,
  },
};

const tabConfig = {
  tabBarOptions: {
    activeTintColor: ralph.primaryColor,
  },
};

const WelcomeNavigator = StackNavigator({
  Welcome: {screen: Welcome},
}, stackConfig);

const CounterNavigator = StackNavigator({
  Counter: {screen: Counter},
}, stackConfig);

const AuthNavigator = StackNavigator({
  Auth: {screen: Auth},
}, stackConfig);

const AppNavigator = TabNavigator({
  Welcome: {screen: WelcomeNavigator},
  Counter: {screen: CounterNavigator},
}, tabConfig);

export {
  AppNavigator, AuthNavigator,
};
