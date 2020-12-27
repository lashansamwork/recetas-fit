import React, { useState } from 'react';
import {
  Keyboard,
  View,
  StyleSheet,
  Text,
  Linking,
} from 'react-native';
import database from '@react-native-firebase/database';
import Toast from 'react-native-simple-toast';
import { AuthContext } from '../context-store/AuthContextProvider'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { Title, Paragraph, TextInput, Button } from 'react-native-paper';
import Colors from "../theme/colors"
import Layout from "../theme/layout"

function HomeScreen({ navigation }) {
  const [code, setCode] = useState('');
  const { signIn } = React.useContext(AuthContext);
  const handleCode = () => {
    Keyboard.dismiss();
    let isNavigationCompleted = false;
    console.log('show toast = ' + isNavigationCompleted + ' at line 18');
    const reference = database().ref('/codes/').once('value');
    console.log(reference);
    reference.then((snapshot) => {
      const codesObject = snapshot.val();
      let codesArray = Object.keys(codesObject).map((k) => codesObject[k]);
      console.log('snapshot values: ', codesArray);
      codesArray.map((key) => {
        console.log('comparing ', key, typeof key, ' to code ', typeof code);
        if (code === key) {
          console.log('showToast = ' + isNavigationCompleted + ' line 28');
          console.log('key correct!');
          signIn();
          isNavigationCompleted = true;
        }
      });
      console.log('check after nav');
      if (isNavigationCompleted === false) {
        console.log('showToast = ' + isNavigationCompleted + ' at line 35');
        Toast.show('Please check the validation code again and try again.');
        console.log('line 36');
      }
    });
  };
  return (
    <KeyboardAwareScrollView style={{ flex: 1, backgroundColor: Colors.backgroundColor }} contentContainerStyle={{ flex: 1, padding: Layout.padding.xxxLarge }} keyboardShouldPersistTaps={'handled'}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <View style={{ flex: 2, justifyContent: 'center', alignItems: 'center' }}>
          <Title>
            Bienvenido a Mi Cocina anabólica
            </Title>
        </View>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Paragraph style={{ textAlign: 'center' }}>
            por favor introduce la contraseña de acceso que enviamos a tu correo.
            </Paragraph>
          <Paragraph
            style={{ color: '#595959', fontWeight: '400', }}
            onPress={() => Linking.openURL('mailto:info@mariacasas.es')}>
            ( Preguntas: <Text style={{ color: '#FC3158' }}>info@mariacasas.es</Text> )
            </Paragraph>
        </View>
      </View>
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1, justifyContent: 'center' }}>
          <TextInput
            secureTextEntry={true}
            mode="outlined"
            label="Valication code"
            keyboardType=""
            onChangeText={(val) => setCode(val)}
            onSubmitEditing={() => handleCode()}
          />
        </View>
        <View style={{ flex: 1 }}>
          <Button mode="contained" onPress={() => handleCode()}>
            Verify
          </Button>
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
}

export default HomeScreen;
