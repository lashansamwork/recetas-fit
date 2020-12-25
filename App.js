import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from './screens/ValidationScreen';
import BookScreen from './screens/BooksScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import WishlistScreen from './screens/WishlistScreen';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="My Wishlist">
        <Stack.Screen name="Recetas Fit" component={WelcomeScreen} />
        <Stack.Screen name="Validation" component={HomeScreen} />
        <Stack.Screen name="Read" component={BookScreen} />
        <Stack.Screen name="My Wishlist" component={WishlistScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
