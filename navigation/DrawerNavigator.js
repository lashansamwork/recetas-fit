
import 'react-native-gesture-handler';
import React, { useCallback } from 'react';
import { View } from 'react-native'
import Colors from "../theme/colors"
import {createDrawerNavigator} from '@react-navigation/drawer';
import BookScreen from '../screens/BooksScreen';
import WishlistScreen from '../screens/WishlistScreen';
import { Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  const getHeaderOptions = useCallback(() => {
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


  return (<View></View>);
}

export default DrawerNavigator;
