import React from 'react'

import ProfileScreen from '../screens/ProfileScreen';
import MessagesScreen from '../screens/MessagesScreen';
import MomentsScreen from '../screens/MomentsScreen';
import SettingsScreen from '../screens/SettingsScreen';

import TabNavigator from './TabNavigator';

import { Ionicons } from '@expo/vector-icons';

import CustomDrawer from '../components/CustomDrawer';

import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

export default function AppStack() {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawer {...props} />}
      useLegacyImplementation={true}
      screenOptions={{
        headerShown: false,
        drawerActiveBackgroundColor: '#AA18EA',
        drawerActiveTintColor: '#fff',
        drawerInactiveTintColor: '#333',
        drawerLabelStyle: {
          marginLeft: -25,
          fontSize: 15
        },
      }}>
      <Drawer.Screen component={TabNavigator} name='Home' options={{
        drawerIcon: ({ color }) => (
          <Ionicons name='home-outline' size={22} color={color} />
        )
      }} />
      <Drawer.Screen component={ProfileScreen} name='Profile' options={{
        drawerIcon: ({ color }) => (
          <Ionicons name='person-outline' size={22} color={color} />
        )
      }} />
      <Drawer.Screen component={MessagesScreen} name='Messages' options={{
        drawerIcon: ({ color }) => (
          <Ionicons name='chatbox-ellipses-outline' size={22} color={color} />
        )
      }} />
      <Drawer.Screen component={MomentsScreen} name='Moments' options={{
        drawerIcon: ({ color }) => (
          <Ionicons name='timer-outline' size={22} color={color} />
        )
      }} />
      <Drawer.Screen component={SettingsScreen} name='Settings' options={{
        drawerIcon: ({ color }) => (
          <Ionicons name='settings-outline' size={22} color={color} />
        )
      }} />
    </Drawer.Navigator>
  )
}