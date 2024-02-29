import { View, Text, ScrollView } from 'react-native'
import React from 'react'

const Stories = () => {
  return (
    <View>
        <ScrollView 
            horizontal 
            showsHorizontalScrollIndicator={false}>
            <Text>Stories</Text>
        </ScrollView>
    </View>
  )
}

export default Stories