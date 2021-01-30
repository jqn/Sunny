import {useState, useEffect} from 'react';
import {weatherAPI} from '../services/weatherAPI';

const useForecastAPI = (initialPath) => {
  // create state variables
  const [path, setPath] = useState(initialPath);
  const [forecastData, setForecastData] = useState(null);
  const [locationError, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    // clear old search
    setForecastData(null);
    setError(null);

    if (!path) {
      return;
    }
    let {endpoint, zipCode} = path;
    const getWeather = async () => {
      let localForecast = await weatherAPI(endpoint, {
        zipCode: zipCode,
      });

      if (localForecast.cod !== '200') {
        setIsLoading(false);
        setError(404);
        return;
      }
      setForecastData(localForecast);
      setIsLoading(false);
    };
    getWeather();
  }, [path]);

  return {forecastData, locationError, isLoading, setPath};
};

export default useForecastAPI;
