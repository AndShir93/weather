import {defaultState} from "./defaultState"

export const reducer = (state = defaultState, action) =>{
    switch(action.type){
        case "GET_TEMP" : return {...state, temp: action.payload}
        case "GET_CITY" : return {...state, city: action.payload}
        case "GET_COORDS" : return {...state, coords: action.payload}
        default: return state
    }
}