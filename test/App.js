import React from 'react';
// import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Navigate from './navigation/Navigate';
import WelcomePage from './components/WelcomePage';
import SendEmail from './components/SendEmail';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
       <Navigate />
    </NavigationContainer>
  );
};



export default App;
