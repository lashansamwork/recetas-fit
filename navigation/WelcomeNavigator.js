import 'react-native-gesture-handler';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/ValidationScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import Colors from '../theme/colors'

const Stack = createStackNavigator();

const getHeaderOptions = (title) => {
  const options = {
    title: title,
    headerStyle: {
      backgroundColor: Colors.themeLightColors.primary,
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  }

  return options;
}

function WelcomeNavigator() {
  return (
      <Stack.Navigator initialRouteName="Recetas Fit">
        <Stack.Screen name="Recetas Fit" component={WelcomeScreen} options={()=>getHeaderOptions()}/>
        <Stack.Screen name="Validation" component={HomeScreen} options={()=>getHeaderOptions()}/>
      </Stack.Navigator>
  );
}

export default WelcomeNavigator;
