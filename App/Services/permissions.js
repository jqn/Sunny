import {Platform} from 'react-native';

import {
  PERMISSIONS,
  checkMultiple,
  requestMultiple,
  RESULTS,
  request,
} from 'react-native-permissions';

const PLATFORM_PERMISSIONS =
  Platform.OS === 'ios'
    ? [PERMISSIONS.IOS.LOCATION_WHEN_IN_USE, PERMISSIONS.IOS.LOCATION_ALWAYS]
    : [
        PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
        PERMISSIONS.ANDROID.ACCESS_COARSE_LOCATION,
      ];

const [locationWhenInUseStatus, locationAlwaysStatus] = PLATFORM_PERMISSIONS;

// Permissions statuses
// unavailable - This feature is not available (on this device / in this context)
// denied - The permission has not been requested / is denied but can be requested
// limited - The permission is granted but with limitations
// blocked - The permission is denied and can not be requested anymore
// granted - The permission is granted
export const checkLocationPermissions = async () => {
  const statuses = await checkMultiple(PLATFORM_PERMISSIONS);
  let permissionsGranted = false;
  if (
    statuses[locationWhenInUseStatus] === 'granted' ||
    statuses[locationAlwaysStatus] === 'granted'
  ) {
    permissionsGranted = true;
  } else {
    permissionsGranted = false;
  }
  return permissionsGranted;
  // if (
  //   statuses[locationWhenInUseStatus] === 'unavailable' ||
  //   statuses[locationAlwaysStatus] === 'unavailable'
  // ) {
  //   return 'unavailable';
  // }
  // if (
  //   statuses[locationWhenInUseStatus] === 'denied' ||
  //   statuses[locationAlwaysStatus] === 'denied'
  // ) {
  //   return 'denied';
  // }
  // if (
  //   statuses[locationWhenInUseStatus] === 'limited' ||
  //   statuses[locationAlwaysStatus] === 'limited'
  // ) {
  //   return 'limited';
  // }
  // if (
  //   statuses[locationWhenInUseStatus] === 'blocked' ||
  //   statuses[locationAlwaysStatus] === 'blocked'
  // ) {
  //   return 'blocked';
  // }
  // return 'unknown';
};

export const requestLocationPermissions = async () => {
  const results = await requestMultiple(PLATFORM_PERMISSIONS);
  let permissionsGranted = false;
  if (
    results[locationWhenInUseStatus] === 'granted' ||
    results[locationAlwaysStatus] === 'granted'
  ) {
    permissionsGranted = true;
  } else {
    permissionsGranted = false;
  }
  return permissionsGranted;
};
