import {defaultState} from "./defaultState"

export const reducer = (state = defaultState, action) =>{
    switch(action.type){
        case "INC" : return {...state, count: state.count + action.payload}
        case "DEC" : return {...state, count: state.count - action.payload}
        case "GET_TEMP" : return {...state, temp: action.payload}
        case "GET_CITY" : return {...state, city: action.payload}
        default: return state
    }
}