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
  Button
} from 'react-native';

import Turn from './components/Turn';

export default class App extends Component<{}> {

	state = {
		status: false
	}

	clicked = ()=>{
		this.setState({
			status: !this.state.status
		})
	}


  	render() {
    	return (
      		<View style={styles.container}>
	        	<Text style={styles.welcome}>
	          		Welcome to React Native!
	        	</Text>

	        	<Turn status={this.state.status}/>

	        	<Button 
	        		onPress={this.clicked}
	        		title="Click here"
	        	/>
      		</View>
    	);
  	}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
