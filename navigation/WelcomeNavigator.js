import 'react-native-gesture-handler';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/ValidationScreen';
import WelcomeScreen from '../screens/WelcomeScreen';

const Stack = createStackNavigator();

function WelcomeNavigator() {
  return (
      <Stack.Navigator initialRouteName="Recetas Fit">
        <Stack.Screen name="Recetas Fit" component={WelcomeScreen} />
        <Stack.Screen name="Validation" component={HomeScreen} />
      </Stack.Navigator>
  );
}

export default WelcomeNavigator;
