import React from 'react';
import {ILevels, IState} from "../types/types";
import {useAppSelector} from "../redux/store";
import {useDispatch} from "react-redux";
import {getWeather} from "../asyncActions/getWeather";

function ListCity() {
  const levels = useAppSelector((state: IState) => state.levels);
  const dispatch = useDispatch();
  const selectCity = (cityId: number, cities: ILevels[]): void => {
    const selectedCity = cities.find(({id}) => id === cityId);
    if (!selectedCity) return;
    const coords = selectedCity.geo_center;

    dispatch(getWeather(coords));
  };

  return (
    <>
      <ul className="city-list search-weather__list">
        {levels.map(({id, value}, index) =>
          <li
            key={id}
            value={id}
            className='city-list__item'
            onClick={({target}: any) => selectCity(target.value, levels)}
          >
            {value}
          </li>
        )}
      </ul>
    </>
  )
}

export default ListCity