import {useState, useEffect} from 'react';
import {weatherAPI} from '../services/weatherAPI';

const useWeatherAPI = (initialPath) => {
  // create state variables
  const [path, setPath] = useState(initialPath);
  const [weatherData, setWeatherData] = useState(null);
  const [locationError, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    // clear old search
    setWeatherData(null);
    setError(null);

    if (!path) {
      return;
    }
    let {endpoint, zipCode} = path;
    const getWeather = async () => {
      let localWeather = await weatherAPI(endpoint, {
        zipCode: zipCode,
      });

      if (localWeather.cod !== 200) {
        setIsLoading(false);
        setError(404);
        return;
      }
      setWeatherData(localWeather);
      setIsLoading(false);
    };
    getWeather();
  }, [path]);

  return {weatherData, locationError, isLoading, setPath};
};

export default useWeatherAPI;
