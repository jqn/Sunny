import React, {useState} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import PropTypes from 'prop-types';

import {BasicRow} from './List';
import {H1, H2, P} from './Text';

import {format} from 'date-fns';

import useForecastAPI from '../hooks/useForecastAPI';
import {useEffect} from 'react';

const styles = StyleSheet.create({
  container: {
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

const ForeCast = ({forecast, location}) => {
  const {forecastData, error, isLoading, setPath} = useForecastAPI();
  const [localForecast, setLocalForecast] = useState(forecast);

  useEffect(() => {
    if (location.zipCode) {
      setPath({endpoint: '/forecast', zipCode: location.zipCode});
    }
  }, [setPath, location]);

  useEffect(() => {
    if (forecastData) {
      setLocalForecast(groupForecastByDay(forecastData.list));
    }
  }, [forecastData]);

  if (error) {
    return <View />;
  }

  if (!forecastData && isLoading) {
    return <View style={styles.container} />;
  }

  return (
    <View style={styles.container}>
      {localForecast.map((day) => (
        <BasicRow key={day.day} style={styles.basicRow}>
          <P style={styles.textDecoration}>
            {format(new Date(day.day), 'EEEE, MMM d')}
          </P>
          <View style={styles.group}>
            <P style={[styles.temp, styles.textDecoration]}>
              {Math.round(day.temp_max)}
            </P>
            <P style={styles.textDecoration}>{Math.round(day.temp_min)}</P>
          </View>
        </BasicRow>
      ))}
    </View>
  );
};

ForeCast.defaultProps = {
  forecast: [],
  location: {},
};

ForeCast.propTypes = {
  forecast: PropTypes.array,
  location: PropTypes.object,
};

export default ForeCast;
