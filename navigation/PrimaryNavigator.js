import 'react-native-gesture-handler';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeNavigator from './HomeNavigator';
import WelcomeNavigator from './WelcomeNavigator'

const Stack = createStackNavigator();

function PrimaryNavigator() {
    return (
        <Stack.Navigator 
            initialRouteName="My Wishlist" 
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name="WelcomeNavigator" component={WelcomeNavigator} />
            <Stack.Screen name="HomeNavigator" component={HomeNavigator} />
        </Stack.Navigator>
    );
}

export default PrimaryNavigator;
