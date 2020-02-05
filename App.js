
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Ist from './Ist';
import Login from './Login';
import SignUp from './SignUp';
import Page1 from './Page1';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <AppContainer/>
    );
  }
}



 
const navigation = createSwitchNavigator({
  Page1,Login, SignUp, App, Ist
})

const AppContainer =  createAppContainer(navigation);
