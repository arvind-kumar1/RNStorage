import React, { Component } from 'react';
import { View, TextInput,Image,Text,TouchableOpacity } from 'react-native';
import firebase from 'react-native-firebase';
import {createAppContainer,createSwitchNavigator} from 'react-navigation';
import { Container, Content, Button,Header,Icon } from 'native-base';


class Ist extends Component {
  constructor(props) {
    super(props);
    this.state = {
        data:[],
       
        
      
    };
    this.arr=[];
  }
  getData(){
      firebase.firestore().collection('Data').get()
      .then((data) => {
          data.forEach((dat) => {
              
              this.arr.push({
                fullname:dat.data().fullname,

                uri:dat.data().uri})
          })
      })
     .then(() => {
       this.setState({abcd:''})
     })
     .catch((err) => {
       alert(err);
     })
      
  }
  // update(){
  //   firebase.firestore().collection('Images').doc().update({
  //     text:this.state.text
  //   })
    
  //   .then(() => {
  //     alert('Done')
  //   })
  //   .catch((err) => {
  //     alert(err)
  //   })
  // }
componentDidMount(){
    this.getData();
}
  render() {
    return (
    <Container>
      <Header style={{backgroundColor:'#ff2c55' ,justifyContent:'flex-start',paddingTop:10}}>
    
            <TouchableOpacity onPress={() => this.props.navigation.navigate('App')}>
          <Icon name='arrow-back'  />
         
          </TouchableOpacity>
           
      </Header>
      <Content>
        {this.arr.map((val,key) => {
         return (
          <View style={{flex:1}}>
            <TouchableOpacity>
            <View style={{flexDirection:'row', padding: 10, marginLeft: 5, }}>
            <Image source={{uri : val.uri, key}} style={{height:70 , width:70,borderRadius:50}}/>
            <Text style={{fontSize:20,fontWeight:'bold',marginTop: 10,marginLeft: 10,}}> {val.fullname} </Text>
            </View>
            </TouchableOpacity>
            
            
       
           
        </View>
          
         )
        })}
     
      </Content>
    </Container>
       
      
    );
  }
}

export default Ist;
