import { ICoords, ILevels, IWind } from '../types/types';

const KEY = 'fd8e3d41be8210f6fa6bcf152c8b2482';

interface IData {
  value: string;
  levels: {
    [key: number]: ILevels,
  };
}

interface IWeather {
  city: string;
  temp: string;
  wind: IWind;
  description: string;
}

interface IAction<T> {
  type: string;
  payload: T;
}

type TGetCityLevels = (city: string) => void;

type TGetWeather = (coords: ICoords) => void;

type TDispatch<T> = (action: IAction<T>) => void;

export const getCityLevels: TGetCityLevels = (city) => {
  const url = `https://api.geotree.ru/address.php?term=${city}`;

  return (dispatch: TDispatch<ILevels[] | boolean>) => (
    fetch(url)
      .then((resp) => resp.json())
      .then((data: IData[]) => {
        const levels = Object.values(data[0].levels)
          .map(({ geo_center, value, name_source }, id) => ({
          id,
          geo_center,
          value,
          name_source,
        }));
        dispatch({ type: 'GET_LEVELS', payload: levels });
        dispatch({ type: 'GET_IS_SEARCH', payload: false });
      })
      .catch(() => {
        dispatch({ type: 'GET_LEVELS', payload: [] })
        console.log('Не удалось получить координаты!')
      })
  )
}

export const getWeather: TGetWeather = (coords) => {
  const params = `?lat=${coords.lat}&lon=${coords.lon}&appid=${KEY}&units=metric&lang=ru`;
  const url = `https://api.openweathermap.org/data/2.5/weather${params}`;

  return (dispatch: TDispatch<IWeather>) => (
    fetch(url)
      .then((resp) => resp.json())
      .then((data) => {
        const weather: IWeather = {
          city: data.name,
          temp:  data.main.temp,
          wind: data.wind,
          description: data.weather[0].description,
        };
        dispatch({ type: 'GET_WEATHER', payload: weather });
      })
      .catch(() => console.log('City not found!'))
  );
}