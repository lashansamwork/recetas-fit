import React, {useRef} from 'react';
import Layout from '../theme/layout';
import Color from '../theme/colors'
import { Button } from 'react-native-paper';
import {
  StyleSheet,
  View,
  Image,
} from 'react-native';


function WelcomeScreen({navigation}) {

  function onContinueBtnFn() {
    navigation.replace('HomeNavigator');
  }

  return (
    <View style={{ flex: 1, backgroundColor: Color.backgroundColor}}>
      <View style={{ flexGrow: 1, padding: Layout.padding.xxxLarge }}>
        <Image 
          style={{ width: null, height: null, aspectRatio: null, flex : 1, borderRadius: Layout.radius.image  }}
          source={require('../assets/portada.jpg')}
        />
      </View>
      <View style={{ flexShrink: 1, paddingHorizontal: Layout.padding.xxxLarge, paddingBottom: Layout.padding.xxxLarge }}>
        <Button mode="contained" onPress={() => onContinueBtnFn()}>
          Seguir
        </Button>
      </View>
    </View>
  );
}

export default WelcomeScreen;
