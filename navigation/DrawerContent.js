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
                <Drawer.Item
                    label="Pancakes Delicia de Frutos Rojos"
                    active={false}
                    onPress={() => {
                        changePage(35);
                        props.navigation.closeDrawer();
                    }}
                />
                <Drawer.Item
                    label="Pancake-Toast Sueño de Chocolate "
                    active={false}
                    onPress={() => {
                        changePage(37);
                        props.navigation.closeDrawer();
                    }}
                />
                <Drawer.Item
                    label="Creps estilo caprese"
                    active={false}
                    onPress={() => {
                        changePage(39);
                        props.navigation.closeDrawer();
                    }}
                />
                <Drawer.Item
                    label="French Toast The Rock style"
                    active={false}
                    onPress={() => {
                        changePage(41);
                        props.navigation.closeDrawer();
                    }}
                />
                <Drawer.Item
                    label="French Toast Italian style"
                    active={false}
                    onPress={() => {
                        changePage(43);
                        props.navigation.closeDrawer();
                    }}
                />
                <Drawer.Item
                    label="Tostas de jamón y aguacate"
                    active={false}
                    onPress={() => {
                        changePage(45);
                        props.navigation.closeDrawer();
                    }}
                />
                <Drawer.Item
                    label="Protein Cereal bowl"
                    active={false}
                    onPress={() => {
                        changePage(47);
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
                <Drawer.Item
                    label="Boniato Burger"
                    active={false}
                    onPress={() => {
                        changePage(50);
                        props.navigation.closeDrawer();
                    }}
                />
                <Drawer.Item
                    label="Palomitas de pollo"
                    active={false}
                    onPress={() => {
                        changePage(52);
                        props.navigation.closeDrawer();
                    }}
                />
                <Drawer.Item
                    label="Ensalada Burrito"
                    active={false}
                    onPress={() => {
                        changePage(54);
                        props.navigation.closeDrawer();
                    }}
                />
                <Drawer.Item
                    label="Pimientos rellenos"
                    active={false}
                    onPress={() => {
                        changePage(56);
                        props.navigation.closeDrawer();
                    }}
                />
                <Drawer.Item
                    label="Megawraps fit"
                    active={false}
                    onPress={() => {
                        changePage(58);
                        props.navigation.closeDrawer();
                    }}
                />
                <Drawer.Item
                    label="Bomba de patatas"
                    active={false}
                    onPress={() => {
                        changePage(60);
                        props.navigation.closeDrawer();
                    }}
                />
                <Drawer.Item
                    label="Lasaña de repollo"
                    active={false}
                    onPress={() => {
                        changePage(62);
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
                <Drawer.Item
                    label="Pizza Keto"
                    active={false}
                    onPress={() => {
                        changePage(65);
                        props.navigation.closeDrawer();
                    }}
                />
                <Drawer.Item
                    label="Patatas supremas"
                    active={false}
                    onPress={() => {
                        changePage(67);
                        props.navigation.closeDrawer();
                    }}
                />
                <Drawer.Item
                    label="Canelones de berenjena"
                    active={false}
                    onPress={() => {
                        changePage(69);
                        props.navigation.closeDrawer();
                    }}
                />
                <Drawer.Item
                    label="Slim Pasta"
                    active={false}
                    onPress={() => {
                        changePage(71);
                        props.navigation.closeDrawer();
                    }}
                />
                <Drawer.Item
                    label="Huevos rotos"
                    active={false}
                    onPress={() => {
                        changePage(73);
                        props.navigation.closeDrawer();
                    }}
                />
                <Drawer.Item
                    label="Pastel de brócoli"
                    active={false}
                    onPress={() => {
                        changePage(75);
                        props.navigation.closeDrawer();
                    }}
                />
                <Drawer.Item
                    label="Salmón con patatas alioli"
                    active={false}
                    onPress={() => {
                        changePage(77);
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
                <Drawer.Item
                    label="Patatas alioli Fit"
                    active={false}
                    onPress={() => {
                        changePage(80);
                        props.navigation.closeDrawer();
                    }}
                />
                <Drawer.Item
                    label="Pollo picado barbacoa"
                    active={false}
                    onPress={() => {
                        changePage(81);
                        props.navigation.closeDrawer();
                    }}
                />
                <Drawer.Item
                    label="Cebolla vinagreta"
                    active={false}
                    onPress={() => {
                        changePage(82);
                        props.navigation.closeDrawer();
                    }}
                />
                <Drawer.Item
                    label="Pimientos para fajitas"
                    active={false}
                    onPress={() => {
                        changePage(83);
                        props.navigation.closeDrawer();
                    }}
                />
                <Drawer.Item
                    label="Repollo salteado chimichurri"
                    active={false}
                    onPress={() => {
                        changePage(84);
                        props.navigation.closeDrawer();
                    }}
                />
                <Drawer.Item
                    label="Pico de gallo"
                    active={false}
                    onPress={() => {
                        changePage(85);
                        props.navigation.closeDrawer();
                    }}
                />
                <Drawer.Item
                    label="Bastones de boniato veggie"
                    active={false}
                    onPress={() => {
                        changePage(86);
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
                <Drawer.Item
                    label="Nachos Fit"
                    active={false}
                    onPress={() => {
                        changePage(88);
                        props.navigation.closeDrawer();
                    }}
                />
                <Drawer.Item
                    label="Montaditos de maíz"
                    active={false}
                    onPress={() => {
                        changePage(90);
                        props.navigation.closeDrawer();
                    }}
                />
                <Drawer.Item
                    label="Pan de ajo crunchy"
                    active={false}
                    onPress={() => {
                        changePage(92);
                        props.navigation.closeDrawer();
                    }}
                />
                <Drawer.Item
                    label="Pulpo a la gallega"
                    active={false}
                    onPress={() => {
                        changePage(94);
                        props.navigation.closeDrawer();
                    }}
                />
                <Drawer.Item
                    label="Tofu teriyaki"
                    active={false}
                    onPress={() => {
                        changePage(96);
                        props.navigation.closeDrawer();
                    }}
                />
                <Drawer.Item
                    label="Tofu cheese balls"
                    active={false}
                    onPress={() => {
                        changePage(98);
                        props.navigation.closeDrawer();
                    }}
                />
                <Drawer.Item
                    label="Rollos primavera"
                    active={false}
                    onPress={() => {
                        changePage(100);
                        props.navigation.closeDrawer();
                    }}
                />
                <Drawer.Item
                    label="Tosta Fit Peanut Butter and Jelly"
                    active={false}
                    onPress={() => {
                        changePage(102);
                        props.navigation.closeDrawer();
                    }}
                />
                <Drawer.Item
                    label="Croquetas Fit"
                    active={false}
                    onPress={() => {
                        changePage(104);
                        props.navigation.closeDrawer();
                    }}
                />
                <Drawer.Item
                    label="Palomitas Light"
                    active={false}
                    onPress={() => {
                        changePage(106);
                        props.navigation.closeDrawer();
                    }}
                />
                <Drawer.Item
                    label="Protein Pudding"
                    active={false}
                    onPress={() => {
                        changePage(108);
                        props.navigation.closeDrawer();
                    }}
                />
                <Drawer.Item
                    label="Cinnamon Rolls Fit"
                    active={false}
                    onPress={() => {
                        changePage(110);
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
                <Drawer.Item
                    label=""
                    active={false}
                    onPress={() => {
                        changePage();
                        props.navigation.closeDrawer();
                    }}
                />
                <Drawer.Item
                    label=""
                    active={false}
                    onPress={() => {
                        changePage();
                        props.navigation.closeDrawer();
                    }}
                />
                <Drawer.Item
                    label=""
                    active={false}
                    onPress={() => {
                        changePage();
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
                <Drawer.Item
                    label=""
                    active={false}
                    onPress={() => {
                        changePage();
                        props.navigation.closeDrawer();
                    }}
                />
                <Drawer.Item
                    label=""
                    active={false}
                    onPress={() => {
                        changePage();
                        props.navigation.closeDrawer();
                    }}
                />
                <Drawer.Item
                    label=""
                    active={false}
                    onPress={() => {
                        changePage();
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
                <Drawer.Item
                    label=""
                    active={false}
                    onPress={() => {
                        changePage();
                        props.navigation.closeDrawer();
                    }}
                />
                <Drawer.Item
                    label=""
                    active={false}
                    onPress={() => {
                        changePage();
                        props.navigation.closeDrawer();
                    }}
                />
                <Drawer.Item
                    label=""
                    active={false}
                    onPress={() => {
                        changePage();
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
                <Drawer.Item
                    label=""
                    active={false}
                    onPress={() => {
                        changePage();
                        props.navigation.closeDrawer();
                    }}
                />
                <Drawer.Item
                    label=""
                    active={false}
                    onPress={() => {
                        changePage();
                        props.navigation.closeDrawer();
                    }}
                />
                <Drawer.Item
                    label=""
                    active={false}
                    onPress={() => {
                        changePage();
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