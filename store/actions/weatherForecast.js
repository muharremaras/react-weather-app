import { WEATHER_FORECAST_ASSIGN } from '../type';

export const assignWeatherForecast = (value) => {
    return {
        type: WEATHER_FORECAST_ASSIGN,
        payload: value
    };
}