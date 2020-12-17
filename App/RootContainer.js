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
          headerShown: false,
        }}>
        <Stack.Screen name="Details" component={Details} />
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
