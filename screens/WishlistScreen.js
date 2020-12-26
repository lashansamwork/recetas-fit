import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Modal,
  TouchableHighlight,
  TextInput,
} from 'react-native';
import ActionButton from 'react-native-action-button';
import {FlatList} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import { Button } from 'react-native-paper';

import WishlistItem from '../components/WishlistItem';

const WishlistScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const data = [
    {
      title: 'apple',
      quantity: '2kg',
    },
    {
      title: 'orange',
      quantity: '1kg',
    },
    {
      title: 'pineapple',
      quantity: '5kg',
    },
  ];

  const renderItem = ({item}) => {
    return <WishlistItem title={item.title} quantity={item.quantity} />;
  };

  return (
    <View style={styles.container}>
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View style={styles.view3}>
          <View style={styles.view4}>
            <Text>Add your grocery item</Text>
            <TextInput/>
            <TextInput/>
            <TouchableHighlight
              title="save"
              style={styles.touchable1}
              onPress={() => {
                setModalVisible(!modalVisible);
              }}>
              <Text style={styles.text1}>Save</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>
      <View style={styles.view2}>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item, index) => {
            console.log('printing item ', item, ' and ', index);
            return `${index}`;
          }}
        />
      </View>
      <ActionButton
        buttonColor="rgba(231,76,60,1)"
        title="Add"
        useNativeFeedback={true}
        onPress={() => setModalVisible()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#efefef',
    borderWidth: 1,
  },
  view1: {
    flexShrink: 1,
    borderWidth: 1,
    borderColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
  view2: {
    flexGrow: 1,
    borderWidth: 1,
    borderColor: 'red',
    paddingHorizontal: 20,
  },
  view3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  view4: {
    margin: 20,
    width: '90%',
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  text1: {
    alignSelf: 'center',
    fontSize: 16,
    color: '#595959',
  },
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
  },
  touchable1: {
    height: 36,
    width: '90%',
    backgroundColor: 'lightblue',
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    justifyContent: 'center',
  },
});

export default WishlistScreen;
