import { View, Text } from "react-native"
import React, { useContext} from 'react';
import {
    DrawerItemList,
    DrawerItem,
    DrawerContentScrollView,
} from '@react-navigation/drawer';
import { Drawer } from 'react-native-paper';
import Colors from '../theme/colors'
import layout from "../theme/layout";
import { PageContext } from "../context-store/PageContextProvider"

function DrawerContent(props) {

    const {state} = props
    const {routes, index} = state; //Not sure about the name of index property. Do check it out by logging the 'state' variable.
    const focusedRoute = routes[index];
    const { changePage } = React.useContext(PageContext);

    return (
        <DrawerContentScrollView {...props}>
            <DrawerItem 
                label="Book Home"
                focused={focusedRoute.name ==="Book Screen"}
                onPress={()=>props.navigation.navigate('Book Screen')}
                activeTintColor={Colors.themeLightColors.primary}
            />
            <View style={{ paddingLeft: layout.padding.medium }}>
                <Drawer.Item
                    label="Information"
                    active={false}
                    onPress={() =>{
                        changePage(5);
                        props.navigation.closeDrawer();
                    }}
                />
                <Drawer.Item
                    label="Section 1"
                    active={false}
                    onPress={() =>{
                        changePage(10);
                        props.navigation.closeDrawer();
                    }}
                />
                <Drawer.Item
                    label="Section 2"
                    active={false}
                    onPress={() =>{
                        changePage(15);
                        props.navigation.closeDrawer();
                    }}
                />
                <Drawer.Item
                    label="Section 3"
                    active={false}
                    onPress={() =>{
                        changePage(20);
                        props.navigation.closeDrawer();
                    }}
                />
            </View>
            <DrawerItem 
                label="My WishList"
                focused={focusedRoute.name ==="My Wishlist"}
                onPress={()=>props.navigation.navigate('My Wishlist')}
                activeTintColor={Colors.themeLightColors.primary}
            />
        </DrawerContentScrollView>
    );
}

export default DrawerContent;