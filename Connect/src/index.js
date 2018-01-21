import React, { Component } from 'react';
import {Actions, Scene, Router} from 'react-native-router-flux';

import Login from './scenes/Login';
import Home from './scenes/Home';
import Empresa from './scenes/Empresa';

const scenes = Actions.create(
  <Scene key="root">
    <Scene key="login" component={Login} />
    
    
  </Scene>
);

export default class App extends Component {
  render() {
    return <Router scenes={scenes}/>
  }
}