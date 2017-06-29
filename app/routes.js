import React from 'react';
import { StackNavigator, TabNavigator, addNavigationHelpers } from 'react-navigation';
import { Counter, Welcome, Auth, PhotoMap, Yelp } from './screens';
import { ralph } from './styles';

const stackConfig = {
  navigationOptions: {
    headerStyle: {
      backgroundColor: ralph.primaryColor,
    },
    headerTintColor: ralph.backgroundColor,
  },
};

const emptyHeader = {
  navigationOptions: {
    header: null,
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

const PhotoMapNavigator = StackNavigator({
  PhotoMap: {screen: PhotoMap},
}, emptyHeader);

const YelpNavigator = StackNavigator({
  Yelp: {screen: Yelp},
});

export {
  AppNavigator, AuthNavigator, PhotoMapNavigator, YelpNavigator
};
