import { View, StyleSheet } from "react-native"
import React, { useContext } from 'react';
import {
    DrawerItemList,
    DrawerItem,
    DrawerContentScrollView,
} from '@react-navigation/drawer';
import { Drawer, List } from 'react-native-paper';
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
                label="Inicio"
                focused={focusedRoute.name === "La Cocina Squat Fit"}
                onPress={() => {
                    props.navigation.navigate('La Cocina Squat Fit')
                }

                }
                activeTintColor={Colors.themeLightColors.primary}
            />

            <View style={{ paddingLeft: layout.padding.medium }}>
                <Drawer.Item
                    label="Indice"
                    active={false}
                    onPress={() => {
                        props.navigation.navigate('La Cocina Squat Fit');
                        changePage(2);
                        props.navigation.closeDrawer();
                    }}
                />
                <List.AccordionGroup>
                    <List.Accordion title="Antes de empezar" id="1" titleStyle={{ fontSize: 15 }}>
                        <Drawer.Item
                            label="Antes de empezar"
                            active={false}
                            onPress={() => {
                                props.navigation.navigate('La Cocina Squat Fit');
                                changePage(10);
                                props.navigation.closeDrawer();
                            }}
                        />
                        <Drawer.Item
                            label="Sobre nosotros"
                            active={false}
                            onPress={() => {
                                props.navigation.navigate('La Cocina Squat Fit');
                                changePage(11);
                                props.navigation.closeDrawer();
                            }}
                        />
                        <Drawer.Item
                            label="Guia de iconos"
                            active={false}
                            onPress={() => {
                                props.navigation.navigate('La Cocina Squat Fit');
                                changePage(12);
                                props.navigation.closeDrawer();
                            }}
                        />
                        <Drawer.Item
                            label="Consejos Importantes"
                            active={false}
                            onPress={() => {
                                props.navigation.navigate('La Cocina Squat Fit');
                                changePage(13);
                                props.navigation.closeDrawer();
                            }}
                        />
                        <Drawer.Item
                            label="Perder grasa"
                            active={false}
                            onPress={() => {
                                props.navigation.navigate('La Cocina Squat Fit');
                                changePage(15);
                                props.navigation.closeDrawer();
                            }}
                        />
                        <Drawer.Item
                            label="Recordatorios"
                            active={false}
                            onPress={() => {
                                props.navigation.navigate('La Cocina Squat Fit');
                                changePage(17);
                                props.navigation.closeDrawer();
                            }}
                        />
                        <Drawer.Item
                            label="Msj: Vegano/Celíaco/Keto"
                            active={false}
                            onPress={() => {
                                props.navigation.navigate('La Cocina Squat Fit');
                                changePage(18);
                                props.navigation.closeDrawer();
                            }}
                        />
                        <Drawer.Item
                            label="Recomendados del super"
                            active={false}
                            onPress={() => {
                                props.navigation.navigate('La Cocina Squat Fit');
                                changePage(19);
                                props.navigation.closeDrawer();
                            }}
                        />
                    </List.Accordion>
                    {/* end */}
                    <List.Accordion title="Esenciales en tu cocina" id="2" titleStyle={{ fontSize: 15 }}>
                        <Drawer.Item
                            label="Esenciales en tu cocina"
                            active={false}
                            onPress={() => {
                                props.navigation.navigate('La Cocina Squat Fit');
                                changePage(20);
                                props.navigation.closeDrawer();
                            }}
                        />
                        <Drawer.Item
                            label="Utensilios esenciales"
                            active={false}
                            onPress={() => {
                                props.navigation.navigate('La Cocina Squat Fit');
                                changePage(21);
                                props.navigation.closeDrawer();
                            }}
                        />
                        <Drawer.Item
                            label="Ingredientes esenciales"
                            active={false}
                            onPress={() => {
                                props.navigation.navigate('La Cocina Squat Fit');
                                changePage(24);
                                props.navigation.closeDrawer();
                            }}
                        />
                        <Drawer.Item
                            label="Saborizantes esenciales"
                            active={false}
                            onPress={() => {
                                props.navigation.navigate('La Cocina Squat Fit');
                                changePage(28);
                                props.navigation.closeDrawer();
                            }}
                        />
                        <Drawer.Item
                            label="Elige bien (Calorías Altas vs Bajas)"
                            active={false}
                            onPress={() => {
                                props.navigation.navigate('La Cocina Squat Fit');
                                changePage(30);
                                props.navigation.closeDrawer();
                            }}
                        />
                    </List.Accordion>
                    {/* end */}
                    <List.Accordion title="Desayunos" id="3" titleStyle={{ fontSize: 15 }}>
                        <Drawer.Item
                            label="Desayunos"
                            active={false}
                            onPress={() => {
                                props.navigation.navigate('La Cocina Squat Fit');
                                changePage(34);
                                props.navigation.closeDrawer();
                            }}
                        />
                        <Drawer.Item
                            label="Pancakes Delicia de Frutos Rojos"
                            active={false}
                            onPress={() => {
                                props.navigation.navigate('La Cocina Squat Fit');
                                changePage(35);
                                props.navigation.closeDrawer();
                            }}
                        />
                        <Drawer.Item
                            label="Pancake-Toast Sueño de Chocolate "
                            active={false}
                            onPress={() => {
                                props.navigation.navigate('La Cocina Squat Fit');
                                changePage(37);
                                props.navigation.closeDrawer();
                            }}
                        />
                        <Drawer.Item
                            label="Creps estilo caprese"
                            active={false}
                            onPress={() => {
                                props.navigation.navigate('La Cocina Squat Fit');
                                changePage(39);
                                props.navigation.closeDrawer();
                            }}
                        />
                        <Drawer.Item
                            label="French Toast The Rock style"
                            active={false}
                            onPress={() => {
                                props.navigation.navigate('La Cocina Squat Fit');
                                changePage(41);
                                props.navigation.closeDrawer();
                            }}
                        />
                        <Drawer.Item
                            label="French Toast Italian style"
                            active={false}
                            onPress={() => {
                                props.navigation.navigate('La Cocina Squat Fit');
                                changePage(43);
                                props.navigation.closeDrawer();
                            }}
                        />
                        <Drawer.Item
                            label="Tostas de jamón y aguacate"
                            active={false}
                            onPress={() => {
                                props.navigation.navigate('La Cocina Squat Fit');
                                changePage(45);
                                props.navigation.closeDrawer();
                            }}
                        />
                        <Drawer.Item
                            label="Protein Cereal bowl"
                            active={false}
                            onPress={() => {
                                props.navigation.navigate('La Cocina Squat Fit');
                                changePage(47);
                                props.navigation.closeDrawer();
                            }}
                        />
                    </List.Accordion>
                    {/* end */}
                    <List.Accordion title="Comidas" id="4" titleStyle={{ fontSize: 15 }}>
                        <Drawer.Item
                            label="Comidas"
                            active={false}
                            onPress={() => {
                                props.navigation.navigate('La Cocina Squat Fit');
                                changePage(49);
                                props.navigation.closeDrawer();
                            }}
                        />
                        <Drawer.Item
                            label="Boniato Burger"
                            active={false}
                            onPress={() => {
                                props.navigation.navigate('La Cocina Squat Fit');
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
                                props.navigation.navigate('La Cocina Squat Fit');
                                changePage(54);
                                props.navigation.closeDrawer();
                            }}
                        />
                        <Drawer.Item
                            label="Pimientos rellenos"
                            active={false}
                            onPress={() => {
                                props.navigation.navigate('La Cocina Squat Fit');
                                changePage(56);
                                props.navigation.closeDrawer();
                            }}
                        />
                        <Drawer.Item
                            label="Megawraps fit"
                            active={false}
                            onPress={() => {
                                props.navigation.navigate('La Cocina Squat Fit');
                                changePage(58);
                                props.navigation.closeDrawer();
                            }}
                        />
                        <Drawer.Item
                            label="Bomba de patatas"
                            active={false}
                            onPress={() => {
                                props.navigation.navigate('La Cocina Squat Fit');
                                changePage(60);
                                props.navigation.closeDrawer();
                            }}
                        />
                        <Drawer.Item
                            label="Lasaña de repollo"
                            active={false}
                            onPress={() => {
                                props.navigation.navigate('La Cocina Squat Fit');
                                changePage(62);
                                props.navigation.closeDrawer();
                            }}
                        />
                    </List.Accordion>
                    {/* end */}
                    <List.Accordion title="Cenas" id="5" titleStyle={{ fontSize: 15 }}>
                        <Drawer.Item
                            label="Cenas"
                            active={false}
                            onPress={() => {
                                props.navigation.navigate('La Cocina Squat Fit');
                                changePage(64);
                                props.navigation.closeDrawer();
                            }}
                        />
                        <Drawer.Item
                            label="Pizza Keto"
                            active={false}
                            onPress={() => {
                                props.navigation.navigate('La Cocina Squat Fit');
                                changePage(65);
                                props.navigation.closeDrawer();
                            }}
                        />
                        <Drawer.Item
                            label="Patatas supremas"
                            active={false}
                            onPress={() => {
                                props.navigation.navigate('La Cocina Squat Fit');
                                changePage(67);
                                props.navigation.closeDrawer();
                            }}
                        />
                        <Drawer.Item
                            label="Canelones de berenjena"
                            active={false}
                            onPress={() => {
                                props.navigation.navigate('La Cocina Squat Fit');
                                changePage(69);
                                props.navigation.closeDrawer();
                            }}
                        />
                        <Drawer.Item
                            label="Slim Pasta"
                            active={false}
                            onPress={() => {
                                props.navigation.navigate('La Cocina Squat Fit');
                                changePage(71);
                                props.navigation.closeDrawer();
                            }}
                        />
                        <Drawer.Item
                            label="Huevos rotos"
                            active={false}
                            onPress={() => {
                                props.navigation.navigate('La Cocina Squat Fit');
                                changePage(73);
                                props.navigation.closeDrawer();
                            }}
                        />
                        <Drawer.Item
                            label="Pastel de brócoli"
                            active={false}
                            onPress={() => {
                                props.navigation.navigate('La Cocina Squat Fit');
                                changePage(75);
                                props.navigation.closeDrawer();
                            }}
                        />
                        <Drawer.Item
                            label="Salmón con patatas alioli"
                            active={false}
                            onPress={() => {
                                props.navigation.navigate('La Cocina Squat Fit');
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
                                props.navigation.navigate('La Cocina Squat Fit');
                                changePage(79);
                                props.navigation.closeDrawer();
                            }}
                        />
                        <Drawer.Item
                            label="Patatas alioli Fit"
                            active={false}
                            onPress={() => {
                                props.navigation.navigate('La Cocina Squat Fit');
                                changePage(80);
                                props.navigation.closeDrawer();
                            }}
                        />
                        <Drawer.Item
                            label="Pollo picado barbacoa"
                            active={false}
                            onPress={() => {
                                props.navigation.navigate('La Cocina Squat Fit');
                                changePage(81);
                                props.navigation.closeDrawer();
                            }}
                        />
                        <Drawer.Item
                            label="Cebolla vinagreta"
                            active={false}
                            onPress={() => {
                                props.navigation.navigate('La Cocina Squat Fit');
                                changePage(82);
                                props.navigation.closeDrawer();
                            }}
                        />
                        <Drawer.Item
                            label="Pimientos para fajitas"
                            active={false}
                            onPress={() => {
                                props.navigation.navigate('La Cocina Squat Fit');
                                changePage(83);
                                props.navigation.closeDrawer();
                            }}
                        />
                        <Drawer.Item
                            label="Repollo salteado chimichurri"
                            active={false}
                            onPress={() => {
                                props.navigation.navigate('La Cocina Squat Fit');
                                changePage(84);
                                props.navigation.closeDrawer();
                            }}
                        />
                        <Drawer.Item
                            label="Pico de gallo"
                            active={false}
                            onPress={() => {
                                props.navigation.navigate('La Cocina Squat Fit');
                                changePage(85);
                                props.navigation.closeDrawer();
                            }}
                        />
                        <Drawer.Item
                            label="Bastones de boniato veggie"
                            active={false}
                            onPress={() => {
                                props.navigation.navigate('La Cocina Squat Fit');
                                changePage(86);
                                props.navigation.closeDrawer();
                            }}
                        />
                    </List.Accordion>
                    {/* end */}
                    <List.Accordion title="Snacks" id="6" titleStyle={{ fontSize: 15 }}>
                        <Drawer.Item
                            label="Snacks"
                            active={false}
                            onPress={() => {
                                props.navigation.navigate('La Cocina Squat Fit');
                                changePage(87);
                                props.navigation.closeDrawer();
                            }}
                        />
                        <Drawer.Item
                            label="Nachos Fit"
                            active={false}
                            onPress={() => {
                                props.navigation.navigate('La Cocina Squat Fit');
                                changePage(88);
                                props.navigation.closeDrawer();
                            }}
                        />
                        <Drawer.Item
                            label="Montaditos de maíz"
                            active={false}
                            onPress={() => {
                                props.navigation.navigate('La Cocina Squat Fit');
                                changePage(90);
                                props.navigation.closeDrawer();
                            }}
                        />
                        <Drawer.Item
                            label="Pan de ajo crunchy"
                            active={false}
                            onPress={() => {
                                props.navigation.navigate('La Cocina Squat Fit');
                                changePage(92);
                                props.navigation.closeDrawer();
                            }}
                        />
                        <Drawer.Item
                            label="Pulpo a la gallega"
                            active={false}
                            onPress={() => {
                                props.navigation.navigate('La Cocina Squat Fit');
                                changePage(94);
                                props.navigation.closeDrawer();
                            }}
                        />
                        <Drawer.Item
                            label="Tofu teriyaki"
                            active={false}
                            onPress={() => {
                                props.navigation.navigate('La Cocina Squat Fit');
                                changePage(96);
                                props.navigation.closeDrawer();
                            }}
                        />
                        <Drawer.Item
                            label="Tofu cheese balls"
                            active={false}
                            onPress={() => {
                                props.navigation.navigate('La Cocina Squat Fit');
                                changePage(98);
                                props.navigation.closeDrawer();
                            }}
                        />
                        <Drawer.Item
                            label="Rollos primavera"
                            active={false}
                            onPress={() => {
                                props.navigation.navigate('La Cocina Squat Fit');
                                changePage(100);
                                props.navigation.closeDrawer();
                            }}
                        />
                        <Drawer.Item
                            label="Tosta Peanut Butter & Jelly"
                            active={false}
                            onPress={() => {
                                props.navigation.navigate('La Cocina Squat Fit');
                                changePage(102);
                                props.navigation.closeDrawer();
                            }}
                        />
                        <Drawer.Item
                            label="Croquetas de Queso"
                            active={false}
                            onPress={() => {
                                props.navigation.navigate('La Cocina Squat Fit');
                                changePage(104);
                                props.navigation.closeDrawer();
                            }}
                        />
                        <Drawer.Item
                            label="Palomitas Light"
                            active={false}
                            onPress={() => {
                                props.navigation.navigate('La Cocina Squat Fit');
                                changePage(106);
                                props.navigation.closeDrawer();
                            }}
                        />
                        <Drawer.Item
                            label="Protein Pudding"
                            active={false}
                            onPress={() => {
                                props.navigation.navigate('La Cocina Squat Fit');
                                changePage(108);
                                props.navigation.closeDrawer();
                            }}
                        />
                        <Drawer.Item
                            label="Cinnamon Rolls Fit"
                            active={false}
                            onPress={() => {
                                props.navigation.navigate('La Cocina Squat Fit');
                                changePage(110);
                                props.navigation.closeDrawer();
                            }}
                        />

                    </List.Accordion>
                    {/* end */}
                    <List.Accordion title="Postres" id="7" titleStyle={{ fontSize: 15 }}>
                        <Drawer.Item
                            label="Postres"
                            active={false}
                            onPress={() => {
                                props.navigation.navigate('La Cocina Squat Fit');
                                changePage(112);
                                props.navigation.closeDrawer();
                            }}
                        />
                        <Drawer.Item
                            label="Helados Fit"
                            active={false}
                            onPress={() => {
                                props.navigation.navigate('La Cocina Squat Fit');
                                changePage(113);
                                props.navigation.closeDrawer();
                            }}
                        />
                        <Drawer.Item
                            label="Fit Cheesecake"
                            active={false}
                            onPress={() => {
                                props.navigation.navigate('La Cocina Squat Fit');
                                changePage(115);
                                props.navigation.closeDrawer();
                            }}
                        />
                        <Drawer.Item
                            label="Pop Tart Fit"
                            active={false}
                            onPress={() => {
                                props.navigation.navigate('La Cocina Squat Fit');
                                changePage(117);
                                props.navigation.closeDrawer();
                            }}
                        />
                        <Drawer.Item
                            label="Bizcocho de Tres leches Fit"
                            active={false}
                            onPress={() => {
                                props.navigation.navigate('La Cocina Squat Fit');
                                changePage(119);
                                props.navigation.closeDrawer();
                            }}
                        />
                        <Drawer.Item
                            label="Tartade Halloween"
                            active={false}
                            onPress={() => {
                                props.navigation.navigate('La Cocina Squat Fit');
                                changePage(121);
                                props.navigation.closeDrawer();
                            }}
                        />
                        <Drawer.Item
                            label="Volcán de chocolate"
                            active={false}
                            onPress={() => {
                                props.navigation.navigate('La Cocina Squat Fit');
                                changePage(123);
                                props.navigation.closeDrawer();
                            }}
                        />
                        <Drawer.Item
                            label="Brownie Muerte por chocolate"
                            active={false}
                            onPress={() => {
                                props.navigation.navigate('La Cocina Squat Fit');
                                changePage(125);
                                props.navigation.closeDrawer();
                            }}
                        />
                        <Drawer.Item
                            label="Fit Carrot cake"
                            active={false}
                            onPress={() => {
                                props.navigation.navigate('La Cocina Squat Fit');
                                changePage(127);
                                props.navigation.closeDrawer();
                            }}
                        />
                        <Drawer.Item
                            label="Tarta de Pantera Rosa Fit"
                            active={false}
                            onPress={() => {
                                props.navigation.navigate('La Cocina Squat Fit');
                                changePage(129);
                                props.navigation.closeDrawer();
                            }}
                        />
                        <Drawer.Item
                            label="Cookie Choco-Marshmallow"
                            active={false}
                            onPress={() => {
                                props.navigation.navigate('La Cocina Squat Fit');
                                changePage(131);
                                props.navigation.closeDrawer();
                            }}
                        />
                        <Drawer.Item
                            label="Bizcocho de Frambuesa"
                            active={false}
                            onPress={() => {
                                props.navigation.navigate('La Cocina Squat Fit');
                                changePage(133);
                                props.navigation.closeDrawer();
                            }}
                        />
                        <Drawer.Item
                            label="Lemon Pie"
                            active={false}
                            onPress={() => {
                                props.navigation.navigate('La Cocina Squat Fit');
                                changePage(135);
                                props.navigation.closeDrawer();
                            }}
                        />
                        <Drawer.Item
                            label="Apple Pie"
                            active={false}
                            onPress={() => {
                                props.navigation.navigate('La Cocina Squat Fit');
                                changePage(137);
                                props.navigation.closeDrawer();
                            }}
                        />

                    </List.Accordion>
                    {/* end */}
                    <List.Accordion title="Salsas saladas" id="8" titleStyle={{ fontSize: 15 }}>
                        <Drawer.Item
                            label="Salsas saladas"
                            active={false}
                            onPress={() => {
                                props.navigation.navigate('La Cocina Squat Fit');
                                changePage(139);
                                props.navigation.closeDrawer();
                            }}
                        />
                        <Drawer.Item
                            label="Aliño estilo Big Mac"
                            active={false}
                            onPress={() => {
                                props.navigation.navigate('La Cocina Squat Fit');
                                changePage(140);
                                props.navigation.closeDrawer();
                            }}
                        />
                        <Drawer.Item
                            label="Alioli Light"
                            active={false}
                            onPress={() => {
                                props.navigation.navigate('La Cocina Squat Fit');
                                changePage(141);
                                props.navigation.closeDrawer();
                            }}
                        />
                        <Drawer.Item
                            label="Guacamole casero"
                            active={false}
                            onPress={() => {
                                props.navigation.navigate('La Cocina Squat Fit');
                                changePage(142);
                                props.navigation.closeDrawer();
                            }}
                        />
                        <Drawer.Item
                            label="Hummus casero"
                            active={false}
                            onPress={() => {
                                props.navigation.navigate('La Cocina Squat Fit');
                                changePage(143);
                                props.navigation.closeDrawer();
                            }}
                        />
                        <Drawer.Item
                            label="Crema agria Light"
                            active={false}
                            onPress={() => {
                                props.navigation.navigate('La Cocina Squat Fit');
                                changePage(144);
                                props.navigation.closeDrawer();
                            }}
                        />
                        <Drawer.Item
                            label="Dip Alubias rojas"
                            active={false}
                            onPress={() => {
                                props.navigation.navigate('La Cocina Squat Fit');
                                changePage(145);
                                props.navigation.closeDrawer();
                            }}
                        />
                        <Drawer.Item
                            label="Burger Light"
                            active={false}
                            onPress={() => {
                                props.navigation.navigate('La Cocina Squat Fit');
                                changePage(146);
                                props.navigation.closeDrawer();
                            }}
                        />
                        <Drawer.Item
                            label="Agridulce Light"
                            active={false}
                            onPress={() => {
                                props.navigation.navigate('La Cocina Squat Fit');
                                changePage(147);
                                props.navigation.closeDrawer();
                            }}
                        />
                        <Drawer.Item
                            label="Pesto Light"
                            active={false}
                            onPress={() => {
                                props.navigation.navigate('La Cocina Squat Fit');
                                changePage(148);
                                props.navigation.closeDrawer();
                            }}
                        />

                    </List.Accordion>
                    {/* end */}
                    <List.Accordion title="Salsas dulces" id="9" titleStyle={{ fontSize: 15 }}>
                        <Drawer.Item
                            label="Salsas dulces"
                            active={false}
                            onPress={() => {
                                props.navigation.navigate('La Cocina Squat Fit');
                                changePage(149);
                                props.navigation.closeDrawer();
                            }}
                        />
                        <Drawer.Item
                            label="FitCream Cacahuete"
                            active={false}
                            onPress={() => {
                                props.navigation.navigate('La Cocina Squat Fit');
                                changePage(150);
                                props.navigation.closeDrawer();
                            }}
                        />
                        <Drawer.Item
                            label="FitCream Choco Blanco"
                            active={false}
                            onPress={() => {
                                props.navigation.navigate('La Cocina Squat Fit');
                                changePage(151);
                                props.navigation.closeDrawer();
                            }}
                        />
                        <Drawer.Item
                            label="Sirope de pancake 0cal"
                            active={false}
                            onPress={() => {
                                props.navigation.navigate('La Cocina Squat Fit');
                                changePage(152);
                                props.navigation.closeDrawer();
                            }}
                        />

                        <Drawer.Item
                            label="Mermelada de fresa casera"
                            active={false}
                            onPress={() => {
                                props.navigation.navigate('La Cocina Squat Fit');
                                changePage(153);
                                props.navigation.closeDrawer();
                            }}
                        />
                        <Drawer.Item
                            label="Frosting de Vainilla Fit"
                            active={false}
                            onPress={() => {
                                props.navigation.navigate('La Cocina Squat Fit');
                                changePage(154);
                                props.navigation.closeDrawer();
                            }}
                        />
                    </List.Accordion>
                    {/* end */}
                    <List.Accordion title="Zona tropical" id="10" titleStyle={{ fontSize: 15 }}>
                        <Drawer.Item
                            label="Zona tropical"
                            active={false}
                            onPress={() => {
                                props.navigation.navigate('La Cocina Squat Fit');
                                changePage(155);
                                props.navigation.closeDrawer();
                            }}
                        />
                        <Drawer.Item
                            label="El famoso Mangú dominicano"
                            active={false}
                            onPress={() => {
                                props.navigation.navigate('La Cocina Squat Fit');
                                changePage(156);
                                props.navigation.closeDrawer();
                            }}
                        />
                        <Drawer.Item
                            label="La bandera dominicana"
                            active={false}
                            onPress={() => {
                                props.navigation.navigate('La Cocina Squat Fit');
                                changePage(158);
                                props.navigation.closeDrawer();
                            }}
                        />
                        <Drawer.Item
                            label="Palitos de yuca"
                            active={false}
                            onPress={() => {
                                props.navigation.navigate('La Cocina Squat Fit');
                                changePage(160);
                                props.navigation.closeDrawer();
                            }}
                        />
                    </List.Accordion>
                    {/* end */}
                    <List.Accordion title="Cierre" id="11" titleStyle={{ fontSize: 15 }}>
                        <Drawer.Item
                            label="Cierre"
                            active={false}
                            onPress={() => {
                                props.navigation.navigate('La Cocina Squat Fit');
                                changePage(162);
                                props.navigation.closeDrawer();
                            }}
                        />
                        <Drawer.Item
                            label="Agradecimientos"
                            active={false}
                            onPress={() => {
                                props.navigation.navigate('La Cocina Squat Fit');
                                changePage(163);
                                props.navigation.closeDrawer();
                            }}
                        />
                        <Drawer.Item
                            label="Consideraciones legales"
                            active={false}
                            onPress={() => {
                                props.navigation.navigate('La Cocina Squat Fit');
                                changePage(164);
                                props.navigation.closeDrawer();
                            }}
                        />
                    </List.Accordion>
                    {/* end */}
                </List.AccordionGroup>
            </View>
            <DrawerItem
                label="Lista de la Compra"
                focused={focusedRoute.name === "Lista de la Compra"}
                onPress={() => props.navigation.navigate('Lista de la Compra')}
                activeTintColor={Colors.themeLightColors.primary}
            />
            <DrawerItem
                label="Notas"
                focused={focusedRoute.name === "Notas"}
                onPress={() => props.navigation.navigate('Notas')}
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