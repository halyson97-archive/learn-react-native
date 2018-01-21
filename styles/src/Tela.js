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
  View,
  TouchableOpacity
} from 'react-native';

import SplashScreen from 'react-native-splash-screen';


export default class Tela extends Component<{}> {
  render() {

    const { navigate } = this.props.navigation;


    return (
      <View style={styles.container}>
      	

        <TouchableOpacity
          onPress={()=>{ navigate('Teste') }}
          style={styles.profileButton}
        >
          <Text style={styles.profileButtonText}>Meu perfil</Text>
        </TouchableOpacity>
      </View>
    );
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
