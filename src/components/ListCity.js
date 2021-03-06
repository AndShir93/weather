import React from 'react'
import {getWeather} from '../asyncActions/getWeather'
import { useDispatch, useSelector } from 'react-redux'

function ListCity(){
    const cityList = useSelector(state => state.cityList)
    let id = 0
    const dispatch = useDispatch()
    const getCity = (e) => {
        let city = e.target.textContent
        dispatch(getWeather(city))
    }
    return(
        <>
            <ul className="city-list search-weather__list">
                {cityList.map( city => 
                    <li key={id++} className='city-list__item' onClick={(e) => {
                        getCity(e)
                    }}>{city}</li>
                )}
            </ul>
        </>
    )
}
export default ListCity