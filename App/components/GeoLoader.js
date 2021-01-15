import React, {useState, useEffect} from 'react';
import {
  ActivityIndicator,
  Button,
  Linking,
  StyleSheet,
  Text,
  View,
} from 'react-native';
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
    padding: 16,
  },
  titleText: {
    color: '#FFF',
    fontFamily: 'System',
    fontSize: 22,
    paddingBottom: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  messageText: {
    color: '#FFF',
    fontFamily: 'System',
    fontSize: 18,

    textAlign: 'center',
  },
  buttonContainer: {
    paddingVertical: 16,
  },
});

const Loader = ({loaderText, appearance, loadingCallback}) => {
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

  const handlePress = async () => {
    await Linking.openSettings();
  };

  // useEffect(() => {
  //   if (status === 'idle' || status === 'pending') {
  //     setIsLoading(true);
  //   }

  //   if (status === 'error' || status === 'rejected') {
  //     setIsLoading(false);
  //   }

  //   if (status === 'resolved') {
  //     setIsLoading(false);
  //   }
  // }, [status]);

  // useEffect(() => {
  //   if (error !== null) {
  //     setMessage(error.message);
  //   }
  // }, [error]);

  if (status === 'idle' || status === 'pending') {
    return (
      <View style={[styles.container, containerColor]}>
        <ActivityIndicator color={iconColor} size="large" />
        <Text style={[styles.messageText, textColor]}>{message}</Text>
      </View>
    );
  }

  if (status === 'resolved') {
    loadingCallback(false);
  }

  if (status === 'rejected') {
    return (
      <View style={[styles.container, containerColor]}>
        <Text style={[styles.titleText, textColor]}>
          Error capturing location
        </Text>
        <Text style={[styles.messageText, textColor]}>
          Get your local weather!{'\n'} Please enable location from settings.
        </Text>
        <View style={styles.buttonContainer}>
          <Button
            onPress={() => handlePress()}
            title="Open Settings"
            color="#1E3FC2"
            accessibilityLabel="Navigate to settings"
          />
        </View>
      </View>
    );
  }
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
