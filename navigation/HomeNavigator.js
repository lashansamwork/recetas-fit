
import 'react-native-gesture-handler';
import React from 'react';
import Colors from "../theme/colors"
import {createDrawerNavigator} from '@react-navigation/drawer';
import DrawerContent from './DrawerContent'
import BookStack from './NavigationStacks/BookStack'
import WishListStack from './NavigationStacks/WishListStack'

const Drawer = createDrawerNavigator();


function HomeNavigator() {

  return (<Drawer.Navigator initialRouteName="Book Screen" drawerContent={(props) => <DrawerContent {...props} />}>
      <Drawer.Screen name="Book Screen" component={BookStack}/>
      <Drawer.Screen name="My Wishlist" component={WishListStack}/>
    </Drawer.Navigator>);
}

export default HomeNavigator;
