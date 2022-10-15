import { View, Text } from 'react-native'
import React from 'react'

import OnBoardingScreen from '../screens/OnBoardingScreen';
import LoginScreen from '../screens/LoginScreen'

import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function AuthStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen component={OnBoardingScreen} name='OnBoarding' />
      <Stack.Screen component={LoginScreen} name='Login' />
    </Stack.Navigator>
  )
}