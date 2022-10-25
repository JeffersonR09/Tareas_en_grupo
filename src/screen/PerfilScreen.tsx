import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function PerfilScreen() {
  return (
    <View>
      <Text style={styles.textButtom}>Perfil</Text>
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