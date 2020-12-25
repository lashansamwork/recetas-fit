import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import WishlistItem from '../components/WishlistItem';

const WishlistScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.view1}>
        <Text style={styles.text1}> WishlistScreen </Text>
      </View>
      <View style={styles.view2}>
        <WishlistItem title="testItem" quantity="2kg" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#efefef',
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
  text1: {
    fontSize: 30,
    color: '#595959',
  },
});

export default WishlistScreen;
