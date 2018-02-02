import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  AsyncStorage,
  Animated,
  Share,
  Button
} from 'react-native';

export default class App extends Component<{}> {
  state = {
    latitude: 0,
    longitude: 0,
    nome: '',
    ballPosY: new Animated.Value(0),
  };

  async getNome(){
    const nome = await AsyncStorage.getItem('@GoNative:nome');
    this.setState({nome})
    
  }

  shareStatus(){
    Share.share({
      title: 'Go native week',
      message: 'Esta semana esta sendo demais'
    })
  }

  componentDidMount(){
    navigator.geolocation.getCurrentPosition(position => {
      this.setState({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      })
    })

    this.getNome();

    Animated.timing(this.state.ballPosY, {
      toValue: 290,
      duration: 999 
    }).start();
    
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.content}>
          <Text>Sua latitude é: {this.state.latitude}</Text>
          <Text>Sua longitude é:{this.state.longitude} </Text>
          <Text>Meu nome é: {this.state.nome} </Text>
        </View>

        <View style={styles.content}>
          <Animated.View 
            style={[
              styles.ball, 
              { marginLeft: this.state.ballPosY }
            ]} />

        </View>

        <View style={styles.content}>
          <Button
            onPress={this.shareStatus}
            title="Compartilhar"
            color="#841584"
            accessibilityLabel="Compartilhar"
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  content:{
    padding: 10,
    borderBottomWidth: 1
  },

  ball:{
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: 'green'
  }
});
