export interface IState {
  coords: ICoords;
  levels: ILevels[];
  weather: IWeather;
}

export interface IWeather {
  city: string;
  temp: string;
  wind: IWind;
  description: string;
}

export interface ICoords {
  lat: number;
  lon: number;
}

export interface IWind {
  deg?: string;
  gust?: string;
  speed?: string;
}

export interface ILevels {
  id: number;
  value: string;
  name_source: string;
  geo_center: ICoords;
}

export type TRenderView = () => JSX.Element;

export type TRenderViewProps<T> = (props: T) => JSX.Element;