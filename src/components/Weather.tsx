import React, {useEffect} from 'react';
import {getWeather} from '../asyncActions/getWeather'
import {useAppSelector} from "../redux/store";
import {useDispatch} from "react-redux";

export default function Weather() {
  const dispatch = useDispatch();
  const temp = useAppSelector(state => state.temp);
  const city = useAppSelector(state => state.city);
  const coords = useAppSelector(state => state.coords);
  const description = useAppSelector(state => state.description);
  const wind = useAppSelector(state => state.wind);
  useEffect(() => {
    dispatch(getWeather(coords));
  }, [coords, dispatch]);

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
}