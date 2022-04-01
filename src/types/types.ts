export interface IState {
  city: string;
  temp: string;
  cityList: string[];
  coords: ICoords;
  wind: IWind;
  description: string;
  levels: ILevels[];
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

export interface ILevels {
  id: number;
  value: string;
  name_source: string;
  geo_center: ICoords;
}