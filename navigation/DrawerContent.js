import { View, Text } from "react-native"
import React from 'react';
import {
    DrawerItemList,
    DrawerItem,
    DrawerContentScrollView,
} from '@react-navigation/drawer';
import Colors from '../theme/colors'

function DrawerContent(props) {
    console.log("🚀 ~ file: DrawerContent.js ~ line 10 ~ DrawerContent ~ props", props)

    const {state} = props
    const {routes, index} = state; //Not sure about the name of index property. Do check it out by logging the 'state' variable.
    const focusedRoute = routes[index];
    console.log("🚀 ~ file: DrawerContent.js ~ line 16 ~ DrawerContent ~ focusedRoute", focusedRoute)

    return (
        <DrawerContentScrollView {...props}>
            <DrawerItem 
                label="Book Home"
                focused={focusedRoute.name ==="Book Screen"}
                onPress={()=>props.navigation.navigate('Book Screen')}
                activeTintColor={Colors.themeLightColors.primary}
            />
            <DrawerItem 
                label="My WishList"
                focused={focusedRoute.name ==="My Wishlist"}
                onPress={()=>props.navigation.navigate('My Wishlist')}
                activeTintColor={Colors.themeLightColors.primary}
            />
            {/* <DrawerItemList {...props} activeTintColor={Colors.themeLightColors.primary}/> */}
        </DrawerContentScrollView>
    );
}

export default DrawerContent;