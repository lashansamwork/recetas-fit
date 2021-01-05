import React from 'react';
import { View, Linking, StyleSheet } from 'react-native';
import { List, Divider, Button, Avatar, IconButton, Colors } from 'react-native-paper';
import Layout from "../theme/layout"

const WishlistItem = ({ id, title, link, img, onDeletePressed }) => {
  return (<View>
    <View style={{ flexDirection: 'row', flex: 1, alignItems: 'center' }}>
      <View style={{ flex: 0.5}}>
        <Avatar.Image size={28} source={img} />
      </View>
      <View style={{ flex: 1 }}>
        
        <List.Item
          title={title}
        />
      </View>
      <View >
      <IconButton
          icon="camera"
          color={Colors.red500}
          size={20}
          onPress={() => Linking.openURL(link)}
        />
      </View>
      <View style={{ flex: 1 }}>
        <List.Item
          right={props => <Button mode="text" onPress={() => { onDeletePressed(id) }}>DELETE</Button>}
        />
      </View>
    </View>
    <Divider />
  </View>
    // <View styles={styles.container}>
    //   <View style={styles.view3}>
    //     <View style={styles.view1}>
    //       <Text style={styles.text1}>{title}</Text>
    //     </View>
    //     <View style={styles.view2}>
    //       <Text style={styles.text2}>{quantity}</Text>
    //     </View>
    //   </View>
    // </View>
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
