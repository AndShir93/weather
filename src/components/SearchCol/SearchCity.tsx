import React, { FormEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import { TRenderView } from '../../types/types';
import style from './style.module.scss';

const SearchCity: TRenderView = () => {
  const [ , setValue ] = useState<string>('');
  const dispatch = useDispatch();
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch({ type: 'GET_IS_SEARCH', payload: true });
  };

  return (
    <form id='search' className={style.searchCity} onSubmit={onSubmit}>
      <input
        type='text'
        className={style.searchCityInput}
        onChange={(e) => {
          setValue(e.target.value)
        }}
      />
      <button className={style.searchCityButton}></button>
    </form>
  )
}

export default SearchCity
