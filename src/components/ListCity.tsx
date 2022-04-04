import React from 'react';
import {ICoords, IState} from "../types/types";
import {useAppSelector} from "../redux/store";
import {useDispatch} from "react-redux";
import {getWeather} from "../asyncActions/getWeather";

type TSelectCity = (coords: ICoords) => () => void;

function ListCity() {
  const levels = useAppSelector((state: IState) => state.levels);
  const dispatch = useDispatch();
  const selectCity: TSelectCity = (coords) => () => {
    dispatch(getWeather(coords));
  }

  return (
    <>
      <ul className="city-list search-weather__list">
        {levels.map(({id, value, geo_center}) =>
          <li
            key={id}
            value={id}
            className='city-list__item'
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