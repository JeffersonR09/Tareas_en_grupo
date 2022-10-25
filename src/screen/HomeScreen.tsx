import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

export default function HomeScreen() {
  return (
    <View>
      <Text style={styles.textButtom}>HomeScreen</Text>
      
      
    </View>
  )
}

const styles = StyleSheet.create({
  textButtom:{
    fontSize: 30,
    textAlign: 'center',
    marginTop: '20%',
  },
 
 
})