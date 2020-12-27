import React, { useState, useEffect } from 'react';
import {
  View,
  StyleSheet,
  Text
} from 'react-native';
import ActionButton from 'react-native-action-button';
import { FlatList } from 'react-native-gesture-handler';
import Colors from "../theme/colors"
import { Button, Title, TextInput, ActivityIndicator, Subheading } from 'react-native-paper';
import WishlistItem from '../components/WishlistItem';
import layout from '../theme/layout';
import Modal from 'react-native-modal';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Toast from 'react-native-simple-toast';

const WishlistScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [loading, setLoading]= useState(true);
  const [wishlistArr, setWishlistArr] = useState([]);
  const [itemName, setItemName] = useState(null);
  const [itemQuantity, setItemQuantity] = useState(null);

  useEffect(()=>{
    getWishList()
  }, []);

  useEffect(()=>{
    if(wishlistArr){
      settWishList()
    }
  }, [wishlistArr]);


  const settWishList = async ()=> {
    const jsonValue = JSON.stringify(wishlistArr);
    AsyncStorage.setItem('@wishList', jsonValue);
  }


  const getWishList = async ()=> {
    const wishListJson = await AsyncStorage.getItem('@wishList');
    const wishListData = wishListJson != null ?  JSON.parse(wishListJson) : null;
    if(wishListData){
      setWishlistArr(wishListData);
    }
    setTimeout(()=>{
      setLoading(false);
    }, 1000)
  }


  const renderItem = ({ item }) => {
    return <WishlistItem title={item.title} quantity={item.quantity} id={item.id} onDeletePressed={onDeletePressed} />;
  };

  const onDeletePressed = (id) => {
    const updatedWishList = wishlistArr.filter((item) => item.id !== id);
    setWishlistArr(updatedWishList);
  }

  if(loading){
    return (<View style={{ flex: 1, padding: layout.padding.xxxLarge}}>
      <ActivityIndicator animating={true} color={Colors.accent} />
    </View>)
  }

  return (
    <View style={{ flex: 1, padding: layout.padding.xxxLarge }}>
      <Modal isVisible={modalVisible} onBackdropPress={()=>setModalVisible(false)} avoidKeyboard={true}>
        <View style={{ backgroundColor: 'white', borderRadius: layout.radius.image, padding: layout.padding.large}}>
          <Title>Add your grocery item</Title>
          <View style={{ paddingTop: layout.padding.medium }}/>
          <TextInput
            mode="outlined"
            label="Item name"
            onChangeText={(val) => setItemName(val)}
          />
          <View style={{ paddingTop: layout.padding.medium }}/>
          <TextInput
            mode="outlined"
            label="Quantitiy"
            onChangeText={(val) => setItemQuantity(val)}
          />
          <View style={{ flexDirection: 'row', paddingTop: layout.padding.large }}>
            <View style={{ flex: 1 }}>
              <Button mode="outlined" onPress={() => setModalVisible(false)}>
                Cancel
              </Button>
            </View>
            <View style={{ flex: 0.2 }}/>
            <View style={{ flex: 1 }}>
              <Button mode="contained" onPress={() => {
                const wishListArrayLength = wishlistArr.length;

                if(!!!itemName){
                  Toast.show('Item name cannot be empty');
                  return;
                } else if(!!!itemQuantity){
                  Toast.show('Item quantity cannot be empty');
                  return;
                }

                let itemToAdd = {
                  id: wishListArrayLength,
                  title: itemName,
                  quantity: itemQuantity,
                };

                setItemName("");
                setItemQuantity("");
                setWishlistArr([...wishlistArr, itemToAdd]);
                setModalVisible(false);
              }}>
                  Add item
              </Button>
            </View>
          </View>
        </View>
      </Modal>
      <View style={{ flexGrow: 1}}>
        <FlatList
          ListEmptyComponent={<View style={{ alignItems: 'center' }}><Subheading>Your Wishlist is empty</Subheading></View>}
          data={wishlistArr}
          renderItem={renderItem}
          keyExtractor={(item, index) => {
            return `${index}`;
          }}
        />
      </View>
      <ActionButton
        buttonColor={Colors.themeLightColors.primary}
        title="Add"
        useNativeFeedback={true}
        onPress={() => setModalVisible(true)}
      />
    </View>
  );
};

const styles = StyleSheet.create({

});

export default WishlistScreen;
