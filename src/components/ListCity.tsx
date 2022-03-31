import React from 'react';
import {IState} from "../types/types";
import {useAppDispatch, useAppSelector} from "../redux/store";

function ListCity(){
    const cityList = useAppSelector((state: IState) => state.cityList)
    let id = 0
    const dispatch = useAppDispatch()
    const getCityLevels = (e: any) => {
        const city = e.target.textContent;
    }
    return(
        <>
            <ul className="city-list search-weather__list">
                {cityList.map( city => 
                    <li key={id++} className='city-list__item' onClick={(e) => {
                        getCityLevels(e)
                    }}>{city}</li>
                )}
            </ul>
        </>
    )
}
export default ListCity