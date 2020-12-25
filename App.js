import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from './screens/ValidationScreen';
import BookScreen from './screens/BooksScreen';
import WelcomeScreen from './screens/WelcomeScreen';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="BookScreen">
        <Stack.Screen name="Recetas Fit" component={WelcomeScreen} />
        <Stack.Screen name="Validation" component={HomeScreen} />
        <Stack.Screen name="Read" component={BookScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
