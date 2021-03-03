const KEY = 'fd8e3d41be8210f6fa6bcf152c8b2482'

export const getWeather = (city) => {
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${KEY}&units=metric`
    console.log(city)
    return dispatch => (
        fetch(URL).then(resp => resp.json()).then(data => {
            console.log(data)
            dispatch({type:'GET_TEMP', payload: data.main.temp})
            dispatch({type:'GET_CITY', payload: data.name})
        })
    )
}