import React, {useState, useEffect, useCallback} from 'react';
import {
  ActivityIndicator,
  Button,
  Linking,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import PropTypes from 'prop-types';

import {requestLocationPermissions} from '../services/permissions';

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
  largeTitle: {
    color: '#FFF',
    fontSize: 48,
    paddingBottom: 16,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    fontFamily: 'Lato-Black',
  },
  messageText: {
    color: '#FFF',
    fontSize: 23,
    textAlign: 'left',
    fontFamily: 'Lato-Regular',
  },
  loaderText: {
    color: '#FFF',
    fontSize: 23,
    textAlign: 'center',
    fontFamily: 'Lato-Regular',
    paddingTop: 8,
  },
  button: {
    backgroundColor: '#FFDE59',
    padding: 8,
    marginTop: 24,
  },
  pressedButton: {
    backgroundColor: '#FABD34',
    padding: 8,
    marginTop: 24,
  },
  largeLogo: {
    resizeMode: 'cover',
    width: 300,
    height: 300,
  },
  content: {
    justifyContent: 'center',
    flex: 1,
  },
  imageContainer: {
    alignItems: 'center',
  },
  titleContainer: {
    alignItems: 'flex-start',
  },
  messageContainer: {
    alignItems: 'flex-start',
    paddingVertical: 24,
  },
  buttonText: {
    color: '#000',
    fontSize: 28,
    textAlign: 'center',
    fontFamily: 'Lato-Black',
  },
  dot: {
    backgroundColor: '#000',
    width: 40,
    height: 40,
    position: 'absolute',
    bottom: 6,
    left: 0,
    borderRadius: 20,
  },
});

const GeoLoader = ({
  loaderText,
  appearance,
  loadingCallback,
  // message,
  permission,
}) => {
  const {status, error, runGeolocation} = useGeoPosition();
  // const [isLoading, setIsLoading] = useState(true);
  const [message, setMessage] = useState('Loading...');
  const [locationStatus, setLocationStatus] = useState(null);
  const [allowed, setAllowed] = useState(permission);

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

  const requestPermissions = async () => {
    let allowed = await requestLocationPermissions();
    console.log(
      '🚀 ~ file: GeoLoader.js ~ line 118 ~ requestPermissions ~ allowed',
      allowed,
    );
    if (allowed) {
      setMessage('Capturing Location');
      runGeolocation();
      return;
    }
  };

  const linkToSettings = async () => {
    await Linking.openSettings();
  };

  const hideLoader = useCallback(() => loadingCallback(false), [
    loadingCallback,
  ]);

  useEffect(() => {
    console.log(
      '🚀 ~ file: GeoLoader.js ~ line 141 ~ useEffect ~ status',
      status,
    );
    if (status === 'idle' || status === 'pending') {
      // setIsLoading(true);
    }

    if (status === 'error' || status === 'rejected') {
      // setIsLoading(false);
    }

    if (status === 'resolved') {
      hideLoader();
    }
  }, [status, hideLoader]);

  useEffect(() => {
    // if (error !== null) {
    //   setMessage(error.message);
    // }
    console.log('error', error);
  }, [error]);

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
        <Text style={[styles.messageText, textColor]}>{message}</Text>
      </View>
    </View>
  );

  // if (status === 'resolved') {
  //   return (
  //     <View style={[styles.container, containerColor]}>
  //       <View style={styles.content}>
  //         <View style={styles.imageContainer}>
  //           <Image
  //             style={styles.largeLogo}
  //             source={require('../images/logo.png')}
  //           />
  //           <View style={styles.dot} />
  //         </View>
  //         <View style={styles.titleContainer}>
  //           <Text style={[styles.largeTitle, textColor]}>
  //             Sunny{'\n'}Side{'\n'}Up
  //           </Text>
  //         </View>
  //         <View style={styles.messageContainer}>
  //           <Text style={[styles.messageText, textColor]}>
  //             Get Your Weather, {'\n'} Wherever You Are.
  //           </Text>
  //         </View>
  //         <Pressable
  //           onPress={() => {
  //             runGeolocation();
  //           }}
  //           style={({pressed}) => [
  //             pressed ? styles.pressedButton : styles.button,
  //           ]}>
  //           <Text style={styles.buttonText}>Enable Current Location</Text>
  //         </Pressable>
  //       </View>
  //     </View>
  //   );
  // }

  // if (status === 'rejected') {
  //   return (
  //     <View style={[styles.container, containerColor]}>
  //       <Text style={[styles.titleText, textColor]}>
  //         Error capturing location
  //       </Text>
  //       <Text style={[styles.messageText, textColor]}>
  //         Get your local weather!{'\n'} Please enable location from settings.
  //       </Text>
  //       <View style={styles.buttonContainer}>
  //         <Button
  //           onPress={() => handlePress()}
  //           title="Open Settings"
  //           color="#1E3FC2"
  //           accessibilityLabel="Navigate to settings"
  //         />
  //       </View>
  //     </View>
  //   );
  // }

  // Location capture loader
  // if (status === 'idle' || status === 'pending') {
  //   return (
  //     <View style={[styles.container, styles.content, containerColor]}>
  //       <ActivityIndicator color={iconColor} size="large" />
  //       <Text style={[styles.loaderText, textColor]}>{message}</Text>
  //     </View>
  //   );
  // }
};

GeoLoader.defaultProps = {
  appearance: 'dark',
  color: '#FFF',
  loaderText: 'Loading...',
  permission: false,
};

GeoLoader.propTypes = {
  appearance: PropTypes.string,
  color: PropTypes.string,
  loaderText: PropTypes.string,
};

export default GeoLoader;
