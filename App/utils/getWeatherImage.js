/* eslint-disable global-require */

const images = {
  Thunderstorm: require('../images/thunder.png'),
  Drizzle: require('../images/light-rain.png'),
  Rain: require('../images/heavy-rain.png'),
  Snow: require('../images/snow.png'),
  Clear: require('../images/clear.png'),
  Clouds: require('../images/heavy-cloud.png'),
  Hail: require('../images/hail.png'),
};

export default (weather) => images[weather];
