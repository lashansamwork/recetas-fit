import 'react-native-gesture-handler';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import PrimaryNavigator from './navigation/PrimaryNavigator'
import { NavigationContainer } from '@react-navigation/native';
import { AuthContextProvider } from './context-store/AuthContextProvider';
import { PageContextProvider } from './context-store/PageContextProvider';




const Stack = createStackNavigator();

function App() {
  return (<AuthContextProvider>
    <PageContextProvider>
      <NavigationContainer>
        <PrimaryNavigator />
      </NavigationContainer>
    </PageContextProvider>
  </AuthContextProvider>);
}

export default App;
