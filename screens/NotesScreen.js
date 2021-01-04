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
} from 'react-native-paper';
import WishlistItem from '../components/WishlistItem';
import layout from '../theme/layout';
import Modal from 'react-native-modal';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Toast from 'react-native-simple-toast';

const WishlistScreen = () => {
	const [modalVisible, setModalVisible] = useState(false);
	const [loading, setLoading] = useState(true);
	const [wishlistArr, setWishlistArr] = useState([]);
	const [itemName, setItemName] = useState(null);
	const [itemQuantity, setItemQuantity] = useState(null);



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
		return (
			<WishlistItem
				title={item.title}
				quantity={item.quantity}
				id={item.id}
				onDeletePressed={onDeletePressed}
			/>
		);
	};

	const onDeletePressed = (id) => {
		const updatedWishList = wishlistArr.filter((item) => item.id !== id);
		setWishlistArr(updatedWishList);
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
					<Title>Añadir notas</Title>
					<View style={{ paddingTop: layout.padding.medium }} />
					<TextInput
						mode="outlined"
						label="Nombre del árticulo"
						onChangeText={(val) => setItemName(val)}
					/>
					<View style={{ paddingTop: layout.padding.medium }} />
					<TextInput
						mode="outlined"
						label="Cantidad"
						onChangeText={(val) => setItemQuantity(val)}
					/>
					<View
						style={{ flexDirection: 'row', paddingTop: layout.padding.large }}>
						<View style={{ flex: 1 }}>
							<Button mode="outlined" onPress={() => setModalVisible(false)}>
								Cancelar
							</Button>
						</View>

						<View style={{ flex: 0.2 }} />
						<View style={{ flex: 1 }}>
							<Button
								mode="contained"
								onPress={() => {
									const wishListArrayLength = wishlistArr.length;

									if (!itemName) {
										Toast.show('El nombre no puede estar vacío');
										return;
									} else if (!itemQuantity) {
										Toast.show('la cantidad no puede estar vacía');
										return;
									}

									let itemToAdd = {
										id: wishListArrayLength,
										title: itemName,
										quantity: itemQuantity,
									};

									setItemName('');
									setItemQuantity('');
									setWishlistArr([...wishlistArr, itemToAdd]);
									setModalVisible(false);
								}}>
								Añadir
                                    </Button>
						</View>
					</View>
				</View>
			</Modal>

			<View style={{ flexGrow: 1 }}>
				<FlatList
					ListEmptyComponent={
						<View style={{ alignItems: 'center' }}>
							<Subheading>Tu lista esta vacia</Subheading>
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