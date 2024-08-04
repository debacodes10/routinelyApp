import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ReminderBlock from '../Blocks/ReminderBlock'

export default function ReminderContainer() {
  return (
    <ScrollView style={styles.containerDimensions} 
    contentContainerStyle={styles.container} 
    showsVerticalScrollIndicator={false}>
      <ReminderBlock
      tag = {"Medicine"}
      time = {"08:15 AM"}
      taskName = {"COVID Vaccination"}
      priority = {"High"}
      assignee = {"Dr. Mukherjee"}
      accentColor = {"#102C57"}
      />
      <ReminderBlock
      tag = {"Grocery"}
      time = {"10:15 AM"}
      taskName = {"Buy Egg and Bread"}
      priority = {"Low"}
      assignee = {"BlinkIt"}
      accentColor = {"#0A6847"}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    container: {
        rowGap: 12,
    },
    containerDimensions: {
        marginTop: 12,
        paddingBottom: 108,
        height: '60%'
    }
})