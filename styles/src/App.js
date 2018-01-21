import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

import {TabNavigator, StackNavigator} from 'react-navigation';

import Tela from './Tela';
import Init from './Init';
import Teste from './Teste';
import Navigator from './Navigator';


const TabNav = TabNavigator({
  Tela: {
    screen: Tela,
  },
  Inicio: {
    screen: Init,
  }
}, {
  
});

const RootNavigator = StackNavigator({
  Teste: { screen: Teste },
  TabNav: { screen: TabNav },
  
}, {
  
})


export default class App extends Component<{}> {
  render() {

    return (
      <RootNavigator />
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ccc'
  },

  header:{
    height: 60,
    backgroundColor: '#FFF',
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },


  profileButton:{
    
    backgroundColor: '#069',
    paddingVertical: 10,
    borderRadius: 5,
    marginTop: 10
  },

  profileButtonText:{
    textAlign: 'center',
    color: '#FFF',
    fontWeight: 'bold'
  }

});
