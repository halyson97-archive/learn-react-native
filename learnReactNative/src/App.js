import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import Posts from './scenes/posts';
import Profile from './scenes/profile';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>
          Olá Seja bem vindo!
        </Text>

        <Posts />
        <Profile />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    paddingHorizontal: 20
  }
});
