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

import WishlistItem from '../components/WishlistItem';

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

const WishlistScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [wishlistArr, setwishlistArr] = useState(data);
  const [textInput2Value, setTextInput2Value] = useState(null);
  const [textInput3Value, setTextInput3Value] = useState(null);

  const renderItem = ({item}) => {
    return <WishlistItem title={item.title} quantity={item.quantity} />;
  };

  return (
    <View style={styles.container}>
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View style={styles.view3}>
          <View style={styles.view4}>
            <View style={styles.view9}>
              <View style={styles.view5}>
                <Text>Add your grocery item</Text>
              </View>
              <View style={styles.view6}>
                <TextInput
                  style={styles.textInput2}
                  onChangeText={(value) => {
                    setTextInput2Value(value);
                  }}
                />
              </View>
              <View style={styles.view7}>
                <TextInput
                  keyboardType="decimal-pad"
                  style={styles.textInput3}
                  onChangeText={(value) => {
                    setTextInput3Value(value);
                  }}
                />
              </View>
              <View style={styles.view8}>
                {/* <TouchableHighlight
                  title="save"
                  style={styles.touchable1}
                  onPress={() => console.log('ok')}
                  onPress={() => {
                    setModalVisible();

                    setwishlistArr(
                      wishlistArr.push({textInput2Value, textInput3Value}),
                    );
                  }
                > */}

                <TouchableHighlight
                  style={styles.touchable1}
                  onPress={() => {
                    setModalVisible(!modalVisible);
                    console.log('save button pressed');
                    console.log(
                      '🚀 ~ file: WishlistScreen.js ~ line 70 ~ WishlistScreen ~ textInput2Value',
                      textInput2Value,
                    );
                    console.log(
                      '🚀 ~ file: WishlistScreen.js ~ line 71 ~ WishlistScreen ~ textInput3Value',
                      textInput3Value,
                    );
                    const newValue = {title: textInput2Value, quantity: textInput3Value};
                    setwishlistArr([...wishlistArr, newValue]);
                    console.log(
                      '🚀 ~ file: WishlistScreen.js ~ line 71 ~ WishlistScreen ~ wishlistArr',
                      wishlistArr,
                    );
                  }}>
                  <Text style={styles.text1}>Save</Text>
                </TouchableHighlight>
              </View>
            </View>
          </View>
        </View>
      </Modal>
      <View style={styles.view2}>
        <FlatList
          data={wishlistArr}
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
        onPress={() => setModalVisible(true)}
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
    // borderWidth: 1,
    // borderColor: 'red',
    paddingHorizontal: 20,
  },
  view3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
    // borderColor: 'orange',
    // borderWidth: 1,
  },
  view4: {
    flexShrink: 1,
    margin: 20,
    width: '90%',
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 5,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    // borderColor: 'orange',
    borderWidth: 1,
  },
  view5: {
    flexShrink: 1,
    paddingVertical: 5,
    paddingBottom: 15,
    width: '90%',
    // borderColor: 'blue',
    // borderWidth: 1,

    alignItems: 'center',
    justifyContent: 'center',
  },
  view6: {
    flexShrink: 1,
    paddingVertical: 5,
    width: '90%',
    // borderColor: 'red',
    // borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  view7: {
    flexShrink: 1,

    paddingVertical: 5,
    width: '90%',
    // borderColor: 'red',
    // borderWidth: 1,

    alignItems: 'center',
    justifyContent: 'center',
  },
  view8: {
    flexShrink: 1,
    paddingVertical: 5,
    paddingBottom: 10,
    paddingTop: 15,
    width: '90%',
    // borderColor: 'red',
    // borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  view9: {
    flexShrink: 1,
    // borderWidth: 1,
    width: '100%',
    margin: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
  },
  text1: {
    fontSize: 16,
    color: '#595959',
  },
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
  },
  touchable1: {
    height: 30,
    width: '100%',
    padding: 2,
    backgroundColor: 'lightblue',
    borderRadius: 5,
    elevation: 2,
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 16,
  },
  textInput2: {
    width: '100%',
    height: 30,
    borderWidth: 1,
    borderRadius: 5,
    fontSize: 16,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
  textInput3: {
    width: '100%',
    height: 30,
    borderWidth: 1,
    borderRadius: 5,
    fontSize: 16,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
});

export default WishlistScreen;
