import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class Profile extends Component {
  static navigationOptions = {
    title: 'Meu perfil'
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>
          Eu sou o componente Profile
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f00',
  },
  
});
