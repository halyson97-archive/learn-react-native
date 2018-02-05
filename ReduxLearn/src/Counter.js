import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button
} from 'react-native';

import { connect } from 'react-redux';

const mapStateToProps = state => ({
    todos: state.todos
})

class Counter extends Component {

    render() {
        return (
            <View style={styles.container}>
                <Text> Voce tem {this.props.todos.length} todos</Text>
            </View>
        );
    }
}

export default connect(mapStateToProps)(Counter);

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#F5FCFF',
  },
});
