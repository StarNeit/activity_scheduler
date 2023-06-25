import { Weather } from '@types';

export type WeatherRequest = {
  lat: number;
  lon: number;
  appid: string;
};

export type WeatherResponse = Weather;
