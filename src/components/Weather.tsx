import React, { useEffect } from 'react';
import { getWeather } from '../asyncActions/getWeather'
import { useAppSelector } from '../redux/store';
import { useDispatch } from 'react-redux';
import { TRenderView } from '../types/types';

const Weather: TRenderView = () => {
  const dispatch = useDispatch();
  const temp = useAppSelector(state => state.weather.temp);
  const city = useAppSelector(state => state.weather.city);
  const coords = useAppSelector(state => state.coords);
  const description = useAppSelector(state => state.weather.description);
  const wind = useAppSelector(state => state.weather.wind);
  useEffect(() => {
    dispatch(getWeather(coords));
  }, [ coords, dispatch ]);

  return (
    <div className="weather">
      <h1 className="weather__title">Погода</h1>
      <div className="weather__data">
        <p className="weather__city">{city}</p>
        <p className="weather__temp">Температура: {temp}°</p>
        <p className="weather__description">{description}</p>
        <p className="weather__wind">Ветер: {wind.speed} м/с</p>
      </div>
    </div>
  )
};

export default Weather;