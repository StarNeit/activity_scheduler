import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { Schedule, Weather } from '@types';
import { fetchWeather } from '@services';
import config from '@config';

interface AppStoreState {
  weather: Weather | null;
  schedules: Schedule[];
  createSchedule: (value: Schedule) => void;
  editSchedule: (value: Schedule) => void;
  deleteSchedule: (id: string) => void;

  getWeather: () => Promise<void>;
}

export const useAppStore = create<AppStoreState>()(
  devtools(
    persist(
      (set, get) => ({
        weather: null,
        schedules: [],
        createSchedule: (value) => {
          const schedules = get().schedules;

          set({ schedules: [...schedules, value] });
        },
        editSchedule: (value) => {
          const schedules = get().schedules;
          const index = schedules.findIndex((item) => item.id === value.id);
          if (index > -1) {
            schedules.splice(index, 1);
            schedules.splice(index, 0, value);
            set({ schedules });
          }
        },
        deleteSchedule: (id) => {
          const schedules = get().schedules;
          const index = schedules.findIndex((item) => item.id === id);

          if (index > -1) {
            schedules.splice(index, 1);
            set({ schedules: [...schedules] });
          }
        },
        getWeather: async () => {
          try {
            const { data } = await fetchWeather({
              lat: 33.44,
              lon: -94.04,
              appid: config.weatherApiKey
            });

            set({ weather: data });
          } catch (e) {
            console.log('[Error]', e);
          }
        }
      }),
      {
        name: 'app'
      }
    )
  )
);
