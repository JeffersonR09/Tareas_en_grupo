import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function GuardadaScreen() {
  return (
    <View>
      <Text style={styles.textButtom} >GuardadaScreen</Text>
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