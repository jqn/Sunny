import React, {useState, useEffect} from 'react';
import {
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  StatusBar,
  View,
} from 'react-native';

import {format} from 'date-fns';

import {WeatherIcon} from '../components/WeatherIcon';
import {BasicRow} from '../components/List';
import {H1, H2, P} from '../components/Text';
import Header from '../components/Header';
import MaterialAlert from '../components/MaterialAlert';

import forecastData from '../data/forecast';
import getWeatherImage from '../utils/getWeatherImage';

import {
  checkLocationPermissions,
  requestLocationPermissions,
} from '../Services/permissions';

import useGeoPosition from '../hooks/useGeoPosition';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#1E3FC2',
  },
  forecastContainer: {
    paddingHorizontal: 8,
    marginTop: 8,
  },
  basicRow: {
    justifyContent: 'space-between',
  },
  group: {
    flexDirection: 'row',
  },
  temp: {
    fontWeight: '700',
    fontFamily: 'Lato-Regular',
    marginRight: 8,
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

const groupForecastByDay = (list) => {
  const data = {};

  list.forEach((item) => {
    const [day] = item.dt_txt.split(' ');
    if (data[day]) {
      if (data[day].temp_max < item.main.temp_max) {
        data[day].temp_max = item.main.temp_max;
      }

      if (data[day].temp_min > item.main.temp_min) {
        data[day].temp_min = item.main.temp_min;
      }
    } else {
      data[day] = {
        temp_min: item.main.temp_min,
        temp_max: item.main.temp_max,
      };
    }
  });

  const formattedList = Object.keys(data).map((key) => ({
    day: key,
    ...data[key],
  }));

  return formattedList;
};

const Details = ({navigation}) => {
  const [forecast, setForecast] = useState([]);
  const [locationPermission, setLocationPermission] = useState(null);
  const [alertVisible, setAlertVisible] = useState(false);
  const {status, position, error, runGeolocation} = useGeoPosition();

  useEffect(() => {
    setForecast(groupForecastByDay(forecastData));
  }, []);

  useEffect(() => {
    const checkPermissions = async () => {
      let status = await checkLocationPermissions();
      setLocationPermission(status);
    };
    checkPermissions();
  }, []);

  useEffect(() => {
    const requestPermissions = async () => {
      let results = await requestLocationPermissions();
      if (!results) {
        setAlertVisible(true);
      }
    };
    if (locationPermission === false) {
      requestPermissions();
    }
  }, [locationPermission]);

  return (
    <ImageBackground
      source={getWeatherImage('Clear')}
      style={styles.container}
      imageStyle={styles.image}>
      <StatusBar barStyle="light-content" />
      <Header
        headerTitle="Broomfield"
        rightButton
        onRightButtonPress={() => navigation.navigate('Search')}
      />
      <ScrollView style={styles.detailsContainer}>
        <SafeAreaView>
          <WeatherIcon icon={'01d'} />
          <H1 style={styles.textDecoration}>38°</H1>
          <BasicRow>
            <H2 style={styles.textDecoration}>{'Humidity: 11%'}</H2>
          </BasicRow>
          <BasicRow>
            <H2 style={styles.textDecoration}>{'Low: 34°'}</H2>
            <H2 style={styles.textDecoration}>{'High: 45°'}</H2>
          </BasicRow>
          <View style={styles.forecastContainer}>
            {forecast.map((day) => (
              <BasicRow key={day.day} style={styles.basicRow}>
                <P style={styles.textDecoration}>
                  {format(new Date(day.day), 'EEEE, MMM d')}
                </P>
                <View style={styles.group}>
                  <P style={[styles.temp, styles.textDecoration]}>
                    {Math.round(day.temp_max)}
                  </P>
                  <P style={styles.textDecoration}>
                    {Math.round(day.temp_min)}
                  </P>
                </View>
              </BasicRow>
            ))}
          </View>
          <MaterialAlert
            visible={alertVisible}
            cancelTitle="Cancel"
            confirmTitle="OK"
            onCancelPress={() => {
              setAlertVisible(false);
            }}
            onConfirmPress={() => {
              setAlertVisible(false);
            }}
            title="Enable Location"
            message="Help us bring you the local weather. Please give us access to your location."
          />
        </SafeAreaView>
      </ScrollView>
    </ImageBackground>
  );
};

export default Details;
