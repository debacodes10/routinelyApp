import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

import FontAwesome from "react-native-vector-icons/FontAwesome"
import MaetrialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"

export default function BottomNavigation() {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <FontAwesome name="home" size={30} color={"#EEE"} />
      </TouchableOpacity>
      <TouchableOpacity>
        <MaetrialCommunityIcons size={30} name="bookshelf" color={"#EEE"} />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: 20,
        backgroundColor: '#242526',
        width: '98%',
        alignSelf: 'center',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 12,
        paddingHorizontal: 24, 
        borderRadius: 100,
    }
})