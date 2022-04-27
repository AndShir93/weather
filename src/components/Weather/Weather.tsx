import React, { useEffect } from 'react';
import { getWeather } from '../../asyncActions/getWeather'
import { useAppSelector } from '../../redux/store';
import { useDispatch } from 'react-redux';
import { TRenderView } from '../../types/types';
import style from './style.module.scss';
import rain from '../../img/rainy-5.svg';
import cloudyDay1 from '../../img/cloudy-day-1.svg';
import cloudyDay2 from '../../img/cloudy-day-2.svg';
import cloudyDay3 from '../../img/cloudy-day-3.svg';
import rainy1 from '../../img/rainy-1.svg';
import cloudy from '../../img/cloudy.svg';
import day from '../../img/day.svg';

enum TTypeWeather {
  cloudyDay1 = 'облачно с прояснениями',
  cloudyDay2 = 'небольшая облачность',
  cloudyDay3 = 'переменная облачность',
  rainy1 = 'небольшой дождь',
  cloudy = 'пасмурно',
  day = 'ясно',
}

export type IIconsMap = {
  [key in TTypeWeather as string]: string;
}

const iconsMap: IIconsMap = {
  'облачно с прояснениями': cloudyDay1,
  'небольшая облачность': cloudyDay2,
  'переменная облачность': cloudyDay3,
  'небольшой дождь': rainy1,
  'пасмурно': cloudy,
  'ясно': day,
};

type TRenderContent = (city: string) => JSX.Element;

const Weather: TRenderView = () => {
  const dispatch = useDispatch();
  const coords = useAppSelector(state => state.coords);
  const { temp, city, description, wind } = useAppSelector(state => state.weather);

  const ucFirst = (description: string): string => {
    return description[0].toUpperCase() + description.slice(1);
  };

  const renderContent: TRenderContent = (city) => {
    if (!city) return <img src={rain} className={style.weatherIco} alt="rain" />

    return (
    <div className={style.weatherData}>
        <p className={style.weatherCity}>{city}</p>
      <p className={style.weatherTemp}>Температура: {temp}°</p>
      <p className={style.weatherWind}>Ветер: {wind.speed} м/с</p>
      <div className={style.description}>
        <p className={style.descriptionTitle}>{ucFirst(description)}</p>
        <img src={iconsMap[description]} alt={description} />
      </div>
    </div>
    );
  }

  useEffect(() => {
    dispatch(getWeather(coords));
  }, [ coords, dispatch ]);

  return (
    <div className={style.weather}>
      <h1 className={style.weatherTitle}>Погода</h1>
      {renderContent(city)}
    </div>
  )
};

export default Weather;
