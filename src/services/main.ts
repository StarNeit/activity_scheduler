import axios, { AxiosResponse } from 'axios';
import { WeatherRequest, WeatherResponse } from './type';

export const fetchWeather = (
  params: WeatherRequest
): Promise<AxiosResponse<WeatherResponse>> => {
  return axios.get<WeatherResponse>('', { params });
};
