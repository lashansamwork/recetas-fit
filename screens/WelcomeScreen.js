import React, {useRef} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  Button,
} from 'react-native';

function WelcomeScreen({navigation}) {

  function onContinueBtnFn() {
    navigation.navigate('Validation');
  }

  return (
    <View style={styles.container}>
      <View style={styles.view1}>
        <Text style={styles.text1} accessibilityRole="header">
          Welcome
        </Text>
      </View>
      <View style={styles.view2}>
        <Image
          source={require('../assets/portada.jpg')}
          style={styles.image1}
        />
      </View>
      <View style={styles.view3}>
        <Text style={styles.text2} textAlign="center">
          Bienvenido a Mi Cocina anabólica, por favor introduce la contraseña de
          acceso que enviamos a tu correo.
        </Text>
        <Text dataDetectorType="email" textAlign="center">
          ( Preguntas: info@mariacasas.es )
        </Text>
      </View>
      <View style={styles.view4}>
        <TouchableOpacity
          style={styles.touchableOpacity1}
          onPress={() => onContinueBtnFn()}>
          <Text style={styles.text3}>Continue</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#efefef',
    justifyContent: 'center',
    alignItems: 'flex-end',
    //borderColor: 'purple',
    //borderWidth: 3,
  },
  view1: {
    flex: 1,
    //borderColor: 'blue',
    width: '100%',
    //backgroundColor: 'blue',
    //borderWidth: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  view2: {
    flex: 8,
    borderColor: 'green',
    borderWidth: 3,
    //backgroundColor: 'green',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
  },
  view3: {
    flex: 1,
    //borderColor: 'yellow',
    //borderWidth: 3,
    //backgroundColor: 'yellow',
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  view4: {
    flex: 1,
    //borderColor: 'orange',
    //backgroundColor: 'orange',
    //borderWidth: 3,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text1: {
    color: '#595959',
    alignSelf: 'center',
    fontSize: 21,
    fontWeight: 'bold',
    textAlign: 'center',
    textTransform: 'uppercase',
    paddingTop: 25,
  },
  text2: {
    textAlign: 'center',
    fontSize: 14,
  },
  text3: {
    color: '#fff',
    alignSelf: 'center',
    fontSize: 16,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: -1,
  },
  image1: {
    width: '60%',
    height: '90%',
    borderRadius: 8,
  },
  touchableOpacity1: {
    width: '90%',
    height: 40,
    borderRadius: 10,
    backgroundColor: '#349eeb',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default WelcomeScreen;
