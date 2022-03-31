import React, { useState } from 'react';
import { getCityLevels } from '../asyncActions/getWeather';

function SearchCity(){
    const [value, setValue] = useState<string>('');
    return(
        <form id='search' className='search-city'>
            <input
                type='text'
                className='search-city__input'
                onChange={(e)=>{
                    setValue(e.target.value)
                }}
            />
            <button className='search-city__button' onClick={(e)=>{
                e.preventDefault();
                getCityLevels(value);
            }}></button>
        </form>
    )
}
export default SearchCity