import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import BottomNavigation from '../../components/Navigation/BottomNavigation';
import { SafeAreaView } from 'react-native-safe-area-context';
import AntDesign from "react-native-vector-icons/AntDesign"
import { useNavigation } from '@react-navigation/native';
import LectureContainer from '../../components/Containers/LectureContainer';

export default function EachDay({ route }) {
  const navigation = useNavigation();
  const { day } = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerLeft}>
            <TouchableOpacity onPress={() => navigation.goBack()} activeOpacity={1}>
                <AntDesign name="left" size={40} color={"#EEE"}/>
            </TouchableOpacity>
            <Text style={[styles.text, {fontSize: 40, fontWeight: '300'}]}>{day}</Text>
        </View>
        <TouchableOpacity>
          <AntDesign name="pluscircle" size={35} color={"#EEE"} />
        </TouchableOpacity>
      </View>
      <LectureContainer />
      <BottomNavigation active={"lecture"} />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: '#18191A',
    paddingHorizontal: 8,
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerLeft: {
    display: 'flex',
    flexDirection: 'row',
    columnGap: 12,
    alignItems: 'center',
  },
  text: {
    color: '#EEE',
    fontFamily: 'Outfit'
  },
});
