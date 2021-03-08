import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCity, getWeather } from '../asyncActions/getWeather'
import ArrowWrap from './ArrowWrap'

export default function Weather(){
    const dispatch = useDispatch()
    const temp = useSelector( state => state.temp)
    const city = useSelector( state => state.city)
    const coords = useSelector( state => state.coords)
    const description = useSelector( state => state.description)
    const wind = useSelector( state => state.wind)
    useEffect(()=>{
        dispatch(getWeather(coords))
        dispatch(getCity(city))
    },[city])
    return(
        <div className="weather">
            <h1 className="weather__title">Погода</h1>
            <div className="weather__data">
                <p className="weather__city">{city}</p>
                <p className="weather__temp">Температура: {temp}°</p>
                <p className="weather__description">{description}</p>
                <p className="weather__wind">Ветер: {wind.speed} м/с</p>
            </div>
        </div>
    )
}