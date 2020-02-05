import React, { Component } from 'react';
import { View, Text } from 'react-native';
import {Button} from 'native-base';
class Page1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
        <View style={{ backgroundColor: "#4c4f4f", flex: 1 }}>
        <View style={{ backgroundColor: "white", borderRadius: 20, paddingLeft: 10, flex: 1 }}>
        <Button
            style={{ backgroundColor: "#ff2c55", borderRadius: 30, margin: 40, padding: 100 }}
            onPress={() => this.props.navigation.navigate('Login')}
          >
            <Text style={{ fontWeight: 'bold', color: "white", fontSize: 16 }}>
              Login Account
          </Text>
          </Button>
          <Button
            style={{ backgroundColor: "#ff2c55", borderRadius: 30, margin: 40, padding: 100 }}
            onPress={() => this.props.navigation.navigate('SignUp')}
          >
            <Text style={{ fontWeight: 'bold', color: "white", fontSize: 16 }}>
              Create Account
          </Text>
          </Button>
          </View>
      </View>
    );
  }
}

export default Page1;
