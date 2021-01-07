import React, { useState, useEffect } from 'react';
import { View, ScrollView } from 'react-native';
import ActionButton from 'react-native-action-button';
import { FlatList } from 'react-native-gesture-handler';
import colors from '../theme/colors';
import {
  Button,
  Title,
  ActivityIndicator,
  Subheading,
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
  const [loading, setLoading] = useState(true);
  const [wishlistArr, setWishlistArr] = useState([]);

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
  const renderItem = ({ item }) => {
    return (<WishlistItem
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
    let newItemToAdd = {
      id:  wishlistArr.length,
      title: newItem.title,
      link: newItem.link,
      img: newItem.img,
    }
    setWishlistArr([...wishlistArr, newItemToAdd]);
    Toast.show('Elemento agregado', 0.3);
  };

  if (loading) {
    return (<View style={{ flex: 1, padding: layout.padding.xxxLarge }}>
        <ActivityIndicator animating={true} color={ colors.themeLightColors.primary } />
      </View>
    );
  }
  return (<View style={{ flex: 1, padding: layout.padding.xxxLarge}}>
      <Modal
        isVisible={modalVisible}
        onBackdropPress={() => setModalVisible(false)}
        avoidKeyboard={true}
        >
        <View 
          style={{
            backgroundColor: colors.themeLightColors.background,
            borderRadius: layout.radius.image,
            padding: layout.padding.large,
            height: layout.autoHeight.xxxLarge,
          }}>
          <Title>Recetas</Title>
          <ScrollView style={{ paddingVertical: layout.padding.xxxLarge }}>
            <List.Accordion title="Alimentación">
              {alimentacion.map((element, index) => {
                return (
                <View  
                  key={`${index}`}
                  style={{ paddingVertical: layout.padding.medium, flex: 1, flexDirection: 'row' }}>
                    <View style={{  padding: layout.padding.large  }}></View>
                    <View style={{ alignSelf: 'center' }} >
                    <Avatar.Image size={28} source={ element.img } />
                  </View>
                  <View >
                    <Button
                      color={colors.themeLightColors.text}
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
                    <View style={{ padding: layout.padding.large }}></View>
                  <View style={{ alignSelf: 'center' }} >
                    <Avatar.Image size={28} source={element.img} />
                  </View>
                  <View >
                    <Button
                      color={colors.themeLightColors.text}
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
                    <View style={{ padding: layout.padding.large }}></View>
                  <View style={{ alignSelf: 'center' }} >
                    <Avatar.Image size={28} source={element.img} />
                  </View>
                  <View >
                    <Button
                      color={colors.themeLightColors.text}
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
                    <View style={{ padding: layout.padding.large }}></View>
                  <View style={{ alignSelf: 'center' }} >
                    <Avatar.Image size={28} source={element.img} />
                  </View>
                  <View >
                    <Button
                      color={colors.themeLightColors.text}
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
                    <View style={{ padding: layout.padding.large }}></View>
                  <View style={{ alignSelf: 'center' }} >
                    <Avatar.Image size={28} source={element.img} />
                  </View>
                  <View >
                    <Button
                      color={colors.themeLightColors.text}
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
                    <View style={{ padding: layout.padding.large }}></View>
                  <View style={{ alignSelf: 'center' }} >
                    <Avatar.Image size={28} source={element.img} />
                  </View>
                  <View >
                    <Button
                      color={colors.themeLightColors.text}
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
                    <View style={{ padding: layout.padding.large }}></View>
                  <View style={{ alignSelf: 'center' }} >
                    <Avatar.Image size={28} source={element.img} />
                  </View>
                  <View >
                    <Button
                      color={colors.themeLightColors.text}
                      onPress={() => filteredSearchItemPress(element)}>
                      {element.title}
                    </Button>
                  </View>
                </View>
              ))}
            </List.Accordion>
          </ScrollView>
          <Button
            mode="outlined"
            onPress={() => setModalVisible(false)}>
              cancelar
            </Button>
        </View>
      </Modal>
      <View style={{ flexGrow: 1 }}>
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
        buttonColor= { colors.themeLightColors.primary }
        title="Añadir"
        useNativeFeedback={true}
        onPress={() => setModalVisible(true)}
      />
    </View>
  );
};

export default WishlistScreen;