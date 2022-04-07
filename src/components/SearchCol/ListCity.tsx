import React from 'react';
import { ICoords, IState, TRenderView } from '../../types/types';
import { useAppSelector } from '../../redux/store';
import { useDispatch } from 'react-redux';
import { getWeather } from '../../asyncActions/getWeather';
import style from './style.module.scss';

type TSelectCity = (coords: ICoords) => () => void;

const ListCity: TRenderView = () => {
  const levels = useAppSelector((state: IState) => state.levels);
  const dispatch = useDispatch();
  const selectCity: TSelectCity = (coords) => () => {
    dispatch(getWeather(coords));
  }

  return (
    <>
      <ul className={style.listCities}>
        {levels.map(({ id, value, geo_center }) =>
          <li
            key={id}
            value={id}
            className={style.listCitiesItem}
            onClick={selectCity(geo_center)}
          >
            {value}
          </li>
        )}
      </ul>
    </>
  )
}

export default ListCity