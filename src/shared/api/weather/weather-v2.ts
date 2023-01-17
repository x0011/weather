import axios from 'axios';
import { conditions } from '../../lib/weather-codes';

export enum Units {
  C = 'Celsius',
  F = 'Fahrenheit',
}

type UnitType = Units;

export interface ICoordinates {
  longitude: number
  latitude: number,
}

export const getConditionByWeathercode = (weatherCode: number) => {
  const index = conditions.findIndex((item) => item.weathercode === weatherCode);
  return conditions[index].condition;
};

export class WeatherV2 {
  private base_url = 'https://api.open-meteo.com/v1/forecast';

  private currentUnit: UnitType = Units.C;

  constructor(unit: UnitType) {
    this.currentUnit = unit;
  }

  async getCurrent(coordinates: ICoordinates, unit:UnitType = this.currentUnit) {
    const {
      data: {
        current_weather: oldCurrent,
        hourly,
        daily,
      },
    } = await axios(this.base_url, {
      params: {
        latitude: coordinates.latitude,
        longitude: coordinates.longitude,
        current_weather: true,
        past_days: '2',
        timezone: 'Europe/Samara',
        temperature_unit: unit.toLowerCase(),
        hourly: 'temperature_2m,relativehumidity_2m,apparent_temperature,pressure_msl,weathercode,surface_pressure,dewpoint_2m,winddirection_10m',
        daily: 'temperature_2m_max,temperature_2m_min,weathercode',
      },
    });
    const { time } = oldCurrent;
    const { time: forecastTime } = hourly;
    const currentTimeIndex = forecastTime.findIndex((item: string) => {
      return item === time;
    });
    const current = {
      ...oldCurrent,
      feelslike: hourly.apparent_temperature[currentTimeIndex],
      humidity: hourly.relativehumidity_2m[currentTimeIndex],
      dewpoint: hourly.dewpoint_2m[currentTimeIndex],
      pressure: hourly.pressure_msl[currentTimeIndex],
      conditiontext: getConditionByWeathercode(hourly.weathercode[currentTimeIndex]),
      surfacepressure: hourly.surface_pressure[currentTimeIndex],
      winddirection: hourly.winddirection_10m[currentTimeIndex],
    };
    const hourlyforecast = hourly.time.map((item: string, count: number) => {
      return {
        time: item,
        temp: hourly.temperature_2m[count],
        feelslike: hourly.apparent_temperature[count],
        pressure: hourly.pressure_msl[count],
        humidity: hourly.relativehumidity_2m[count],
        surfacepressure: hourly.surface_pressure[count],
        weathercode: hourly.weathercode[count],
        winddirection: hourly.winddirection_10m[count],
      };
    });
    return { current, hourlyforecast, daily };
  }

  // eslint-disable-next-line class-methods-use-this
  async getLocation(text: string) {
    const { data: { results } } = await axios(`https://geocoding-api.open-meteo.com/v1/search?name=${text}`, {
      params: {
        count: '5',
      },
    });
    return results;
  }
}
