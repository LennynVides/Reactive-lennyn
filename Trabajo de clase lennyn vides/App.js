// Creado por Brandon Daniel Sanchez Santamaria.
import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

/* Importación de las pantallas */
import ColorCard from './src/screens/ColorCard';
import ColorsScreen from './src/screens/ColorsScreen';

// Crea un Stack Navigator
const Stack = createNativeStackNavigator();

// Pantalla de navegación en pila
function StackNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="Pantalla1"
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name="Pantalla1" component={ColorCard} />
      <Stack.Screen name="Pantalla2" component={ColorsScreen} />
    </Stack.Navigator>
  );
}

// Crea un Tab Navigator
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="ColorsScreen" component={ColorsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
