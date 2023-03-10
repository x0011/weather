import axios from 'axios';
import { conditions } from '../../lib/weather-codes';
import { useTypedSelector } from '../../model/store';
import { ICurrentLocation } from '../../model/store/reducers/weather';

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

  async getCurrent(currentLocation: ICurrentLocation, unit:UnitType = this.currentUnit) {
    const { timezone } = currentLocation;
    const {
      data: {
        current_weather: oldCurrent,
        hourly,
        daily,
      },
    } = await axios(this.base_url, {
      params: {
        latitude: currentLocation.latitude,
        longitude: currentLocation.longitude,
        current_weather: true,
        past_days: '1',
        timezone,
        temperature_unit: unit.toLowerCase(),
        hourly: 'temperature_2m,relativehumidity_2m,apparent_temperature,pressure_msl,weathercode,surface_pressure,dewpoint_2m,winddirection_10m',
        daily: 'temperature_2m_max,temperature_2m_min,weathercode,sunrise,sunset',
      },
    });
    const { time } = oldCurrent;
    const { time: forecastTime } = hourly;
    const currentTimeIndex = forecastTime.findIndex((item: string) => {
      return item === time;
    });
    const { time: day } = daily;
    const currentDayIndex = day.findIndex((item:string) => {
      return new Date(item).getDay() === new Date(time).getDay();
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
      sunrise: daily.sunrise[currentDayIndex],
      sunset: daily.sunset[currentDayIndex],
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
