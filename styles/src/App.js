


/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import { TabNavigator } from 'react-navigation';

import Tela from './Tela';
import Init from './Init';
import Navigator from './Navigator';


const MyApp = TabNavigator({
  Home: {
    screen: Tela,
  },
  Inicio: {
    screen: Init,
  },
  Navigator: {
    screen: Navigator,
  },
}, {
  tabBarPosition: 'top',
  animationEnabled: true,
  tabBarOptions: {
    activeTintColor: '#e91e63',
  },
});

export default MyApp;