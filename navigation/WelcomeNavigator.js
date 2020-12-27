import 'react-native-gesture-handler';
import React, { useMemo } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/ValidationScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import Colors from '../theme/colors'

const Stack = createStackNavigator();

function WelcomeNavigator() {
  const getHeaderOptions = useMemo(() => {
    const options = {
      headerStyle: {
        backgroundColor: Colors.themeLightColors.primary,
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }

    return options;
  }, [])

  return (
    <Stack.Navigator initialRouteName="Recetas Fit">
      <Stack.Screen name="Recetas Fit" component={WelcomeScreen} options={getHeaderOptions} />
      <Stack.Screen name="Validation" component={HomeScreen} options={getHeaderOptions} />
    </Stack.Navigator>
  );
}

export default WelcomeNavigator;
