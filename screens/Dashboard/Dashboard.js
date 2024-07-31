import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'
import BottomNavigation from '../../components/Navigation/BottomNavigation'

export default function Dashboard() {

    const navigation = useNavigation()

  return (
    <SafeAreaView style={styles.container}>
      <Text style={[styles.text, {fontWeight: '500', fontSize: 16, color: '#CCC'}]}>Hello, Shaan</Text>
      <Text style={[styles.text, {fontWeight: '300', fontSize: 34, marginVertical: 12}]}>
        You have 3 remaining classes and 2 pending tasks for today.
      </Text>
      <BottomNavigation />
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