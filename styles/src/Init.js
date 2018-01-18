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


export default class App extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
        {/*  <View style={[styles.box, styles.box2]} /> */}
        <View style={styles.box} />
        <View style={styles.box} />
        <View style={styles.box} />
        <View style={styles.box} />
        <View style={styles.box} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row', //column, row
    // width: 200,
    flex: 1, //quer dizer que é flexivel, e 1 ocupa todo o espaço da tela
    backgroundColor: '#ccc',
    flexWrap: 'wrap', //no-wrap, wrap
    alignContent: 'space-around', //center, space-between, space-around
    // alignItems: 'center', //flex-start, flex-end, center // nao funciona quando se tem flexwrap, ai usa aligncontent
    // justifyContent: 'space-around' //space-between, space-around

  },
  box: {
    height: 100,
    // width: 100,
    minWidth: 100,
    flex: 1, //quer dizer que é flexivel, e 1 todos o elementos caberao na tela
    backgroundColor: '#666',
    borderColor: '#999',
    borderWidth: 5,
    margin: 10
  },

  // box2:{
  //   alignSelf: 'flex-end'
  // }

});
