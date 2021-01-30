import React, {useState, useCallback} from 'react';
import {Linking, Image, Pressable, StyleSheet, Text, View} from 'react-native';
import PropTypes from 'prop-types';

import {requestLocationPermissions} from '../services/permissions';

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

const PermissionsLoader = ({appearance, loadingCallback, permission}) => {
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

  const {containerColor, textColor} = getColorScheme();

  const requestPermissions = async () => {
    let permissionStatus = await requestLocationPermissions();

    if (!permissionStatus) {
      setAllowed('rejected');
      return;
    }
    hideLoader();
  };

  const linkToSettings = async () => {
    await Linking.openSettings();
  };

  const hideLoader = useCallback(() => loadingCallback(true), [
    loadingCallback,
  ]);

  // Initial permission request
  if (!allowed) {
    return (
      <View style={[styles.container, containerColor]}>
        <View style={styles.content}>
          <View style={styles.imageContainer}>
            <Image
              style={styles.largeLogo}
              source={require('../images/logo.png')}
            />
            <View style={styles.dot} />
          </View>
          <View style={styles.titleContainer}>
            <Text style={[styles.largeTitle, textColor]}>
              Sunny{'\n'}Side{'\n'}App
            </Text>
          </View>
          <View style={styles.messageContainer}>
            <Text style={[styles.messageText, textColor]}>
              Get Your Weather, {'\n'} Wherever You Are.
            </Text>
          </View>
          <Pressable
            onPress={() => {
              requestPermissions();
            }}
            style={({pressed}) => [
              pressed ? styles.pressedButton : styles.button,
            ]}>
            <Text style={styles.buttonText}>Enable Current Location</Text>
          </Pressable>
        </View>
      </View>
    );
  }
  // Default
  return (
    <View style={[styles.container, containerColor]}>
      <View style={styles.content}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.largeLogo}
            source={require('../images/logo.png')}
          />
          <View style={styles.dot} />
        </View>
        <View style={styles.titleContainer}>
          <Text style={[styles.largeTitle, textColor]}>
            Sunny{'\n'}Side{'\n'}App
          </Text>
        </View>
        <View style={styles.messageContainer}>
          <Text style={[styles.messageText, textColor]}>
            Don't Miss Anything,{'\n'}Enable location to stay on top of
            important weather conditions.
          </Text>
        </View>
        <Pressable
          onPress={() => {
            linkToSettings();
          }}
          style={({pressed}) => [
            pressed ? styles.pressedButton : styles.button,
          ]}>
          <Text style={styles.buttonText}>Go To Settings</Text>
        </Pressable>
      </View>
    </View>
  );
};

PermissionsLoader.defaultProps = {
  appearance: 'dark',
  permission: false,
  loadingCallback: () => {},
};

PermissionsLoader.propTypes = {
  appearance: PropTypes.string,
  permission: PropTypes.bool,
  loadingCallback: PropTypes.func,
};

export default PermissionsLoader;
