import 'react-native-gesture-handler';
import React, {useMemo} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import InfoScreen from '../screens/InfoScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import Colors from '../theme/colors';

const Stack = createStackNavigator();

function InfoNavigator() {
  const getHeaderOptions = useMemo(() => {
    const options = {
      headerStyle: {
        backgroundColor: Colors.themeLightColors.primary,
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    };

    return options;
  }, []);

  return (
    <Stack.Navigator
      initialRouteName="InfoScreen"
      screenOptions={{
        headerBackTitle: ' ',
        headerTitle: 'Información de Seguridad'
      }}>
      <Stack.Screen
        name="InfoScreen"
        component={InfoScreen}
        options={getHeaderOptions}
      />
    </Stack.Navigator>
  );
}

export default InfoNavigator;
