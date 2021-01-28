const weatherData = {
  coord: {
    lon: -122.4079,
    lat: 37.7929,
  },
  weather: [
    {
      id: 500,
      main: 'Rain',
      description: 'light rain',
      icon: '10n',
    },
    {
      id: 701,
      main: 'Mist',
      description: 'mist',
      icon: '50n',
    },
  ],
  base: 'stations',
  main: {
    temp: 49.3,
    feels_like: 43.74,
    temp_min: 46.99,
    temp_max: 52,
    pressure: 1005,
    humidity: 87,
  },
  visibility: 6437,
  wind: {
    speed: 8.05,
    deg: 140,
  },
  rain: {
    '1h': 0.32,
  },
  clouds: {
    all: 90,
  },
  dt: 1611823493,
  sys: {
    type: 1,
    id: 5817,
    country: 'US',
    sunrise: 1611846993,
    sunset: 1611883714,
  },
  timezone: -28800,
  id: 0,
  name: 'San Francisco',
  cod: 200,
};

export default weatherData;
