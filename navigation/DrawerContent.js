import { View, StyleSheet } from "react-native"
import React, { useContext } from 'react';
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

    const { state } = props
    const { routes, index } = state; //Not sure about the name of index property. Do check it out by logging the 'state' variable.
    const focusedRoute = routes[index];
    const { changePage } = React.useContext(PageContext);

    return (
        <DrawerContentScrollView {...props}>
            <DrawerItem
                label="Book Home"
                focused={focusedRoute.name === "Book Screen"}
                onPress={() => {
                    props.navigation.navigate('Book Screen')
                }

                }
                activeTintColor={Colors.themeLightColors.primary}
            />
            <View style={{ paddingLeft: layout.padding.medium }}>
                <Drawer.Item
                    label="Indice"
                    active={false}
                    onPress={() => {
                        changePage(2);
                        props.navigation.closeDrawer();
                    }}
                />
                <Drawer.Item
                    label="Antes de empezar"
                    active={false}
                    style={styles.topic}
                    onPress={() => {
                        changePage(10);
                        props.navigation.closeDrawer();
                    }}
                />

                <Drawer.Item
                    label="Sobre nosotros"
                    active={false}
                    onPress={() => {
                        changePage(11);
                        props.navigation.closeDrawer();
                    }}
                />
                <Drawer.Item
                    label="Guia de iconos"
                    active={false}
                    onPress={() => {
                        changePage(12);
                        props.navigation.closeDrawer();
                    }}
                />
                <Drawer.Item
                    label="Consejos Importantes"
                    active={false}
                    onPress={() => {
                        changePage(13);
                        props.navigation.closeDrawer();
                    }}
                />
                <Drawer.Item
                    label="Perder grasa"
                    active={false}
                    onPress={() => {
                        changePage(15);
                        props.navigation.closeDrawer();
                    }}
                />
                <Drawer.Item
                    label="Recordatorios"
                    active={false}
                    onPress={() => {
                        changePage(17);
                        props.navigation.closeDrawer();
                    }}
                />
                <Drawer.Item
                    label="Un libro para todos. Msj para"
                    active={false}
                    onPress={() => {
                        changePage(18);
                        props.navigation.closeDrawer();
                    }}
                />
                <Drawer.Item
                    label="Recomendados del super"
                    active={false}
                    onPress={() => {
                        changePage(19);
                        props.navigation.closeDrawer();
                    }}
                />
                {/* end */}

                <Drawer.Item
                    style={styles.topic}
                    label="Esenciales en tu cocina"
                    active={false}
                    onPress={() => {
                        changePage(20);
                        props.navigation.closeDrawer();
                    }}
                />

                <Drawer.Item
                    label="Utensilios esenciales"
                    active={false}
                    onPress={() => {
                        changePage(21);
                        props.navigation.closeDrawer();
                    }}
                />
                <Drawer.Item
                    label="Ingredientes esenciales"
                    active={false}
                    onPress={() => {
                        changePage(24);
                        props.navigation.closeDrawer();
                    }}
                />
                <Drawer.Item
                    label="Saborizantes esenciales"
                    active={false}
                    onPress={() => {
                        changePage(28);
                        props.navigation.closeDrawer();
                    }}
                />
                <Drawer.Item
                    label="Elige bien (Calorías Altas vs Bajas)"
                    active={false}
                    onPress={() => {
                        changePage(30);
                        props.navigation.closeDrawer();
                    }}
                />
                {/* end */}
                <Drawer.Item
                    style={styles.topic}
                    label="Desayunos"
                    active={false}
                    onPress={() => {
                        changePage(34);
                        props.navigation.closeDrawer();
                    }}
                />
                {/* end */}
                <Drawer.Item
                    style={styles.topic}
                    label="Comidas"
                    active={false}
                    onPress={() => {
                        changePage(49);
                        props.navigation.closeDrawer();
                    }}
                />
                {/* end */}
                <Drawer.Item
                    style={styles.topic}
                    label="Cenas"
                    active={false}
                    onPress={() => {
                        changePage(64);
                        props.navigation.closeDrawer();
                    }}
                />
                {/* end */}
                <Drawer.Item
                    style={styles.topic}
                    label="Guarniciones"
                    active={false}
                    onPress={() => {
                        changePage(79);
                        props.navigation.closeDrawer();
                    }}
                />
                {/* end */}
                <Drawer.Item
                    style={styles.topic}
                    label="Snacks"
                    active={false}
                    onPress={() => {
                        changePage(87);
                        props.navigation.closeDrawer();
                    }}
                />
                {/* end */}
                <Drawer.Item
                    style={styles.topic}
                    label="Postres"
                    active={false}
                    onPress={() => {
                        changePage(112);
                        props.navigation.closeDrawer();
                    }}
                />
                {/* end */}
                <Drawer.Item
                    style={styles.topic}
                    label="Salsas saladas"
                    active={false}
                    onPress={() => {
                        changePage(139);
                        props.navigation.closeDrawer();
                    }}
                />
                {/* end */}
                <Drawer.Item
                    style={styles.topic}
                    label="Salsas dulces"
                    active={false}
                    onPress={() => {
                        changePage(149);
                        props.navigation.closeDrawer();
                    }}
                />
                {/* end */}
                <Drawer.Item
                    style={styles.topic}
                    label="Zona tropical"
                    active={false}
                    onPress={() => {
                        changePage(155);
                        props.navigation.closeDrawer();
                    }}
                />
                {/* end */}




            </View>
            <DrawerItem
                label="My WishList"
                focused={focusedRoute.name === "My Wishlist"}
                onPress={() => props.navigation.navigate('My Wishlist')}
                activeTintColor={Colors.themeLightColors.primary}
            />
        </DrawerContentScrollView>
    );
}

const styles = StyleSheet.create({
    topic: {
        backgroundColor: '#f0f0f7'
    }
})

export default DrawerContent;