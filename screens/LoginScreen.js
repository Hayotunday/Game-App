import { View, Text, TextInput } from 'react-native'
import React from 'react'
import { useFonts } from 'expo-font'

import SafeView from '../components/SafeView'
import LoginSVG from '../assets/images/misc/login.svg'
import { MaterialIcons } from '@expo/vector-icons'
import { Ionicons } from '@expo/vector-icons'

export default function LoginScreen() {
  const [fontloaded] = useFonts({
    RobotoMedium: require('../assets/fonts/Roboto-Medium.ttf'),
  })
  return (
    <SafeView style={{ flex: 1, justifyContent: 'center' }}>
      <View style={{ paddingHorizontal: 25 }}>

        <View style={{ alignItems: 'center' }}>
          <LoginSVG height={300} width={300} style={{ transform: [{ rotate: '-5deg' }] }} />
        </View>

        <Text style={{ fontFamily: 'RobotoMedium', fontSize: 28, fontWeight: '500', color: '#333 ', marginBottom: 30 }}>Login</Text>

        <View style={{ flexDirection: 'row', borderBottomColor: '#ccc', borderBottomWidth: 1, paddingBottom: 8, marginBottom: 25 }}>
          <MaterialIcons name='alternate-email' size={20} color='#666' style={{ marginRight: 5 }} />
          <TextInput placeholder='Email ID' style={{ flex: 1, paddingVertical: 0 }} keyboardType='email-address' />
        </View>

        <View style={{ flexDirection: 'row', borderBottomColor: '#ccc', borderBottomWidth: 1, paddingBottom: 8, marginBottom: 25 }}>
          <Ionicons name='ios-lock-closed-outline' size={20} color='#666' style={{ marginRight: 5 }} />
          <TextInput placeholder='Password' style={{ flex: 1, paddingVertical: 0 }} secureTextEntry={true} />
        </View>
      </View>
    </SafeView>
  )
}