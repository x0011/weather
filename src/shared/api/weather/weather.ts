import axios from 'axios';

interface IWeatherProps {
  city: string
}

export class Weather {
  private api_key = '9bcf77a8143149da977212413221907';

  private base_url = 'https://api.weatherapi.com/v1';

  private currentCity;

  constructor(city: string) {
    this.currentCity = city;
  }

  async getWeather() {
    const result = await axios.get(`${this.base_url}/forecast.json`, {
      params: {
        key: this.api_key,
        q: this.currentCity,
        aqi: 'no',
        alerts: 'no',
      },
    });
    return result;
  }
}
