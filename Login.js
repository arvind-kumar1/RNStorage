import React, { Component } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import { Container, Header, Content, Form, Item, Input, Spinner, Icon, Button } from 'native-base';
import firebase from 'react-native-firebase';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
        email:'',
        password:''
    };
  }
sign(){
    firebase.auth().signInWithEmailAndPassword(this.state.email,this.state.password)
    .then(() => {
        this.props.navigation.navigate('Ist')
    })
    .catch((err) => {
        alert(err);
    })
}
  render() {
    return (
        <View style={{ backgroundColor: "#4c4f4f", flex: 1 }}>
        <View style={{ backgroundColor: "white", borderRadius: 20, paddingLeft: 10, flex: 1 }}>
            <View style={{padding:10}}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('App')}>
          <Icon name='arrow-back' />
          </TouchableOpacity>
            </View>
          
         
     
          <View style={{ flexDirection: 'row', padding: 10 }}>
            <Icon name='mail' style={{ marginTop: 8, marginRight: 10, marginTop: 10, }} />


            <TextInput placeholder='E-mail' onChangeText={(t) => this.setState({ email: t })} />
          </View>
          <View style={{ flexDirection: 'row', padding: 10, marginLeft: 5, }}>
            <Icon name='lock' style={{ marginTop: 8, marginRight: 10, marginTop: 10, }} />


            <TextInput placeholder='Password' onChangeText={(t) => this.setState({ password: t })} secureTextEntry pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" />
          </View>
          
          <Button
            style={{ backgroundColor: "#ff2c55", borderRadius: 30, margin: 40, padding: 100 }}
            onPress={() => this.sign()}
          >
            <Text style={{ fontWeight: 'bold', color: "white", fontSize: 16 }}>
              Login Account
          </Text>
          </Button>
         
        </View>
      </View>
    );
  }
}

export default Login;
