import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import Welcome from '../components/welcome';

const Home = ({navigation}) => {
    return (
      <View style={{ flex: 1, alignItems: 'center'}}>
        <Welcome/>
        <TouchableOpacity onPress={()=> navigation.navigate('Details')}>
            <Text>HAi</Text>
        </TouchableOpacity>
      </View>
    );
  }

export default Home;