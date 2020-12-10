import React, {useState, useEffect} from 'react';
import {
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

import forecastData from '../data/forecast';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#1E3FC2',
    paddingTop: 20,
    paddingHorizontal: 16,
  },
  forecastContainer: {
    paddingHorizontal: 10,
    marginTop: 20,
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
    marginRight: 10,
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

const Details = () => {
  const [forecast, setForecast] = useState([]);

  useEffect(() => {
    setForecast(groupForecastByDay(forecastData));
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <ScrollView>
        <SafeAreaView>
          <WeatherIcon />
          <H1>38°</H1>
          <BasicRow>
            <H2>{'Humidity: 11%'}</H2>
          </BasicRow>
          <BasicRow>
            <H2>{'Low: 34°'}</H2>
            <H2>{'High: 45°'}</H2>
          </BasicRow>
          <View style={styles.forecastContainer}>
            {forecast.map((day) => (
              <BasicRow key={day.day} style={styles.basicRow}>
                <P>{format(new Date(day.day), 'EEEE, MMM d')}</P>
                <View style={styles.group}>
                  <P style={styles.temp}>{Math.round(day.temp_max)}</P>
                  <P>{Math.round(day.temp_min)}</P>
                </View>
              </BasicRow>
            ))}
          </View>
        </SafeAreaView>
      </ScrollView>
    </View>
  );
};

export default Details;
