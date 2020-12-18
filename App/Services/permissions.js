import {Platform} from 'react-native';

import {
  PERMISSIONS,
  checkMultiple,
  requestMultiple,
} from 'react-native-permissions';

const PLATFORM_PERMISSIONS =
  Platform.OS === 'ios'
    ? [PERMISSIONS.IOS.LOCATION_WHEN_IN_USE, PERMISSIONS.IOS.LOCATION_ALWAYS]
    : [
        PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
        PERMISSIONS.ANDROID.ACCESS_COARSE_LOCATION,
      ];

const [locationWhenInUseStatus, locationAlwaysStatus] = PLATFORM_PERMISSIONS;

export const checkLocationPermissions = async () => {
  const statuses = await checkMultiple(PLATFORM_PERMISSIONS);
  console.log(
    '🚀 ~ file: permissions.js ~ line 21 ~ checkLocationPermissions ~ statuses',
    statuses,
  );
  if (
    statuses[locationWhenInUseStatus] !== 'granted' ||
    statuses[locationAlwaysStatus] !== 'granted'
  ) {
    return 'denied';
  }
  return 'granted';
};

export const requestLocationPermissions = async () => {
  const results = await requestMultiple(PLATFORM_PERMISSIONS);
  if (
    results[locationWhenInUseStatus] !== 'granted' ||
    results[locationAlwaysStatus] !== 'granted'
  ) {
    return 'denied';
  }
  return 'granted';
};
