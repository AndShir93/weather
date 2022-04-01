import {IState} from "../types/types";

export const defaultState: IState = {
  city: '',
  temp: '',
  cityList: [],
  coords: {lat: 56.866558, lon: 53.209415},
  wind: {deg: '', gust: '', speed: ''},
  description: '',
  levels: [],
}