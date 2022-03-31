export interface IState {
    city: string;
    temp: string;
    cityList: string[];
    coords: ICoords;
    wind: IWind;
    description: string;
}

export interface ICoords {
    lat: number;
    lon: number;
}

export interface IWind {
    deg: string;
    gust: string;
    speed: string;
}