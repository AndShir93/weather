import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Clock = () => {
    const date = useSelector(state => state.date)
    const dispatch = useDispatch()

    setInterval(()=>{
        dispatch({type:'NOW_DATE', payload: new Date().toLocaleTimeString()})
    },1000)

    return(
        <>  
            {console.log(date)}
            {date}
        </>
    )
}
export default Clock