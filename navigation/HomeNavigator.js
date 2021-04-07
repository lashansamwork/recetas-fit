
import 'react-native-gesture-handler';
import React from 'react';
import { View } from 'react-native';
import Colors from "../theme/colors"
import {createDrawerNavigator} from '@react-navigation/drawer';
import DrawerContent from './DrawerContent'
import BookStack from './NavigationStacks/BookStack'
import WishListStack from './NavigationStacks/WishListStack'
import NotesStack from './NavigationStacks/NotesStack';

const Drawer = createDrawerNavigator();


function HomeNavigator() {

  return (<Drawer.Navigator initialRouteName="La Cocina Squat Fit" drawerContent={(props) => <DrawerContent {...props} />}>
      <Drawer.Screen name="La Cocina Squat Fit" component={BookStack}/>
      <Drawer.Screen name="Lista de la Compra" component={WishListStack}/>
      <Drawer.Screen name="Notas" component={NotesStack}/>
    </Drawer.Navigator>);
}

export default HomeNavigator;
