import React, { Component } from 'react';
import { View, Text, ScrollView, Dimensions } from 'react-native';
import { Container, Content, Header } from 'native-base';
class Uber extends Component {
    constructor(){
        super();
        let width = Dimensions.get('window').width - 60;
        let height = Dimensions.get('window').height
    }
    render() {
        return (
            <Container>
                <Header></Header>
                <Content padder>
                    <ScrollView
                        horizontal={true}
                    >
                        <View style={{ height:300, width:300, marginRight:20, backgroundColor:'red'}}></View>
                        <View style={{ height:300, width:300, marginRight:20, backgroundColor:'red'}}></View>
                        <View style={{ height:300, width:300, marginRight:20, backgroundColor:'red'}}></View>
                        <View style={{ height:300, width:300, marginRight:20, backgroundColor:'red'}}></View>   
                    </ScrollView>
                    <ScrollView 
                        horizontal={true}
                        style={{marginTop:50}}
                    >
                        <View style={{ height:300, width:300, marginRight:20, backgroundColor:'red'}}></View>
                        <View style={{ height:300, width:300, marginRight:20, backgroundColor:'red'}}></View>
                        <View style={{ height:300, width:300, marginRight:20, backgroundColor:'red'}}></View>
                        <View style={{ height:300, width:300, marginRight:20, backgroundColor:'red'}}></View>   
                    </ScrollView>
                    <ScrollView 
                        horizontal={true}
                        style={{marginTop:50}}
                    >
                        <View style={{ height:300, width:300, marginRight:20, backgroundColor:'red'}}></View>
                        <View style={{ height:300, width:300, marginRight:20, backgroundColor:'red'}}></View>
                        <View style={{ height:300, width:300, marginRight:20, backgroundColor:'red'}}></View>
                        <View style={{ height:300, width:300, marginRight:20, backgroundColor:'red'}}></View>   
                    </ScrollView>

                </Content>
            </Container>
        );
        }
}

export default Uber;
