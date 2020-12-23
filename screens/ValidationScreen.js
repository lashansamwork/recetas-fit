import React, {useState} from 'react';
import {
  Image,
  Text,
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';
import database from '@react-native-firebase/database';
import Toast from 'react-native-simple-toast';

function HomeScreen({navigation}) {
  const [code, setCode] = useState('');
  const handleCode = () => {
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
          navigation.navigate('View My Books');
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
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <View style={styles.view1}>
        <Text style={styles.welcomeText}>Welcome to Recetas Fit!</Text>
      </View>
      <View style={styles.view2}>
        <Image
          source={require('../assets/MariaCasesLogo.png')}
          style={styles.imageLogo}
        />
      </View>
      <View style={styles.view3}>
        <Text style={styles.validationText}>
          Please enter your validation code to access the ebook
        </Text>
      </View>
      <View style={styles.view4}>
        <TextInput
          style={styles.textInput}
          placeholder="Verification code"
          onChangeText={(val) => setCode(val)}
          defaultValue={code}
        />
      </View>
      <View style={styles.view5}>
        <TouchableOpacity
          onPress={() => handleCode()}
          style={styles.verifyButtonContainer}>
          <Text style={styles.verifyButtonText}>Verify</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#CB5066',
  },
  welcomeText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
  },
  validationText: {
    textAlign: 'center',
    color: 'white',
    paddingHorizontal: 10,
    fontSize: 16,
  },
  verifyButtonContainer: {
    height: 40,
    width: '90%',
    margin: 10,
    elevation: 8,
    backgroundColor: '#349eeb',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    alignContent: 'center',
    justifyContent: 'center',
  },
  verifyButtonText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
    alignSelf: 'center',
    textTransform: 'uppercase',
  },
  textInput: {
    height: 40,
    width: '90%',
    padding: 13,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    textAlign: 'center',
    elevation: 8,
    borderRadius: 10,
  },
  imageLogo: {
    width: '90%',
    height: '90%',
    resizeMode: 'contain',
    alignItems: 'center',
    alignSelf: 'center',
  },
  viewLogo: {
    borderColor: 'black',
    borderWidth: 1,
    flex: 1,
    justifyContent: 'center',
  },
  view1: {
    flex: 1.8,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  view2: {
    flex: 5,
  },
  view3: {
    flex: 1,
    width: '90%',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  view4: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  view5: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 15,
  },
});

export default HomeScreen;
