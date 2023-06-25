import React from 'react';
import { useAppStore } from '@stores';
import config from '@config';

const Weather = () => {
  const { weather } = useAppStore();

  return (
    <div className="pb-10 border-b border-b-gray-200">
      <h2 className="text-2xl font-semibold">Weather</h2>

      {weather && (
        <div className="flex items-center gap-8 pt-4">
          <img
            id="wicon"
            src={`${config.weatherIconPath}${weather.weather[0]?.icon}.png`}
            alt="Weather icon"
          />
          <div className="text-3xl font-semibold">{weather.main.temp} ℃</div>
          <div className="text-3xl font-semibold">
            {weather.main.humidity} %
          </div>
        </div>
      )}
    </div>
  );
};

export default Weather;
