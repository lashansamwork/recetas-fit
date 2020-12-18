import React from 'react';
import {View, Button, TextInput} from 'react-native';

function HomeScreen({navigation}) {
  return (
    <View>
      <TextInput placeholder=" - code - " />
      <Button title="login" onPress={() => navigation.navigate('Book')} />
    </View>
  );
}

export default HomeScreen;
