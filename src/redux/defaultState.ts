import {IState} from "../types/types";

export const defaultState: IState = {
    city: 'Ижевск',
    temp: '',
    cityList: ['Izhevsk','Mozhga','Sarapul','London'],
    coords: {lat: 56.866558, lon: 53.209415},
    wind: {deg: '', gust: '', speed: ''},
    description: '',
}