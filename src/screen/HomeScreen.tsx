import { StyleSheet, Text, TouchableOpacity, View,SafeAreaView, TextInput } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { Feather } from '@expo/vector-icons';

export default function HomeScreen() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar style='auto'/>
      <View style={styles.Header}>
        <Text style={styles.textHeader}>
          Encontrar las mejores recetas para cocinar
        </Text>
        <View style={styles.viewinput}>
        <TextInput style={styles.textSearch}  placeholder='Search recipes' />
        <Feather style={styles.iconSearch} name="search" size={20} color="black" />
        
        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  Header:{
    padding: '8%',
    backgroundColor: '#f2f2',

  },
  textHeader:{
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: '4%',
  },
  viewinput:{
    

  },
  textSearch:{
    height: '33%',
    textAlign:'justify',
    borderColor:'#CDCDCD',
    borderWidth: 1,
    backgroundColor:'#fff',
    borderRadius: 8,
    
    

  },
  iconSearch:{
   top: '-5%',
   left: '5%',
  },
  

 
})