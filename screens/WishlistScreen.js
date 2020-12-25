import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';

import WishlistItem from '../components/WishlistItem';

const WishlistScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.view2}>
        <WishlistItem title="testItem" quantity="2kg" />
      </View>
      <ActionButton
        buttonColor="rgba(231,76,60,1)"
        title="Add"
        useNativeFeedback={true}
        onPress={() => console.log('notes tapped!')}>
        {/* <View style={styles.view4}>
        </View> */}
      </ActionButton>
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
  view4: {
    borderWidth: 1,
  },
  text1: {
    fontSize: 30,
    color: '#595959',
  },
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
  },
});

export default WishlistScreen;
