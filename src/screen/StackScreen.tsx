import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function StackScreen() {
  return (
    <View style={styles.textButtom}>
      <Text>StackScreen</Text>
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