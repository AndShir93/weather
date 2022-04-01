import {ICoords} from "../types/types";

const KEY = 'fd8e3d41be8210f6fa6bcf152c8b2482';

export interface IData {
  value: string;
  levels: ILevels;
}

interface ILevels {
  geo_center: ICoords;
  name_source: string;
  value: string;
}

export const getWeather = (coords: ICoords) => {
  const URLcoord = `https://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.lon}&appid=${KEY}&units=metric&lang=ru`;

  return (dispatch: any) => (
    fetch(URLcoord)
      .then(resp => resp.json())
      .then(data => {
        dispatch({type: 'GET_TEMP', payload: data.main.temp})
        dispatch({type: 'GET_WIND', payload: data.wind})
      })
      .catch(() => console.log('City not found!'))
  )
}

export const getCityLevels = async (city: string) => {
  const url = `https://api.geotree.ru/address.php?term=${city}`;

  const levels = await fetch(url)
    .then((resp) => resp.json())
    .then((data: IData[]) => data[0])
    .catch(() => console.log('Не удалось получить координаты!'));

  return levels;
}