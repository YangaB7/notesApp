import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';  
import Home from './pages/home';
import Details from './pages/details';

const Stack = createNativeStackNavigator();

// const HomeScreen = ({navigation}) => {
//   return(
//     <View>
//       <TouchableOpacity onPress={() => navigation.navigate('Details')}>
//         <Text>hi</Text>
//       </TouchableOpacity>
//     </View>
//   )
// }

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator  initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} options={{headerRight: () => (
          <TouchableOpacity>
            <Text>Hit Me</Text>
          </TouchableOpacity>
        )}} />
        <Stack.Screen name="Details" component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
