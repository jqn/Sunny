import React from 'react';

import Details from './screens/Details';
import Search from './screens/Search';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

const RootContainer = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          // headerStyle: {
          //   backgroundColor: '#1E3FC2',
          // },
          // headerTintColor: '#FFF',
          // headerTitleStyle: {
          //   fontFamily: 'Lato-Bold',
          //   fontSize: 22,
          // },
          headerShown: false,
        }}>
        <Stack.Screen
          name="Details"
          component={Details}
          options={({navigation}) => ({
            // title: 'Broomfield',
            // headerRight: () => (
            //   <MaterialCommunityIcons
            //     name="magnify"
            //     size={35}
            //     color="#FFF"
            //     onPress={() => navigation.navigate('Search')}
            //     style={{paddingRight: 16}}
            //   />
            // ),
          })}
        />
        <Stack.Screen
          name="Search"
          component={Search}
          options={{
            headerBackTitleVisible: false,
            headerStyle: {
              backgroundColor: '#263252',
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootContainer;
