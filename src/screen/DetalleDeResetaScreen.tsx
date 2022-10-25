import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function DetalleDeResetaScreen() {
  return (
    <View>
      <Text style={styles.textButtom}>DetalleDeResetaScreen</Text>
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