import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { getWeather } from '../asyncActions/getWeather'

function SearchCity(){
    const [value, setValue] = useState()
    const dispatch = useDispatch()
    return(
        <form id='search' className='search-city'>
            <input type='text' className='search-city__input' onChange={(e)=>{
                setValue(e.target.value)
            }}/>
            <button className='search-city__button' onClick={(e)=>{
                e.preventDefault()
                dispatch(getWeather(value))
            }}></button>
        </form>
    )
}
export default SearchCity