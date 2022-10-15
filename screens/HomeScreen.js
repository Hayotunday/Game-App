import React, { useState } from 'react'
import { View, Text, ScrollView, ImageBackground, TextInput, TouchableOpacity } from 'react-native';
import { useFonts } from 'expo-font';
import SafeView from '../components/SafeView';
import AppLoading from 'expo-app-loading';
import { Ionicons } from '@expo/vector-icons';
import Carousel from '../components/Carousel';
import { freeGames, paidGames, sliderData } from '../model/data'
import BannerSlider from '../components/BannerSlider';
import CustomSwitch from '../components/CustomSwitch';
import ListItem from '../components/ListItem';

export default function HomeScreen({ navigation }) {
  const [gamesTab, setGamesTab] = useState(1)
  const renderBanner = ({ item, index }) => {
    return <BannerSlider data={item} />
  }

  const onSelectSwitch = (value) => {
    setGamesTab(value)
  }

  const [fontsLoaded] = useFonts({
    'Roboto-Medium': require('../assets/fonts/Roboto-Medium.ttf'),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <SafeView style={{ flex: 1, backgroundColor: '#fff' }}>
      <ScrollView style={{ padding: 20 }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10, alignItems: 'center' }}>
          <Text style={{ fontSize: 16, fontweight: 'Roboto-Medium' }}>Hello John Doe</Text>
          <TouchableOpacity onPress={() => { navigation.openDrawer() }}>
            <ImageBackground source={require('../assets/images/user-profile.jpg')} style={{ width: 35, height: 35 }} imageStyle={{ borderRadius: 25 }} />
          </TouchableOpacity>
        </View>

        <View style={{ flexDirection: 'row', borderColor: '#C6C6C6', borderWidth: 1, borderRadius: 8, paddingHorizontal: 10, paddingVertical: 5, alignItems: 'center' }}>
          <Ionicons name="search-outline" size={20} color='#C6C6C6' style={{ marginRight: 5 }} />
          <TextInput placeholder='Search' />
        </View>

        <View style={{ marginVertical: 10, flexDirection: 'row', justifyContent: 'space-between', marginBottom: 15 }}>
          <Text style={{ fontSize: 16, fontweight: 'Roboto-Medium' }}>Upcoming Games</Text>
          <TouchableOpacity onPress={() => { }}>
            <Text style={{ color: '#0AADA8' }}>See all</Text>
          </TouchableOpacity>
        </View>

        <Carousel data={sliderData} renderItem={renderBanner} />

        <View style={{ marginVertical: 20 }}>
          <CustomSwitch selectionMode={1} option1='Free to Play' option2='Paid games' onSelectSwitch={onSelectSwitch} />
        </View>

        {gamesTab == 1 &&
          freeGames.map(item => {
            return <ListItem
              key={item.id}
              title={item.title}
              subTitle={item.subtitle}
              photo={item.poster}
              isFree={item.isFree}
              onPress={() =>
                navigation.navigate('GameDetails', {
                  title: item.title,
                  id: item.id
                })
              }
            />
          })
        }
        {gamesTab == 2 &&
          paidGames.map(item => {
            return <ListItem
              key={item.id}
              title={item.title}
              subTitle={item.subtitle}
              photo={item.poster}
              price={item.price}
              isFree={item.isFree}
              onPress={() =>
                navigation.navigate('GameDetails', {
                  title: item.title,
                  id: item.id
                })
              }
            />
          })
        }
      </ScrollView>
    </SafeView>
  );
}