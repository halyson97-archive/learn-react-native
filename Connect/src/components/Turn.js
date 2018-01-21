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

export default class Turn extends Component<{}> {

  	render() {
      
    	return (
      		<View style={styles.container}>
	        	<View style={ this.props.status ? [styles.view, styles.on] : [styles.view, styles.off] }/>
      		</View>
    	);
  	}
}

const styles = StyleSheet.create({
  container:{
    padding: 10
  },

  view:{
    width: 100,
    height: 100,
    borderRadius: 50
  },
  on: {
    backgroundColor: 'green'
  },

  off:{
    backgroundColor: 'red'
  }
  
});
