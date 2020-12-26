import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const WishlistItem = ({title, quantity}) => {
  return (
    <View styles={styles.container}>
      <View style={styles.view3}>
        <View style={styles.view1}>
          <Text style={styles.text1}>{title}</Text>
        </View>
        <View style={styles.view2}>
          <Text style={styles.text2}>{quantity}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 1,
    borderColor: 'red',
  },
  view1: {
    flexGrow: 1,
    borderWidth: 1,
  },
  view2: {
    flexShrink: 1,
    borderWidth: 1,
  },
  view3: {
    flexDirection: 'row',
  },
  text1: {
    color: '#595959',
  },
  text2: {
    color: '#595959',
  },
});

export default WishlistItem;
