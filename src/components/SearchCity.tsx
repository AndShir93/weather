import React, { FormEvent, useState } from 'react';
import { getCityLevels } from '../asyncActions/getWeather';
import { useDispatch } from 'react-redux';
import { TRenderViewProps } from '../types/types';

interface IProps {
  setIsSearch: (param: boolean) => void;
}

const SearchCity: TRenderViewProps<IProps> = (props) => {
  const { setIsSearch } = props;
  const [ value, setValue ] = useState<string>('');
  const dispatch = useDispatch();
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSearch(true);
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