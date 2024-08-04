import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LectureBlock from '../Blocks/LectureBlock'

export default function LectureContainer() {
  return (
    <ScrollView style={styles.containerDimensions} 
    contentContainerStyle={styles.container} 
    showsVerticalScrollIndicator={false}>
      <LectureBlock
      lectureCode = {"21CYB101J"}
      startTime = {"08:15 AM"}
      endTime = {"10:15 AM"}
      lectureName = {"Inorganic Chemistry"}
      priority = {"High"}
      professor = {"Prof. Sengupta"}
      accentColor = {"#E25E3E"}
      />
      <LectureBlock
      lectureCode = {"21COA203J"}
      startTime = {"10:45 AM"}
      endTime = {"12:45 PM"}
      lectureName = {"Computer Architecture"}
      priority = {"Low"}
      professor = {"Prof. Das"}
      accentColor = {"#006769"}
      />
      <LectureBlock
      lectureCode = {"21EEE202J"}
      startTime = {"01:15 PM"}
      endTime = {"03:15 PM"}
      lectureName = {"MOSFET and SCRs"}
      priority = {"Medium"}
      professor = {"Prof. Bagchi"}
      accentColor = {"#1679AB"}
      />
      <LectureBlock
      lectureCode = {"21CYB101J"}
      startTime = {"08:15 AM"}
      endTime = {"10:15 AM"}
      lectureName = {"Inorganic Chemistry"}
      priority = {"High"}
      professor = {"Prof. Sengupta"}
      accentColor = {"#E25E3E"}
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