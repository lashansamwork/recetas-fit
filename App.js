import 'react-native-gesture-handler';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import PrimaryNavigator from './navigation/PrimaryNavigator'
import {NavigationContainer} from '@react-navigation/native';




const Stack = createStackNavigator();

function App() {
  return (<NavigationContainer>
    <PrimaryNavigator />
  </NavigationContainer>
  );
}

export default App;
