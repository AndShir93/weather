import {defaultState} from "./defaultState"

export const reducer = (state = defaultState, action) =>{
    switch(action.type){
        case "INC" : return {...state, count: state.count + action.payload}
        case "DEC" : return {...state, count: state.count - action.payload}
        case "NOW_DATE" : return {...state, date: action.payload}
        default: return state
    }
}