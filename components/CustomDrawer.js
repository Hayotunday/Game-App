import { View, Text, ImageBackground, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'

import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

export default function CustomDrawer(props) {
  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props} contentContainerStyle={{ backgroundColor: '#8200D6' }}>
        <ImageBackground source={require('../assets/images/menu-bg.jpeg')} style={{ padding: 20 }}>
          <Image source={require('../assets/images/user-profile.jpg')} style={{ height: 60, width: 60, borderRadius: 30, marginBottom: 5 }} />
          <Text style={{ color: '#fff', fontSize: 18, marginBottom: 5 }}>John Doe</Text>
          <View style={{ flexDirection: 'row' }}>
            <Text style={{ color: '#fff', marginRight: 5 }}>280 Coins</Text>
            <FontAwesome5 name="coins" size={14} color="#fff" />
          </View>
        </ImageBackground>
        <View style={{ flex: 1, backgroundColor: '#fff', paddingTop: 5 }}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>

      <View style={{ padding: 15, borderTopWidth: 1, borderTopColor: '#CCC' }}>
        <TouchableOpacity onPress={() => { }} style={{ paddingVertical: 8 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Ionicons name="share-social-outline" size={22} />
            <Text style={{ fontSize: 15, marginLeft: 5 }}>
              Tell a Friend
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => { }} style={{ paddingVertical: 8 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Ionicons name="exit-outline" size={22} />
            <Text style={{ fontSize: 15, marginLeft: 5 }}>
              Sign Out
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  )
}