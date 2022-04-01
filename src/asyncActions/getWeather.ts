import {ICoords, ILevels} from "../types/types";

const KEY = 'fd8e3d41be8210f6fa6bcf152c8b2482';

interface IData {
  value: string;
  levels: {
    [key: number]: ILevels,
  };
}

interface IAction<T> {
  type: string;
  payload: T;
}

type TGetCityLevels = (city: string) => void;

type TDispatch<T> = (action: IAction<T>) => void;

export const getWeather = (coords: ICoords) => {
  const URLcoord = `https://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.lon}&appid=${KEY}&units=metric&lang=ru`;

  return (dispatch: any) => (
    fetch(URLcoord)
      .then((resp) => resp.json())
      .then((data) => {
        dispatch({type: 'GET_TEMP', payload: data.main.temp});
        dispatch({type: 'GET_WIND', payload: data.wind});
        dispatch({type: 'GET_CITY', payload: data.name});
      })
      .catch(() => console.log('City not found!'))
  )
}

export const getCityLevels: TGetCityLevels = (city) => {
  const url = `https://api.geotree.ru/address.php?term=${city}`;

  return (dispatch: TDispatch<ILevels[]>) => (
    fetch(url)
      .then((resp) => resp.json())
      .then((data: IData[]) => {
        const levels = Object.values(data[0].levels)
          .map(({ geo_center, value, name_source}, id) => ({
          id,
          geo_center,
          value,
          name_source,
        }));
        dispatch({type: 'GET_LEVELS', payload: levels})
      })
      .catch(() => {
        dispatch({ type: 'GET_LEVELS', payload: [] })
        console.log('Не удалось получить координаты!')
      })
  )
}