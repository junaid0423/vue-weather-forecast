import { FeelsLike } from "./feels-like.type";
import { Temperature } from "./temperature.type";
import { Weather } from "./weather.type";

export default interface OneDay {
  clouds: number;
  dew_point: number;
  dt: number;
  feels_like: FeelsLike;
  humidity: number;
  moon_phase: number;
  moonrise: number;
  moonset: number;
  pop: number;
  pressure: number;
  sunrise: number;
  sunset: number;
  temp: Temperature;
  uvi: number;
  weather: Weather[];
  wind_deg: number;
  wind_gust: number;
  wind_speed: number;
}
