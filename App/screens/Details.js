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
  const [permissions, setPermissions] = useState(null);
  const [deviceLocation, setDeviceLocation] = useState(null);
  const {weatherData, error, isLoading, setPath} = useWeatherAPI();

  useEffect(() => {
    const checkPermissions = async () => {
      let locationAllowed = await checkLocationPermissions();

      setPermissions(locationAllowed);
    };
    checkPermissions();
  }, []);

  useEffect(() => {
    if (deviceLocation !== null) {
      setPath({endpoint: '/weather', zipCode: deviceLocation.zipCode});
    }
  }, [deviceLocation, setPath]);

  if (permissions === null) {
    return <Loader />;
  }

  if (permissions === false) {
    return (
      <PermissionsLoader
        permission={permissions}
        appearance="light"
        loadingCallback={(value) => {
          setPermissions(value);
        }}
      />
    );
  }

  if (!deviceLocation && isLoading) {
    return (
      <GeoLoader
        permission={permissions}
        appearance="light"
        locationCallback={(location) => {
          setDeviceLocation(location);
        }}
      />
    );
  }

  if (error) {
    return <View />;
  }

  if (!weatherData && isLoading) {
    return <Loader />;
  }

  const {weather, main} = weatherData;

  return (
    <ImageBackground
      source={getWeatherImage('Clear')}
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
