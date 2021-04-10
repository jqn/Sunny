import {useEffect, useReducer} from 'react';

import Geolocation from 'react-native-geolocation-service';
import Geocoder from '@timwangdev/react-native-geocoder';

import {checkLocationPermissions} from '../services/permissions';

// Original example
// https://kentcdodds.com/blog/stop-using-isloading-booleans
// https://codesandbox.io/s/dark-lake-r07lr?file=/src/index.js:1256-1261
const geoPositionReducer = (state, action) => {
  switch (action.type) {
    case 'error': {
      return {
        ...state,
        status: 'rejected',
        error: action.error,
      };
    }
    case 'success': {
      return {
        ...state,
        status: 'resolved',
        position: action.position,
      };
    }
    case 'start': {
      return {
        ...state,
        status: 'pending',
      };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
};

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
