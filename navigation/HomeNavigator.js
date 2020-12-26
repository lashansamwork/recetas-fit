
        import 'react-native-gesture-handler';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from '../screens/ValidationScreen';
import BookScreen from '../screens/BooksScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import WishlistScreen from '../screens/WishlistScreen';

const Stack = createStackNavigator();

function HomeNavigator() {
  return (
      <Stack.Navigator initialRouteName="Read">
        <Stack.Screen name="Read" component={BookScreen} />
        <Stack.Screen name="My Wishlist" component={WishlistScreen} />
      </Stack.Navigator>
  );
}

export default HomeNavigator;
