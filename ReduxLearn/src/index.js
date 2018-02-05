import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import { Provider } from 'react-redux';
import store from './store';

import TodoList from './TodoList';
import Counter from './Counter';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>

          <TodoList />
          <Counter />
          
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
});
