import React from 'react';
import { View, Linking, StyleSheet } from 'react-native';
import { List, Divider, Button, Avatar, IconButton, Colors, Text } from 'react-native-paper';
import Layout from "../theme/layout"

const NotesItems = ({ id, note, onDeletePressed }) => {
  return (<View>
    <View style={{ flexDirection: 'column', flexShrink: 1, alignItems: 'center' }}>
      <View style={{ padding: Layout.padding.large }} ></View>
      <View style={{ flexGrow: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ fontSize: Layout.fontSizes.medium, fontStyle: 'italic' }}>{note}</Text>
      </View>

      <View style={{ flexShrink: 1 }}>
        <Button icon="trash-can-outline" onPress={() => { onDeletePressed(id) }} color={Colors.brown900}>
          borrar nota
        </Button>
      </View>

    </View>
    <Divider />
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

export default NotesItems;
