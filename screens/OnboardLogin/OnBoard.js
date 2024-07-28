import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

export default function OnBoard() {

  const navigation = useNavigation()

  return (
    <ImageBackground source={require("../../assets/images/onBoard.webp")} resizeMode='cover'
      style={styles.imageBody}>
      <View style={styles.contentArea}>
        <Text style={[styles.text, {fontSize: 24, fontWeight: '300'}]}>Let's work together</Text>
        <Text style={[styles.text, {fontSize: 18, fontWeight: '400', textAlign: 'center'}]}>Stay on top of Uni life and make every moment count.</Text>
        <TouchableOpacity style={styles.positiveBtn} onPress={()=>navigation.navigate("Register")}>
          <Text style={[styles.text, {fontSize: 24, fontWeight: '400' }]}>Let's Start</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  imageBody: {
    height: '100%',
    width: '100%',
    alignItems: 'center'
  },
  contentArea: {
    position: 'absolute',
    backgroundColor: '#000',
    opacity: 0.95,
    bottom: 0,
    width: '100%',
    alignItems: 'center',
    rowGap: 24,
    paddingHorizontal: 16,
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    paddingVertical: 36,
  },
  positiveBtn: {
    backgroundColor: '#379777',
    width: '100%',
    alignItems: 'center',
    borderRadius: 25,
    paddingVertical: 6,
  },
  text: {
    fontFamily: 'Outfit',
    color: '#FFF'
  }
})