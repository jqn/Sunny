/* eslint-disable global-require */

const images = {
  Clear: require('../images/clear.png'),
  Hail: require('../images/hail.png'),
  'Heavy Cloud': require('../images/heavy-cloud.png'),
  'Light Cloud': require('../images/light-cloud.png'),
  'Heavy Rain': require('../images/heavy-rain.png'),
  'Light Rain': require('../images/light-rain.png'),
  Showers: require('../images/showers.png'),
  Sleet: require('../images/sleet.png'),
  Snow: require('../images/snow.png'),
  Thunder: require('../images/thunder.png'),
};

export default (weather) => images[weather];
