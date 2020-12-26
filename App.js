import 'react-native-gesture-handler';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import PrimaryNavigator from './navigation/PrimaryNavigator'
import {NavigationContainer} from '@react-navigation/native';
import { AuthContextProvider } from './context-store/AuthContextProvider';




const Stack = createStackNavigator();

function App() {
  return (<AuthContextProvider>
    <NavigationContainer>
      <PrimaryNavigator />
    </NavigationContainer>
  </AuthContextProvider>);
}

export default App;
