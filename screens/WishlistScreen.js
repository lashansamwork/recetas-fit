import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const WishlistScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.view1}>
        <Text style={styles.text1}> WishlistScreen </Text>
      </View>
      <View style={styles.view2}>
        <Text>List items</Text>
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
    flex: 1,
    borderWidth: 1,
    borderColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
  view2: {
    flex: 8,
    borderWidth: 1,
    borderColor: 'red',
  },
  text1: {
    fontSize: 30,
    color: '#595959',
  },
});

export default WishlistScreen;
