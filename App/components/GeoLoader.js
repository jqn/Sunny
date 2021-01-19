import React, {useState, useEffect, useCallback} from 'react';
import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';
import PropTypes from 'prop-types';

import useGeoPosition from '../hooks/useGeoPosition';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    bottom: 0,
    left: 0,
    position: 'absolute',
    right: 0,
    top: 0,
    padding: 16,
  },
  messageText: {
    color: '#FFF',
    fontSize: 23,
    textAlign: 'left',
    fontFamily: 'Lato-Regular',
  },
});

const GeoLoader = ({appearance, locationCallback}) => {
  const {status, error, position} = useGeoPosition();
  const [message, setMessage] = useState('Loading...');

  const getColorScheme = () => {
    if (appearance === 'light') {
      return {
        containerColor: {backgroundColor: '#FFF'},
        textColor: {color: '#000'},
        iconColor: '#000',
      };
    }
    return {
      containerColor: {backgroundColor: '#000'},
      textColor: {color: '#FFF'},
      iconColor: '#FFF',
    };
  };

  const {containerColor, textColor, iconColor} = getColorScheme();

  const hideLoader = useCallback(() => {
    if (position) {
      let {postalCode, locality} = position;
      locationCallback({zipCode: postalCode, city: locality});
    }
  }, [locationCallback, position]);

  useEffect(() => {
    console.log(
      '🚀 ~ file: GeoLoader.js ~ line 141 ~ useEffect ~ status',
      status,
    );
    if (status === 'idle' || status === 'pending') {
      setMessage('Capturing location');
    }

    if (status === 'error' || status === 'rejected') {
      setMessage('Error Capturing location');
      hideLoader();
    }

    if (status === 'resolved') {
      hideLoader();
    }
  }, [status, hideLoader]);

  if (status === 'idle' || status === 'pending') {
    return (
      <View style={[styles.container, containerColor]}>
        <View style={styles.content}>
          <ActivityIndicator color={iconColor} size="large" />
          <Text style={[styles.messageText, textColor]}>{message}</Text>
        </View>
      </View>
    );
  }

  return (
    <View style={[styles.container, containerColor]}>
      <View style={styles.content}>
        <ActivityIndicator color={iconColor} size="large" />
        <Text style={[styles.messageText, textColor]}>{error.message}</Text>
      </View>
    </View>
  );
};

GeoLoader.defaultProps = {
  appearance: 'dark',
  locationCallback: () => {},
};

GeoLoader.propTypes = {
  appearance: PropTypes.string,
  locationCallback: PropTypes.func,
};

export default GeoLoader;
