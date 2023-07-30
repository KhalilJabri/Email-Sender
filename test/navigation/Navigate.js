import React from 'react';
import { View, Text } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import WelcomePage from '../components/WelcomePage';
import SendEmail from '../components/SendEmail';

const Stack = createNativeStackNavigator();

const Navigate = () => {
  return (
    <Stack.Navigator initialRouteName='welcome-page' screenOptions={{headerShown: false}}>
        <Stack.Screen name='welcome-page' component={WelcomePage} />
        <Stack.Screen name='send-mail' component={SendEmail} />
    </Stack.Navigator>
  )
}

export default Navigate;