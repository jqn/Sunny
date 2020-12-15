import React from 'react';
import {Image, View, StyleSheet} from 'react-native';

import {getWeatherIcon} from '../utils/getWeatherIcon';

const styles = StyleSheet.create({
  container: {alignItems: 'center'},
  icon: {
    width: 200,
    height: 200,
    tintColor: '#FFF',
  },
});

export const WeatherIcon = ({icon}) => (
  <View style={styles.container}>
    <Image
      source={getWeatherIcon(icon)}
      style={styles.icon}
      resizeMode="contain"
    />
  </View>
);
