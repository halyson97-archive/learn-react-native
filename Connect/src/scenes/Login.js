import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import { TabNavigator } from 'react-navigation';

import Home from './Home';
import Init from './Init';
import Navigator from './Navigator';


const MyApp = TabNavigator({
  Home: {
    screen: Init,
  },
}, {
  tabBarPosition: 'top',
  animationEnabled: true,
  tabBarOptions: {
    activeTintColor: '#e91e63',
  },
});

export default MyApp;