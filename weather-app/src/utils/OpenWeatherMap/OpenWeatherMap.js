import axios from 'axios';

const baseURL = 'https://api.openweathermap.org/data/2.5';

const OpenWeatherMap = axios.create({
  baseURL,
});

const enrichRequestWithAppId = (config) => {
  config.params.appid = '9c03c54d80c8e0e24015b9f750162653';

  return config;
}

const enrichRequestWithCelsiusUnits = (config) => {
  config.params.units = 'metric';

  return config;
};

OpenWeatherMap.interceptors.request.use(enrichRequestWithAppId);
OpenWeatherMap.interceptors.request.use(enrichRequestWithCelsiusUnits);

export default OpenWeatherMap;