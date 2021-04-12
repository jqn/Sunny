import React, {useState, useEffect} from 'react';
import {
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  StatusBar,
  View,
} from 'react-native';

import {WeatherIcon} from '../components/WeatherIcon';
import {BasicRow} from '../components/List';
import {H1, H2} from '../components/Text';
import Header from '../components/Header';
import PermissionsLoader from '../components/PermissionsLoader';
import GeoLoader from '../components/GeoLoader';
import Loader from '../components/Loader';
import ForeCast from '../components/ForeCast';

import getWeatherImage from '../utils/getWeatherImage';

import useWeatherAPI from '../hooks/useWeatherAPI';

import {checkLocationPermissions} from '../services/permissions';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#1E3FC2',
  },
  image: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'cover',
  },
  detailsContainer: {
    backgroundColor: 'rgba(0,0,0,0.2)',
    paddingTop: 16,
    paddingHorizontal: 16,
  },
});

const Details = ({navigation}) => {
  const [deviceLocation, setDeviceLocation] = useState(null);
  const {weatherData, error, isLoading, setPath} = useWeatherAPI();
  console.log(
    '🚀 ~ file: Details.js ~ line 48 ~ Details ~ isLoading',
    isLoading,
  );

  useEffect(() => {
    if (deviceLocation) {
      console.log(
        '🚀 ~ file: Details.js ~ line 55 ~ useEffect ~ deviceLocation',
        deviceLocation,
      );
      setPath({endpoint: '/weather', zipCode: deviceLocation.zipCode});
    }
  }, [setPath, deviceLocation]);

  // return <Loader />;

  if (!weatherData && !isLoading) {
    return <Loader />;
  }

  if (isLoading) {
    return <GeoLoader appearance="light" />;
  }

  if (error) {
    return <View />;
  }

  const {weather, main} = weatherData;

  return (
    <ImageBackground
      source={getWeatherImage(weather[0].main)}
      style={styles.container}
      imageStyle={styles.image}>
      <StatusBar barStyle="light-content" />
      <Header
        headerTitle={deviceLocation.city}
        rightButton
        onRightButtonPress={() => navigation.navigate('Search')}
      />
      <ScrollView style={styles.detailsContainer}>
        <SafeAreaView>
          <WeatherIcon icon={weather[0].icon} />
          <H1 style={styles.textDecoration}>{`${Math.round(main.temp)}°`}</H1>
          <BasicRow>
            <H2
              style={styles.textDecoration}>{`Humidity: ${main.humidity}%`}</H2>
          </BasicRow>
          <BasicRow>
            <H2 style={styles.textDecoration}>{`Low: ${Math.round(
              main.temp_min,
            )}°`}</H2>
            <H2 style={styles.textDecoration}>{`High: ${Math.round(
              main.temp_max,
            )}°`}</H2>
          </BasicRow>
          <ForeCast location={deviceLocation} />
        </SafeAreaView>
      </ScrollView>
    </ImageBackground>
  );
};

export default Details;
