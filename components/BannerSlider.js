import { View, Text, Image } from 'react-native'
import React from 'react'

export default function BannerSlider({ data }) {
  return (
    <View style={{ marginHorizontal: 5 }}>
      <Image source={data.image} style={{ height: 130, width: 250, borderRadius: 10 }} />
    </View>
  )
}