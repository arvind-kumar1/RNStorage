import React, { Component } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import { Container, Header, Content, Form, Item, Input, Spinner, Icon, Button } from 'native-base';
import firebase from 'react-native-firebase';
import ImagePicker from 'react-native-image-picker';
import RNFetchBlob from 'rn-fetch-blob';


const options = {
  title: 'Select Avatar',

  storageOptions: {
    skipBackup: true,
    path: 'images',
    isUploading: false,
    all: {}
  },
};

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
        fullname:'',
        password:'',
        email:'',
      
      uri: 'https://kiittnp.in/ea19b38134d463acc8c7b66744a481847ab4b/assets/img/user.png',



    };
  }
  openpicker() {
    ImagePicker.launchImageLibrary(options, (response) => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        this.setState({ uri: response.uri });
        const source = { uri: response.uri, all: response };
        this.makeBlob(response.uri, response.fileName, response.type)
        9
        // You can also display the image using data:
        // const source = { uri: 'data:image/jpeg;base64,' + response.data };

        this.setState({
          avatarSource: source,
        });
      }
    });
  }
  makeBlob(uri, fileName, type) {

    
    const image = uri
    const Blob = RNFetchBlob.polyfill.Blob
    const fs = RNFetchBlob.fs
    window.XMLHttpRequest = RNFetchBlob.polyfill.XMLHttpRequest
    window.Blob = Blob
    const imageId = new Date().getTime();
    const imageRef = firebase.storage().ref(fileName)
    let uploadBlob = null

    fs.readFile(image, 'base64')
      .then((data) => {
        return Blob.build(data, { type: `${type};BASE64` })
      })
      .then((blob) => {
        uploadBlob = blob
        return imageRef.put(blob._ref, { contentType: type })
      })
      .then(() => {
        uploadBlob.close()
        return imageRef.getDownloadURL()
      })
      .then((url) => {
        firebase.auth().createUserWithEmailAndPassword(this.state.email,this.state.password)
        .then(() => {
          firebase.firestore().collection('Data').add({
            uri: url,
            fullname:this.state.fullname,
            email:this.state.email,
            password:this.state.password
            
          })
            .then(() => {
              alert('User Created')
              this.props.navigation.navigate('Ist')
            })
            .catch((err) => {
              alert(err)
            })
        })
       
        this.setState({ uri: url, isUploading: false })

      })
      .catch((error) => {
        console.log(error);
        this.setState({ isUploading: false })

      })

  }
ii(){
  alert('Done')
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
          
          <View style={{
            alignItems: 'center', marginTop: 50, height: 85, width: 85, borderRadius: 50, backgroundColor: 'white', shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,

            elevation: 5,
          }}>
            <TouchableOpacity onPress={() => this.openpicker()}>
              <Image
                style={{ width: 80, height: 80, borderRadius: 50, marginTop: 1 }}
                source={{ uri: this.state.uri }}
              />
            </TouchableOpacity>
          </View>
          {/* <Text> App </Text> */}
          {/* <TextInput placeholder='Type a Comment' onChangeText={(t) => this.setState({text:t})}/> */}

          {/* <Text>{this.state.uri}</Text> */}

          <View style={{ flexDirection: 'row', padding: 10 }}>
            <Icon name='person' style={{ marginTop: 8, marginRight: 10, marginTop: 10, }} />


            <TextInput placeholder='Full Name' onChangeText={(t) => this.setState({ fullname: t })} />
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
            onPress={() => this.makeBlob()}
          >
            <Text style={{ fontWeight: 'bold', color: "white", fontSize: 16 }}>
              Create Account
          </Text>
          </Button>
          <TouchableOpacity>
            <Text style={{ alignSelf: 'center' }}>
              I ready have an account ?
          </Text>
          </TouchableOpacity>
        </View>
      </View>
         );
        }
      }
      export default SignUp;