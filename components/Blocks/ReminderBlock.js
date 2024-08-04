import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ReminderBlock({tag, time, taskName, priority, assignee, accentColor}) {
  return (
    <View style={[styles.container, {backgroundColor: `${accentColor}`}]}>
      <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text style={[styles.text, {fontWeight: '600', fontSize: 16,}]}>{tag}</Text>
        <Text style={[styles.text, {fontWeight: '600', fontSize: 16,}]}>{time}</Text>
      </View>
      <Text style={[styles.text, {fontWeight: '300', fontSize: 28, marginVertical: 12,}]}>{taskName}</Text>
      <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
        <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', columnGap: 12,}}>
          <Text style={[styles.text, styles.borderedText, {fontWeight: '600', fontSize: 16,}]}>In 25 mins</Text>
          <Text style={[styles.text, styles.borderedText, {fontWeight: '600', fontSize: 16,}]}>{priority}</Text>
        </View>
        <Text style={[styles.text, {fontWeight: '400', fontSize: 20, textDecorationLine: 'underline'}]}>{assignee}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#E25E3E',
    borderRadius: 16,
    paddingHorizontal: 16,
    paddingVertical: 20,
  },
  text: {
    fontFamily: 'Outfit',
    color: '#EEE'
  },
  borderedText: {
    borderWidth: 1.5,
    borderColor: '#EEE',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  }
})