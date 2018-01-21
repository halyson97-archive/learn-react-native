import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  ScrollView,
  TouchableOpacity
} from 'react-native';

import Post from './components/Post';

export default class Navigator extends Component {

  static navigationOptions = {
    title: 'Navigator'
  }


  render() {

    const { navigate } = this.props.navigation;

    return (
      <ScrollView style={styles.container}>

        <TouchableOpacity
          onPress={()=>{ navigate('MyApp') }}
          style={styles.profileButton}
        >
          <Text style={styles.profileButtonText}>Navigator</Text>
        </TouchableOpacity>
        
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: '#FFF'
  },

  profileButton:{
    flex: 1,
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
