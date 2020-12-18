import React, {useState} from 'react';
import {View, Button, TextInput} from 'react-native';
import database from '@react-native-firebase/database';
import BookScreen from './BookScreen';

const reference = database().ref('/codes/').once('value');

reference.then((snapshot) => {
  console.log('Codes from DB: ', snapshot.val());
});

function HomeScreen({navigation}) {
  const [code, setCode] = useState('');
  const handleCode = () => {
    reference.then((snapshot) => {
      snapshot.val().map((key) => {
        console.log('each code', key);
        console.log('comparing ', key, typeof key, ' to code ', typeof code);
        if (code === key) {
          console.log('key correct!');
          navigation.navigate('Book');
        }
      });
    });
  };
  return (
    <View>
      <TextInput
        placeholder=" - code - "
        onChangeText={(val) => setCode(val)}
        defaultValue={code}
      />
      <Button title="validate" onPress={() => handleCode()} />
    </View>
  );
}

export default HomeScreen;
