const KEY = 'fd8e3d41be8210f6fa6bcf152c8b2482'

export const getWeather = (coords) => {
    const URLcoord = `https://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.lon}&appid=${KEY}&units=metric&lang=ru`

    return dispatch => (
        fetch(URLcoord).then(resp => resp.json()).then(data => {
            dispatch({type:'GET_TEMP', payload: data.main.temp})
            dispatch({type: 'GET_WIND', payload: data.wind})
        }).catch(()=>{console.log('City not found!')})
    )
}

window.onload = function() {
    var startPos;
    var geoSuccess = function(position) {
      startPos = position;
      console.log(startPos.coords.latitude);
      console.log(startPos.coords.longitude);
    };
    navigator.geolocation.getCurrentPosition(geoSuccess);
  };

export const getCity = (city) => {
    const getCoords = `http://search.maps.sputnik.ru/search?q=${city}`
    return dispatch => { 
        fetch(getCoords)
        .then(resp => resp.json())
        .then( data => {
            dispatch({type: 'GET_COORDS', payload: data.result[0].position})
            dispatch({type:'GET_CITY', payload: data.result[0].title})
            dispatch({type: 'GET_DESCRIPRION', payload: data.result[0].description})
        })
        .catch(()=> console.log('Не удалось получить координаты!'))
    }
}