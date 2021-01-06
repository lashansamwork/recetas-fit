import React from 'react';
import { View, Linking } from 'react-native';
import { List, Divider, Button, Avatar, IconButton } from 'react-native-paper';
import colors from "../theme/colors"

const WishlistItem = ({ id, title, link, img, onDeletePressed }) => {
  return (<View>
    <View style={{ flexDirection: 'row', flexShrink: 1, alignItems: 'center' }}>
      <View style={{ flex: 0.5 }}>
        <Avatar.Image size={ 28 } source={img} />
      </View>
      <View style={{ flexGrow: 1 }}>
        <List.Item title={ title } />
      </View>
      <View style={{ flexShrink: 1 }}>
        <IconButton
          icon="arrow-top-right-thick"
          color={ colors.themeLightColors.primary }
          size={20}
          onPress={ () => Linking.openURL(link) }
        />
      </View>
      <View style={{ flexShrink: 1 }}>
        <Button icon="trash-can-outline" onPress={ () => { onDeletePressed(id) }} color={ colors.themeLightColors.text }/>
      </View>
    </View>
    <Divider />
  </View>
  );
};

export default WishlistItem;
