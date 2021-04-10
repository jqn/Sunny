export const getWeatherIcon = (icon) => {
  switch (icon) {
    case '1232n':
      return require('../images/weatherIcons/1232n.png');
    case '50n':
      return require('../images/weatherIcons/50n.png');
    case '50d':
      return require('../images/weatherIcons/50d.png');
    case '13n':
      return require('../images/weatherIcons/13n.png');
    case '13d':
      return require('../images/weatherIcons/13d.png');
    case '11n':
      return require('../images/weatherIcons/11n.png');
    case '11d':
      return require('../images/weatherIcons/11d.png');
    case '10n':
      return require('../images/weatherIcons/10n.png');
    case '10d':
      return require('../images/weatherIcons/10d.png');
    case '09n':
      return require('../images/weatherIcons/09n.png');
    case '09d':
      return require('../images/weatherIcons/09d.png');
    case '04n':
      return require('../images/weatherIcons/04d.png');
    case '03n':
      return require('../images/weatherIcons/03n.png');
    case '03d':
      return require('../images/weatherIcons/03d.png');
    case '02n':
      return require('../images/weatherIcons/02n.png');
    case '02d':
      return require('../images/weatherIcons/02d.png');
    case '01n':
      return require('../images/weatherIcons/01n.png');
    case '01d':
    default:
      return require('../images/weatherIcons/01d.png');
  }
};
