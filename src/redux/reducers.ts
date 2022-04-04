import { defaultState } from './defaultState';
import { ICoords, ILevels, IState, IWeather } from '../types/types';

interface IAction {
  type: 'GET_COORDS' | 'GET_LEVELS' | 'GET_WEATHER';
  payload: IWeather | ICoords | ILevels[];
}

export const reducer = (state = defaultState, action: IAction): IState => {
  switch (action.type) {
    case 'GET_WEATHER':
      return { ...state, weather: action.payload as IWeather }
    case 'GET_COORDS' :
      return { ...state, coords: action.payload as ICoords }
    case 'GET_LEVELS' :
      return { ...state, levels: action.payload as ILevels[] }
    default:
      return state
  }
}