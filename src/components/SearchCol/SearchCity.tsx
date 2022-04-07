import React, { FormEvent, useState } from 'react';
import { getCityLevels } from '../../asyncActions/getWeather';
import { useDispatch } from 'react-redux';
import { TRenderView } from '../../types/types';

const SearchCity: TRenderView = () => {
  const [ value, setValue ] = useState<string>('');
  const dispatch = useDispatch();
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch({ type: 'GET_IS_SEARCH', payload: true });
    dispatch(getCityLevels(value));
  };

  return (
    <form id='search' className='search-city' onSubmit={onSubmit}>
      <input
        type='text'
        className='search-city__input'
        onChange={(e) => {
          setValue(e.target.value)
        }}
      />
      <button className='search-city__button'></button>
    </form>
  )
}

export default SearchCity