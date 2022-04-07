import { IState } from '../types/types';

export const defaultState: IState = {
  coords: { lat: 56.866558, lon: 53.209415 },
  levels: [],
  isSearch: false,
  weather: {
    city: '',
    temp: '',
    wind: { deg: '', gust: '', speed: '' },
    description: '',
  },
}