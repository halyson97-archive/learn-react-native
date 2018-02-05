import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button
} from 'react-native';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as todoActions from './actions/todos';

const mapDispatchToProps = dispatch => bindActionCreators(todoActions, dispatch);

const mapStateToProps = state => ({
    todos: state.todos
})

class TodoList extends Component {

    state = {
        newTodoText: ''
    };
    
    constructor(props){
        super(props);        
    }

    addNewTodo = () => {
        this.props.addTodo(this.state.newTodoText);

        this.setState({newTodoText: ''})
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.list}>
                    { this.props.todos.map(todo=>(
                        <Text style={styles.item} key={todo.id}>* {todo.text}</Text>
                    ))}
                    
                </View>

                <TextInput
                    style={{height: 40}}
                    onChangeText={(text) => this.setState({newTodoText: text})}
                    value={this.state.newTodoText}
                />

                <Button
                    onPress={this.addNewTodo}
                    title="Novo todo"
                    color="#841584"
                    accessibilityLabel="Learn more about this purple button"
                />
            </View>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#F5FCFF',
  },
});
