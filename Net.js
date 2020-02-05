import {useNetInfo} from "@react-native-community/netinfo";
import React from 'react';
import {View,Text} from 'react-native';
const Net = () => {
  const netInfo = useNetInfo();
if(netInfo.isConnected == true){
  alert("Online")
}else{
  alert("Offline")

}
  
  return (
    <View>
      <Text>Type: {netInfo.type}</Text>
      <Text>Is Connected? {netInfo.isConnected.toString()}</Text>
    </View>
  );
};
export default Net;