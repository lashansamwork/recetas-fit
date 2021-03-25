import 'react-native-gesture-handler';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeNavigator from './HomeNavigator';
import WelcomeNavigator from './WelcomeNavigator';
import {AuthContext} from '../context-store/AuthContextProvider';
const Stack = createStackNavigator();

function PrimaryNavigator() {
  const {isSignout} = React.useContext(AuthContext);

  return (
    <Stack.Navigator
      initialRouteName="WelcomeNavigator"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="WelcomeNavigator" component={WelcomeNavigator} />
      <Stack.Screen name="HomeNavigator" component={HomeNavigator} />
    </Stack.Navigator>
  );
}

export default PrimaryNavigator;
