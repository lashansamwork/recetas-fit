import 'react-native-gesture-handler';
import React, {useCallback} from 'react';
import Colors from '../../theme/colors';
import {View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import BookScreen from '../../screens/BooksScreen';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Layout from '../../theme/layout';
import Icon from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Stack = createStackNavigator();

function BookStack() {
  const getHeaderOptions = useCallback((navigation) => {
    const options = {
      headerStyle: {
        backgroundColor: Colors.themeLightColors.primary,
      },
      headerRight: () => {
        return (
          <View style={{padding: Layout.padding.medium}}>
            <TouchableOpacity
              onPress={() => {
                navigation.toggleDrawer();
              }}>
              <Icon name="menu" size={30} color="white" />
            </TouchableOpacity>
          </View>
        );
      },
      headerLeft: () => {
        return (
          <View style={{padding: Layout.padding.medium}}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('InfoNavigator');
              }}>
              <Ionicons
                name="information-circle-outline"
                size={30}
                color="white"
              />
            </TouchableOpacity>
          </View>
        );
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    };
    return options;
  }, []);

  return (
    <Stack.Navigator initialRouteName="La Cocina Squat Fit">
      <Stack.Screen
        name="La Cocina Squat Fit"
        component={BookScreen}
        options={({navigation}) => getHeaderOptions(navigation)}
      />
    </Stack.Navigator>
  );
}

export default BookStack;
