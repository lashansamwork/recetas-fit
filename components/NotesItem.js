import React from 'react';
import {View} from 'react-native';
import {Divider, Button, Card, Paragraph} from 'react-native-paper';
import Layout from '../theme/layout';

const NotesItems = ({id, note, onDeletePressed}) => {
  return (
    <View>
      <View style={{flexDirection: 'column', flex: 1, alignItems: 'center'}}>
        <View style={{padding: Layout.padding.large}} />
        <View
          style={{
            flexGrow: 1,
            flexDirection: 'row',
            width: '100%',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Card style={{width: '100%', alignItems: 'center'}}>
            <Card.Content>
              <Paragraph style={{alignSelf: 'center'}}>{note}</Paragraph>
            </Card.Content>
            <Card.Actions>
              <Button
                onPress={() => {
                  onDeletePressed(id);
                }}>
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

export default NotesItems;
