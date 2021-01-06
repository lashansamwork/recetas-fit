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
import NotesItem from '../components/NotesItem';
import layout from '../theme/layout';
import Modal from 'react-native-modal';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Toast from 'react-native-simple-toast';

const NotesScreen = () => {
	const [modalVisible, setModalVisible] = useState(false);
	const [loading, setLoading] = useState(true);
	const [notesArr, setNotesArr] = useState([]);
	const [itemName, setItemName] = useState(null);

	useEffect(() => {
		getNotesList();
	}, []);

	useEffect(() => {
		if (notesArr) {
			setNotesList();
		}
	}, [notesArr]);

	const setNotesList = async () => {
		const jsonValue = JSON.stringify(notesArr);
		AsyncStorage.setItem('@notesList', jsonValue);
	};

	const getNotesList = async () => {
		const notesListJson = await AsyncStorage.getItem('@notesList');
		const notesListData = notesListJson != null ? JSON.parse(notesListJson) : null;
		if (notesListData) {
			setNotesArr(notesListData);
		}
		setTimeout(() => {
			setLoading(false);
		}, 1000);
	};

	const renderItem = ({ item }) => {
   
		console.log("🚀 ~ file: NotesScreen.js ~ line 53 ~ renderItem ~ item.note 👉", item)
		
		return (
			<NotesItem
				note={item.note}
				id={item.id}
				onDeletePressed={onDeletePressed}
			/>
		);
	};

	const onDeletePressed = (id) => {
		const updatedNoteList = notesArr.filter((item) => item.id !== id);
		setNotesArr(updatedNoteList);
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
					<View style={{ paddingTop: layout.padding.medium }} />
					<TextInput
						mode="outlined"
						label="Cantidad"
						onChangeText={(val) => setItemName(val)}
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
									const notesListArrayLength = notesArr.length;

									if (!itemName) {
										Toast.show('La nota no puede estar vacía');
										return;
									} 

									let itemToAdd = {
										id: notesListArrayLength,
										note: itemName,
										
									};

									setItemName('');
									setNotesArr([...notesArr, itemToAdd]);
									setModalVisible(false);
									
                                    console.log("🚀 ~ file: NotesScreen.js ~ line 123 ~ NotesScreen ~ notesArr", notesArr)


									
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
					data={notesArr}
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

export default NotesScreen;