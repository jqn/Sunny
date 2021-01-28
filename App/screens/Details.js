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
import PermissionsLoader from '../components/PermissionsLoader';
import GeoLoader from '../components/GeoLoader';
import Loader from '../components/Loader';

import forecastData from '../data/forecast';
import weatherData from '../data/weather';
import getWeatherImage from '../utils/getWeatherImage';
import {weatherApi} from '../services/wheaterAPI';

import {checkLocationPermissions} from '../services/permissions';

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
  const [currentWeather, setCurrentWeather] = useState({});
  const [locationPermission, setLocationPermission] = useState(null);
  const [alertVisible, setAlertVisible] = useState(false);
  const [position, setPosition] = useState({zipCode: '', city: ''});
  const [loadingPermissions, setLoadingPermissions] = useState(true);
  const [loadingLocation, setLoadingLocation] = useState(true);
  const [loadingWeather, setLoadingWeather] = useState(true);
  const [loadingForecast, setLoadingForecast] = useState(true);

  useEffect(() => {
    const checkPermissions = async () => {
      let permissionStatus = await checkLocationPermissions();

      setLocationPermission(permissionStatus);
      setLoadingPermissions(false);
    };
    checkPermissions();
  }, []);

  useEffect(() => {
    let getWeather = async () => {
      let localWeather = await weatherApi('/weather', {
        zipcode: position.zipCode,
      });
      console.log(
        '🚀 ~ file: Details.js ~ line 121 ~ getWeather ~ localWeather',
        localWeather,
      );

      if (localWeather.cod === '200') {
        setCurrentWeather(localWeather);
        setLoadingWeather(false);
      }
    };
    if (position.zipCode) {
      getWeather();
    }
  }, [position, loadingWeather]);

  useEffect(() => {
    let getForecast = async () => {
      let localForecast = await weatherApi('/forecast', {
        zipcode: position.zipCode,
      });
      console.log(
        '🚀 ~ file: Details.js ~ line 139 ~ getForecast ~ localForecast',
        localForecast,
      );
      if (localForecast.cod === '200') {
        setForecast(groupForecastByDay(localForecast.list));
        setLoadingWeather(false);
        setLoadingForecast(false);
      }
    };
    if (currentWeather.main) {
      getForecast();
    }
  }, [currentWeather, position.zipCode]);

  if (loadingPermissions) {
    return (
      <PermissionsLoader
        permission={locationPermission}
        appearance="light"
        loadingCallback={(value) => {
          setLoadingPermissions(false);
        }}
      />
    );
  }

  if (loadingLocation) {
    return (
      <GeoLoader
        permission={locationPermission}
        appearance="light"
        locationCallback={(location) => {
          setPosition(location);
          setLoadingLocation(false);
        }}
      />
    );
  }

  if (loadingWeather) {
    return <Loader />;
  }

  if (loadingForecast) {
    return <Loader />;
  }

  if (!currentWeather.main) {
    console.log(
      '🚀 ~ file: Details.js ~ line 192 ~ Details ~ currentWeather',
      currentWeather,
    );
    return <Loader />;
  }
  const {weather, main} = currentWeather;

  return (
    <ImageBackground
      source={getWeatherImage('Clear')}
      style={styles.container}
      imageStyle={styles.image}>
      <StatusBar barStyle="light-content" />
      <Header
        headerTitle={position.city}
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
