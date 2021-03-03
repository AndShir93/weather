import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {getWeather} from '../asyncActions/getWeather'

export default function Weather(){
    const dispatch = useDispatch()
    const temp = useSelector( state => state.temp)
    const city = useSelector( state => state.city)
    useEffect(()=>{
        dispatch(getWeather('Izhevsk'))
    },[])
    return(
        <div className="weather">
            <h1 className="weather__title">Погода</h1>
            <div className="weather__data">
                <p className="weather__temp">{temp}</p>
                <p className="weather_city">{city}</p>
            </div>
        </div>
    )
}