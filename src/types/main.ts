export enum ActivityType {
  Mowing = 'Mowing',
  Fertilisation = 'Fertilisation',
  Irrigation = 'Irrigation',
  Aeration = 'Aeration'
}

export enum PitchType {
  Pitch1 = 'Pitch 1',
  Pitch2 = 'Pitch 2',
  Pitch3 = 'Pitch 3',
  Pitch4 = 'Pitch 4',
  Pitch5 = 'Pitch 5'
}

export type Schedule = {
  id: string;
  type: ActivityType | null;
  date: string;
  user: string;
  pitch: PitchType | null;
};

export type WeatherDetail = {
  id: number;
  main: string;
  description: string;
  icon: string;
};

export type WeatherMain = {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
};

export type Weather = {
  weather: WeatherDetail[];
  main: WeatherMain;
};
