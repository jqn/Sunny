import React, {useEffect} from 'react';

import Details from './screens/Details';
import Search from './screens/Search';
import Permissions from './screens/Permissions';

import {checkLocationPermissions} from './services/permissions';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {useApplicationContext} from './context/ApplicationContext';
import Loader from './components/Loader';

const Stack = createStackNavigator();

const RootContainer = () => {
  const {
    permissions,
    addPermission,
    removePermission,
  } = useApplicationContext();

  const [isLoading, setIsLoading] = React.useState(true);
  const {locationPermission} = permissions;
  console.log(
    '🚀 ~ file: RootContainer.js ~ line 26 ~ RootContainer ~ locationPermission',
    locationPermission,
  );

  useEffect(() => {
    const checkPermissions = async () => {
      let locationAllowed = await checkLocationPermissions();
      console.log(
        '🚀 ~ file: RootContainer.js ~ line 29 ~ checkPermissions ~ locationAllowed',
        locationAllowed,
      );
      addPermission(locationAllowed);
      setIsLoading(false);
    };
    checkPermissions();
  }, [addPermission]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        {locationPermission ? (
          <>
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
          </>
        ) : (
          <Stack.Screen name="Permissions" component={Permissions} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootContainer;
