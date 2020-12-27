/**
 * @format
 */

import * as React from 'react';
import {AppRegistry, StatusBar} from 'react-native';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { name as appName } from './app.json';
import Colors from './theme/colors'
import App from './App';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: Colors.themeLightColors.primary,
    background: Colors.themeLightColors.background,
    text: Colors.themeLightColors.text
  },
};

export default function Main() {
  return (
    <PaperProvider theme={theme}>
      <StatusBar barStyle="light-content"/>
      <App />
    </PaperProvider>
  );
}

AppRegistry.registerComponent(appName, () => Main);
