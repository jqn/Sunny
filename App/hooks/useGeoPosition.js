import geoPositionReducer from '../reducers/geoPositionReducer';
import {useEffect, useReducer} from 'react';

import Geolocation from 'react-native-geolocation-service';
import Geocoder from '@timwangdev/react-native-geocoder';

import {checkLocationPermissions} from '../services/permissions';

const geoLocate = () => {
  return new Promise((resolve, reject) => {
    Geolocation.getCurrentPosition(
      (position) => {
        resolve(position);
      },
      (error) => {
        reject(error.message);
      },
      {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
    );
  });
};

const geoCode = (coords) => {
  if (coords) {
    return new Promise((resolve, reject) => {
      Geocoder.geocodePosition(coords)
        .then((position) => {
          resolve(position);
        })
        .catch((error) => {
          reject(error.message);
        });
    });
  }
  throw new Error('Please provide your location.');
};

const useGeoPosition = () => {
  const [state, dispatch] = useReducer(geoPositionReducer, {
    status: 'idle',
    position: null,
    error: null,
  });

  useEffect(() => {
    const fetchLocation = async () => {
      let status = await checkLocationPermissions();
      if (!status) {
        dispatch({
          type: 'error',
          error: new Error('Error capturing location'),
        });
        return;
      }

      dispatch({type: 'start'});

      let coordinates = await geoLocate();

      let {coords: {latitude, longitude} = {}} = coordinates;

      let location = await geoCode({
        lat: latitude,
        lng: longitude,
      });

      let [reverseGeolocation = {}] = location;

      dispatch({type: 'success', position: reverseGeolocation});
    };
    fetchLocation();
  }, []);

  return {...state};
};

export default useGeoPosition;
