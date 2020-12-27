import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { List, Divider, Button } from 'react-native-paper';
import Colors from "../theme/colors"
import Layout from "../theme/layout"

const WishlistItem = ({ id, title, quantity, onDeletePressed }) => {
  return (<View>
    <View style={{ flexDirection: 'row', flex: 1, alignItems: 'center' }}>
      <View style={{flex: 1}}>
        <List.Item
          title={title}
        />
      </View>
      <View style={{flex: 1}}>
        <List.Item
          title={quantity}
          right={props => <Button mode="text" onPress={()=>{ onDeletePressed(id) }}>DELETE</Button>}
        />
      </View>
    </View>
    <Divider/>
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
