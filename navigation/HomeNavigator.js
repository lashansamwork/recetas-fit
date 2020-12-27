
import 'react-native-gesture-handler';
import React, { useCallback } from 'react';
import Colors from "../theme/colors"
import {createDrawerNavigator} from '@react-navigation/drawer';

import BookStack from './NavigationStacks/BookStack'
import WishListStack from './NavigationStacks/WishListStack'

const Drawer = createDrawerNavigator();


function HomeNavigator() {

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



  return (<Drawer.Navigator initialRouteName="Book Screen">
      <Drawer.Screen name="Book Screen" component={BookStack}/>
      <Drawer.Screen name="My Wishlist" component={WishListStack}/>
    </Drawer.Navigator>);
}

export default HomeNavigator;
