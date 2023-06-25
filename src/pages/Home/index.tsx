import React, { ReactElement, useEffect } from 'react';
import Schedules from './Schedules';
import Weather from './Weather';
import { useAppStore } from '@stores';

const Home = (): ReactElement => {
  const { getWeather } = useAppStore();

  useEffect(() => {
    getWeather();
  }, []);

  return (
    <div className="py-5 mb-5 px-4">
      <Weather />
      <Schedules />
    </div>
  );
};

export default Home;
