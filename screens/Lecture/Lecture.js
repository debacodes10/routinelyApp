import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'
import BottomNavigation from '../../components/Navigation/BottomNavigation'
import DaysContainer from '../../components/Containers/DaysContainer'

export default function Lecture() {

    const navigation = useNavigation()

  return (
    <SafeAreaView style={styles.container}>
      <Text style={[styles.text, {fontWeight: '500', fontSize: 16, color: '#CCC'}]}>Hello, Shaan</Text>
      <Text style={[styles.text, {fontSize: 40, fontWeight: '300', marginVertical: 8,}]}>Your Week</Text>
      <DaysContainer />
      <BottomNavigation active={"lecture"}/>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#18191A',
        height: '100%',
        paddingHorizontal: 8,
        marginBottom: 0
    },
    text: {
        fontFamily: 'Outfit',
        color: '#EEE'
    }
})