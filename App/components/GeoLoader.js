import React, {useState, useEffect} from 'react';
import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';
import PropTypes from 'prop-types';

import useGeoPosition from '../hooks/useGeoPosition';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    bottom: 0,
    justifyContent: 'center',
    left: 0,
    position: 'absolute',
    right: 0,
    top: 0,
  },

  loaderText: {
    color: '#FFF',
    fontFamily: 'System',
    fontSize: 18,
    paddingTop: 8,
  },
});

const Loader = ({loaderText, appearance}) => {
  const {status, position, error, runGeolocation} = useGeoPosition();
  const [isLoading, setIsLoading] = useState(true);
  const [message, setMessage] = useState('Checking Permissions...');

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

  useEffect(() => {
    if (status === 'idle' || status === 'pending') {
      setIsLoading(true);
    }

    if (status === 'error' || status === 'rejected') {
      setIsLoading(false);
    }

    if (status === 'resolved') {
      setIsLoading(false);
    }
  }, [status]);

  useEffect(() => {
    if (error !== null) {
      setIsLoading(false);
    }
  }, [error]);

  return (
    <View style={[styles.container, containerColor]}>
      <ActivityIndicator color={iconColor} size="large" />
      <Text style={[styles.loaderText, textColor]}>{message}</Text>
    </View>
  );
};

Loader.defaultProps = {
  appearance: 'dark',
  color: '#FFF',
  loaderText: 'Loading...',
};

Loader.propTypes = {
  appearance: PropTypes.string,
  color: PropTypes.string,
  loaderText: PropTypes.string,
};

export default Loader;
