import {defaultState} from "./defaultState";

interface IAction {
  type: 'GET_TEMP' | 'GET_CITY' | 'GET_COORDS' | 'GET_DESCRIPTION' | 'GET_WIND';
  payload: any;
}

export const reducer = (state = defaultState, action: IAction) => {
  switch (action.type) {
    case "GET_TEMP" :
      return {...state, temp: action.payload}
    case "GET_CITY" :
      return {...state, city: action.payload}
    case "GET_COORDS" :
      return {...state, coords: action.payload}
    case "GET_DESCRIPTION" :
      return {...state, description: action.payload}
    case "GET_WIND" :
      return {...state, wind: action.payload}
    default:
      return state
  }
}