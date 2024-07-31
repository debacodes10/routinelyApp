import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'

export default function Weekdays() {

    const navigation = useNavigation()

  return (
    <SafeAreaView style={styles.container}>
      <Text style={[styles.text, {fontWeight: '500', fontSize: 16, color: '#CCC'}]}>Hello, Shaan</Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#18191A',
        height: '100%',
        paddingHorizontal: 4,
    },
    text: {
        fontFamily: 'Outfit',
        color: '#EEE'
    }
})