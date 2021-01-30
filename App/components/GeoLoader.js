import React, {useState, useEffect, useCallback} from 'react';
import {ActivityIndicator, Image, StyleSheet, Text, View} from 'react-native';
import PropTypes from 'prop-types';

import useGeoPosition from '../hooks/useGeoPosition';

const styles = StyleSheet.create({
  container: {
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
    textAlign: 'center',
    fontFamily: 'Lato-Regular',
    paddingTop: 8,
  },
  headerImage: {resizeMode: 'cover', width: 300, height: 300},
  content: {
    flex: 1,
    padding: 16,
  },
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  largeTitle: {
    color: '#FFF',
    fontSize: 48,
    paddingBottom: 16,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    fontFamily: 'Lato-Black',
  },
  titleContainer: {
    alignItems: 'flex-start',
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
        <View style={styles.imageContainer}>
          <Image
            style={styles.headerImage}
            source={require('../images/geolocation.png')}
          />
        </View>
        <View style={styles.content}>
          <View style={styles.titleContainer}>
            <Text style={[styles.largeTitle, textColor]}>
              Sunny{'\n'}Side{'\n'}App
            </Text>
          </View>
          <ActivityIndicator color={iconColor} size="large" />
          <Text style={[styles.messageText, textColor]}>{message}</Text>
        </View>
      </View>
    );
  }

  if (status === 'resolved') {
    return (
      <View style={[styles.container, containerColor]}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.headerImage}
            source={require('../images/geolocation.png')}
          />
        </View>
        <View style={styles.content}>
          <View style={styles.titleContainer}>
            <Text style={[styles.largeTitle, textColor]}>
              Sunny{'\n'}Side{'\n'}App
            </Text>
          </View>
          <Text style={[styles.messageText, textColor]}>
            {position.locality}
          </Text>
          <Text style={[styles.messageText, textColor]}>
            {position.postalCode}
          </Text>
        </View>
      </View>
    );
  }

  if (status === 'rejected') {
    return (
      <View style={[styles.container, containerColor]}>
        <View style={styles.content}>
          <ActivityIndicator color={iconColor} size="large" />
          <Text style={[styles.messageText, textColor]}>{error.message}</Text>
        </View>
      </View>
    );
  }

  return <View />;
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
