import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'
import BottomNavigation from '../../components/Navigation/BottomNavigation'

export default function Account() {

    const navigation = useNavigation()

  return (
    <SafeAreaView style={styles.container}>
      <Text style={[styles.text, {fontWeight: '500', fontSize: 16, color: '#CCC'}]}>Hello, Shaan</Text>
      <BottomNavigation active={"account"}/>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#18191A',
        height: '100%',
        paddingHorizontal: 8,
    },
    text: {
        fontFamily: 'Outfit',
        color: '#EEE'
    }
})