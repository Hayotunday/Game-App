import React, { useEffect, useCallback } from 'react'
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import SafeView from '../components/SafeView';
import GamingImg from '../assets/images/misc/gaming.svg';
// import AppLoading from 'expo-app-loading';
import { MaterialIcons } from '@expo/vector-icons'
import * as SplashScreen from 'expo-splash-screen';

export default function OnBoardingScreen({ navigation }) {
  // const [fontsLoaded] = useFonts({
  //   RobotoMediumItalic: require('../assets/fonts/Roboto-MediumItalic.ttf'),
  // });

  // useEffect(() => {
  //   async function prepare() {
  //     await SplashScreen.preventAutoHideAsync();
  //   }
  //   prepare();
  // }, []);

  // const onLayoutRootView = useCallback(async () => {
  //   if (fontsLoaded) {
  //     await SplashScreen.hideAsync();
  //   }
  // }, [fontsLoaded]);

  // if (!fontsLoaded) {
  //   return null;
  // }

  // onLayout={onLayoutRootView}

  return (
    <SafeView style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#fff'
    }}>
      <View style={{ marginTop: 20 }}>
        <Text style={{ fontSize: 30, fontWeight: 'bold', color: '#20315f' }}>GAMEON</Text>
      </View>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <GamingImg width={300} height={300} style={{ transform: [{ rotate: '-15deg' }] }} />
      </View>
      <TouchableOpacity style={{
        backgroundColor: '#AD40AF',
        padding: 20,
        width: '90%',
        borderRadius: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 50
      }}
        onPress={() => navigation.navigate('Login')}
      >
        <Text style={{ fontWeight: 'bold', fontSize: 18, color: '#fff', fontFamily: '' }}>Let's Begin</Text>
        <MaterialIcons name='arrow-forward-ios' size={22} color='#fff' />
      </TouchableOpacity>
    </SafeView>
  );
}
