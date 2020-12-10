import React from 'react';
import {View, StyleSheet} from 'react-native';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const styles = StyleSheet.create({
  container: {alignItems: 'center'},
});

export const WeatherIcon = ({icon}) => (
  <View style={styles.container}>
    <MaterialCommunityIcons
      name="weather-night-partly-cloudy"
      size={200}
      color="#FFF"
    />
  </View>
);
