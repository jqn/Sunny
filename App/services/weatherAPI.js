import Config from 'react-native-config';

const apiKey = Config.WEATHER_API_KEY;

export const weatherAPI = (path, {zipCode, coords}) => {
  let suffix = '';

  if (zipCode) {
    suffix = `zip=${zipCode}`;
  } else if (coords) {
    suffix = `lat=${coords.latitude}&lon=${coords.longitude}`;
  }

  return fetch(
    `https://api.openweathermap.org/data/2.5${path}?appid=${apiKey}&units=imperial&${suffix}`,
  ).then((response) => response.json());
};
