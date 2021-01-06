import React from 'react';
import { View, Linking, StyleSheet } from 'react-native';
import { List, Divider, Button, Avatar, IconButton, Colors, Text, Card, Title, Paragraph } from 'react-native-paper';
import Layout from "../theme/layout"

const NotesItems = ({ id, note, onDeletePressed }) => {
  return (
    <View>
      <View style={{ flexDirection: 'column', flex: 1, alignItems: 'center', }}>
        <View style={{ padding: Layout.padding.large, }} ></View>
        <View style={{ flexGrow: 1, width: '100%', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', }}>
          <Card style={{ width: '100%', alignItems: 'center' }}>
            <Card.Content>
              <Paragraph style={{ alignSelf: 'center' }}>{note}</Paragraph>
            </Card.Content>
            <Card.Actions>
              <Button onPress={ () => { onDeletePressed(id) }}>
                Borrar nota
              </Button>
            </Card.Actions>
          </Card>
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
