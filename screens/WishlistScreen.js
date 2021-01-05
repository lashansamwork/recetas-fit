import React, { useState, useEffect } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import ActionButton from 'react-native-action-button';
import { FlatList } from 'react-native-gesture-handler';
import Colors from '../theme/colors';
import {
  Button,
  Title,
  Text,
  TextInput,
  ActivityIndicator,
  Subheading,
  Searchbar,
  List,
  Avatar,
} from 'react-native-paper';
import WishlistItem from '../components/WishlistItem';
import layout from '../theme/layout';
import Modal from 'react-native-modal';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Toast from 'react-native-simple-toast';

import { alimentacion } from '../data/Alimentacion';
import { electrodomesticos } from '../data/Electrodomesticos';
import { reposteria } from '../data/Reposteria';
import { saborizantes } from '../data/Saborizantes';
import { suplementacion } from '../data/Suplementacion';
import { salsas } from '../data/Salsas';
import { toppings } from '../data/Toppings';

const WishlistScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [isShowRecipe, setIsShowRecipe] = useState(false);
  const [loading, setLoading] = useState(true);
  const [wishlistArr, setWishlistArr] = useState([]);
  const [itemName, setItemName] = useState(null);
  const [itemQuantity, setItemQuantity] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const items = [
    {
      title: "pudding1",
      img: "../assets/imgs/1Gandulesverdes.png",
      recipe:
        [
          { name: "item1", quantity: 1 },
        ],
    },
    {
      title: "pudding2",
      img: "../assets/imgs/1_Gandules_verdes.png",
      recipe:
        [
          { name: "item3", quantity: 3 },
          { name: "item4", quantity: 4 }
        ]
    },
  ];

  

  useEffect(() => {
    getWishList();
  }, []);

  useEffect(() => {
    if (wishlistArr) {
      setWishList();
    }
  }, [wishlistArr]);

  const setWishList = async () => {
    const jsonValue = JSON.stringify(wishlistArr);
    AsyncStorage.setItem('@wishList', jsonValue);
  };

  const getWishList = async () => {
    const wishListJson = await AsyncStorage.getItem('@wishList');
    const wishListData = wishListJson != null ? JSON.parse(wishListJson) : null;
    if (wishListData) {
      setWishlistArr(wishListData);
    }
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  const onChangeSearch = (query) => {
    setSearchQuery(query);
  };

  const filteredItems = items.filter((item) =>
    item.title.toLocaleLowerCase().includes(searchQuery.toLocaleLowerCase()),
  );

  const itemsToDisplay = searchQuery ? filteredItems : items;

  const renderItem = ({ item }) => {
    return (
      // FLATLIST ITEM
      <WishlistItem
        title={item.title}
        img={item.img}
        link={item.link}
        id={item.id}
        onDeletePressed={onDeletePressed}
      />

    );
  };

  const onDeletePressed = (id) => {
    const updatedWishList = wishlistArr.filter((item) => item.id !== id);
    setWishlistArr(updatedWishList);
  };

  const filteredSearchItemPress = (newItem) => {
    // MAP FUNCTION
    // let itemToAdd = [];
    // let lenghtAdder = 0;
    console.log("🚀 ~ newItem", newItem);
    
    // wishlist array = [{id: 1, img: ...., title: .. , link:... },{}  ]

    let newItemToAdd = {
      id:  wishlistArr.length,
      title: newItem.title,
      link: newItem.link,
      img: newItem.img,
    }

    setWishlistArr([...wishlistArr, newItemToAdd]);
    Toast.show('Elemento agregado', 0.3);
    console.log("🚀 ~ wishlistArr", wishlistArr);
    // newItem.map((element, index) => {
    //   lenghtAdder = wishlistArr.length + index;
    //   itemToAdd.push({
    //     id: lenghtAdder,
    //     title: element.name,
    //     quantity: element.quantity,
    //   })
    // });
    // setWishlistArr([...wishlistArr, ...itemToAdd]);
  };

  if (loading) {
    return (
      <View style={{ flex: 1, padding: layout.padding.xxxLarge }}>
        <ActivityIndicator animating={true} color={Colors.accent} />
      </View>
    );
  }
  return (
    <View style={{ flex: 1, padding: layout.padding.xxxLarge }}>
      <Modal
        isVisible={modalVisible}
        onBackdropPress={() => setModalVisible(false)}
        avoidKeyboard={true}>
        <View
          style={{
            backgroundColor: 'white',
            borderRadius: layout.radius.image,
            padding: layout.padding.large,
          }}>
          <Title>Recitas</Title>

          <Searchbar
            placeholder="Buscar"
            onChangeText={onChangeSearch}
            value={searchQuery}
            style={{ marginTop: layout.padding.xxxLarge }}
          />

          <ScrollView style={{ paddingVertical: layout.padding.xxxLarge }}>
            {!filteredItems.length && (
              <View style={{ paddingTop: layout.padding.xxxLarge }}>
                <Text>
                  no hay resultados coincidentes
                </Text>
              </View>
            )}
            {/* <List.Section title="Accordions"> */}
            <List.Accordion title="Alimentación">
              {/* BUTTON */}
              {alimentacion.map((element, index) => {
                return (
                <View  
                  key={`${index}`}
                  style={{ paddingVertical: layout.padding.medium, flex: 1, flexDirection: 'row' }}>
                    <View style={{padding: 15}}></View>
                    <View style={{ alignSelf: 'center' }} >
                    <Avatar.Image size={28} source={element.img} />
                  </View>
                  <View >
                    <Button
                      color="black"
                      onPress={() => filteredSearchItemPress(element)}>
                      {element.title}
                    </Button>
                  </View>
                </View>
              )})}
            </List.Accordion>
            <List.Accordion title="Saborizantes">
              {saborizantes.map((element, index) => (
                <View  
                  key={`${index}`}
                  style={{ paddingVertical: layout.padding.medium, flex: 1, flexDirection: 'row' }}>
                    <View style={{padding: 15}}></View>
                  <View style={{ alignSelf: 'center' }} >
                    <Avatar.Image size={28} source={element.img} />
                  </View>
                  <View >
                    <Button
                      color="black"
                      onPress={() => filteredSearchItemPress(element)}>
                      {element.title}
                    </Button>
                  </View>
                </View>
              ))}
            </List.Accordion>
            <List.Accordion title="Salsas">
              {salsas.map((element, index) => (
                <View  
                  key={`${index}`}
                  style={{ paddingVertical: layout.padding.medium, flex: 1, flexDirection: 'row' }}>
                    <View style={{padding: 15}}></View>
                  <View style={{ alignSelf: 'center' }} >
                    <Avatar.Image size={28} source={element.img} />
                  </View>
                  <View >
                    <Button
                      color="black"
                      onPress={() => filteredSearchItemPress(element)}>
                      {element.title}
                    </Button>
                  </View>
                </View>
              ))}
            </List.Accordion>
            <List.Accordion title="Topppings">
              {toppings.map((element, index) => (
                <View  
                  key={`${index}`}
                  style={{ paddingVertical: layout.padding.medium, flex: 1, flexDirection: 'row' }}>
                    <View style={{padding: 15}}></View>
                  <View style={{ alignSelf: 'center' }} >
                    <Avatar.Image size={28} source={element.img} />
                  </View>
                  <View >
                    <Button
                      color="black"
                      onPress={() => filteredSearchItemPress(element)}>
                      {element.title}
                    </Button>
                  </View>
                </View>
              ))}
            </List.Accordion>
            <List.Accordion title="Suplementación">
              {suplementacion.map((element, index) => (
                <View  
                  key={`${index}`}
                  style={{ paddingVertical: layout.padding.medium, flex: 1, flexDirection: 'row' }}>
                    <View style={{padding: 15}}></View>
                  <View style={{ alignSelf: 'center' }} >
                    <Avatar.Image size={28} source={element.img} />
                  </View>
                  <View >
                    <Button
                      color="black"
                      onPress={() => filteredSearchItemPress(element)}>
                      {element.title}
                    </Button>
                  </View>
                </View>
              ))}
            </List.Accordion>
            <List.Accordion title="Repostería">
              {reposteria.map((element, index) => (
                <View  
                  key={`${index}`}
                  style={{ paddingVertical: layout.padding.medium, flex: 1, flexDirection: 'row' }}>
                    <View style={{padding: 15}}></View>
                  <View style={{ alignSelf: 'center' }} >
                    <Avatar.Image size={28} source={element.img} />
                  </View>
                  <View >
                    <Button
                      color="black"
                      onPress={() => filteredSearchItemPress(element)}>
                      {element.title}
                    </Button>
                  </View>
                </View>
              ))}
            </List.Accordion>
            <List.Accordion title="Electrodomésticos">
              {electrodomesticos.map((element, index) => (
                <View  
                  key={`${index}`}
                  style={{ paddingVertical: layout.padding.medium, flex: 1, flexDirection: 'row' }}>
                    <View style={{padding: 15}}></View>
                  <View style={{ alignSelf: 'center' }} >
                    <Avatar.Image size={28} source={element.img} />
                  </View>
                  <View >
                    <Button
                      color="black"
                      onPress={() => filteredSearchItemPress(element)}>
                      {element.title}
                    </Button>
                  </View>
                </View>
              ))}
            </List.Accordion>
           
            {/* </List.Section> */}
          </ScrollView>

          <Button
            mode="outlined"
            onPress={() => {
              setIsShowRecipe(false);
            }}>
            agregar elementos personalizados
            </Button>
        </View>
      </Modal>

      <View style={{ flexGrow: 1 }}>
        {/* FLATLIST */}
        <FlatList
          ListEmptyComponent={
            <View style={{ alignItems: 'center' }}>
              <Subheading>Tu lista de deseos no tiene nada</Subheading>
            </View>
          }
          data={wishlistArr}
          renderItem={renderItem}
          keyExtractor={(item, index) => {
            return `${index}`;
          }}
        />
      </View>
      <ActionButton
        buttonColor="rgba(231,76,60,1)"
        title="Add"
        useNativeFeedback={true}
        onPress={() => setModalVisible(true)}
      />
    </View>
  );
};

export default WishlistScreen;