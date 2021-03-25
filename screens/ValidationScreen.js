import React, {useState} from 'react';
import {Keyboard, View, Text, Linking} from 'react-native';
import database from '@react-native-firebase/database';
import Toast from 'react-native-simple-toast';
import {AuthContext} from '../context-store/AuthContextProvider';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {Title, Paragraph, TextInput, Button} from 'react-native-paper';
import Colors from '../theme/colors';
import Layout from '../theme/layout';

function HomeScreen({navigation}) {
  const [code, setCode] = useState('');
  const {signIn} = React.useContext(AuthContext);

  const writeToBase = (username) => {
    database()
      .ref('/codes/' + `${username}` + '/')
      .update({
        isCodeUsed: true,
      });
  };
  const handleCode = () => {
    Keyboard.dismiss();
    let isNavigationCompleted = false;
    let isCodeUsedFlag = false;
    const reference = database().ref('/codes/').once('value');
    reference.then((snapshot) => {
      const codesObject = snapshot.val();
      const codesValueArray = Object.values(codesObject).map((x) => [
        x.code,
        x.isCodeUsed,
      ]);
      const codesUserArray = Object.keys(codesObject);
      codesValueArray.map((element, index) => {
        if (code === element[0]) {
          if (!element[1]) {
            signIn();
            writeToBase(codesUserArray[index]);
            isNavigationCompleted = true;
          } else {
            isCodeUsedFlag = true;
          }
        }
      });
      if (isNavigationCompleted === false && isCodeUsedFlag === false) {
        Toast.show(
          'Verifique la contraseña de validación nuevamente e intente nuevamente',
        );
      }
      if (isCodeUsedFlag === true) {
        Toast.show('La contraseña de un solo uso ya se usa');
      }
    });
  };
  return (
    <KeyboardAwareScrollView
      style={{flex: 1, backgroundColor: Colors.backgroundColor}}
      contentContainerStyle={{flex: 1, padding: Layout.padding.xxxLarge}}
      keyboardShouldPersistTaps={'handled'}>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <View style={{flex: 2, justifyContent: 'center', alignItems: 'center'}}>
          <Title>Bienvenido a Mi Cocina anabólica</Title>
        </View>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Paragraph style={{textAlign: 'center'}}>
            por favor introduce la contraseña de acceso que enviamos a tu
            correo.
          </Paragraph>
          <Paragraph
            style={{color: '#595959', fontWeight: '400'}}
            onPress={() => Linking.openURL('mailto:info@mariacasas.es')}>
            ( Preguntas:{' '}
            <Text style={{color: '#FC3158'}}>info@mariacasas.es</Text> )
          </Paragraph>
        </View>
      </View>
      <View style={{flex: 1}}>
        <View style={{flex: 1, justifyContent: 'center'}}>
          <TextInput
            secureTextEntry={true}
            mode="outlined"
            label="Contraseña de validación"
            onChangeText={(val) => setCode(val)}
            onSubmitEditing={() => handleCode()}
          />
        </View>
        <View style={{flex: 1}}>
          <Button mode="contained" onPress={() => handleCode()}>
            Verificar
          </Button>
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
}

export default HomeScreen;
