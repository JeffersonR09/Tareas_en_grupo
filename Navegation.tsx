import * as React from 'react';
import { StyleSheet, TouchableOpacity,Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons, Ionicons,FontAwesome5 } from '@expo/vector-icons';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//vistas Screen
import HomeScreen from './src/screen/HomeScreen';
import DetalleDeResetaScreen from './src/screen/DetalleDeResetaScreen';
import GuardadaScreen from './src/screen/GuardadaScreen';
import PerfilScreen from './src/screen/PerfilScreen';
import StackScreen from './src/screen/StackScreen';

const HomeStackNavigator = createNativeStackNavigator();

function myStack() {
  return(
    <HomeStackNavigator.Navigator 
    initialRouteName='HomeScreen'
    >
      <HomeStackNavigator.Screen
        name='HomeScreen'
        component={HomeScreen}
       />

      <HomeStackNavigator.Screen
      name='Stack'
      component={StackScreen}
      />

    </HomeStackNavigator.Navigator>

  )
}


const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
    initialRouteName='Home'
    screenOptions={{
      tabBarActiveTintColor: '#E14040',
    }}
    >
      <Tab.Screen 
      name='Home' 
      component={HomeScreen}
      options={{
        tabBarLabel:'Home',
        tabBarIcon: ({color, size}) => (
          <MaterialCommunityIcons name="home-minus-outline" size={size} color={color} />
        ),
        headerShown: false,
      }}
      />
      <Tab.Screen 
      name='Detalles de reseta' 
      component={DetalleDeResetaScreen}
      options={{
        tabBarLabel:'Detalles de reseta',
        tabBarIcon: ({color, size}) => (
          <MaterialCommunityIcons name="bookmark-minus-outline" size={size} color={color} />
        ),
        headerShown: false,
      }}
      />
      <Tab.Screen 
      name='Guardadas' 
      component={GuardadaScreen}
      options={{
        tabBarLabel:'Notificaciones',
        tabBarIcon: ({color, size}) => (
          <Ionicons name="notifications-outline" size={size} color={color} />
        ),
        headerShown: false,
    }}
      />
      <Tab.Screen 
      name='Perfil' 
      component={PerfilScreen}
      options={{
        tabBarLabel:'Perfil',
        tabBarIcon: ({color, size}) => (
          <FontAwesome5 name="user" size={size} color={color} />
        ),
        headerShown: false,
        
      }}
      />
    </Tab.Navigator>
  );
}

export default function Navegation(){
  return (
    <NavigationContainer>
      <MyTabs />
      <TouchableOpacity style={styles.bottonPlus} >
        <Text style={styles.textPlus} >
          +
        </Text>
      </TouchableOpacity>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  bottonPlus:{
    position: 'absolute',
    height: '5%',
    width: '11%',
    borderRadius: 30,
    backgroundColor: '#E14040',
    justifyContent: 'center',
    top:'92%',
    left: '45%'

  },
  textPlus:{
    textAlign: 'center',
    color: '#fff',
    fontSize: 20,
    

  },
})