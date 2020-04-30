import React, { Component } from 'react';
import {Image} from 'react-native';
import {Content, Container, Header, Text,Button,Footer,Spinner, View, Input, Icon, Item, Label} from 'native-base';
class weather extends Component {
  constructor(props) {
    super(props);
    this.state = {
        isloading:false,
        cityname:'',
        temp:0,
        imgurl:'http://openweathermap.org/img/wn/04d.png',
        mainname:''
    };
  }
  getWeather(){
      this.setState({isloading:true});
      let url = "https://api.openweathermap.org/data/2.5/weather?q="+this.state.cityname+"&appid=47fbd81d25c97dda698f2b71d18e57bf&units=metric";
      fetch(url)
      .then((response) => response.json())
      .then((res) => {
          if(res.cod == 404){
              alert('Sorry City not found');
              this.setState({isloading:false});
          }else{
              let imgurl = "http://openweathermap.org/img/wn/"+res.weather[0].icon+".png";
                this.setState({temp:res.main.temp,isloading:false, imgurl:imgurl,mainname:res.weather[0].main, cityname:''});

          }
      })
  }
  render() {
      if(this.state.isloading){
        return(
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            <Spinner color='red' />
            <Text>Loading...</Text>
            </View>
        )
      }
    return (
        <Container>
            <Header></Header>
            <Content padder>
                <Text style={{fontSize:30, textAlign:'center', marginVertical:20}}>Current Weather</Text>
                <Item>
                    <Label>City Name</Label>
                    <Input 
                        onChangeText={(text) => this.setState({cityname:text})}
                        value={this.state.cityname}
                    />
                </Item>
                <Button success block style={{marginTop:30}} 
                 disabled={false}
                 onPress={() => this.getWeather()}
                >
                    
                    <Text>Get Weather</Text>
                </Button>
                <Text style={{fontSize:100,marginVertical:30, textAlign:'center'}}>{this.state.temp}</Text>
                <Image 
                    source={{uri:this.state.imgurl}}
                    style={{width:50, height:50, alignSelf:'center'}}
                />
                <Text style={{textAlign:'center'}}>{this.state.mainname}</Text>
                <Button
                    onPress={() => this.props.navigation.navigate('App')}
                >
                    <Text>Back to Home</Text>
                </Button>
            </Content>
            
        </Container>
    );
  }
}

export default weather;
