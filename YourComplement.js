import {useNetInfo} from "@react-native-community/netinfo";

const YourComplement = () => {
  const netInfo = useNetInfo();
 
  return (
    <View>
      <Text>Type: {netInfo.type}</Text>
      <Text>Is Connected? {netInfo.isConnected.toString()}</Text>
    </View>
  );
};
