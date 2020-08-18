// @ts-check

/* import { resolve } from 'url';

const apiUrl = 'http://localhost:8080/api/v2/'; */

// BEGIN (write your solution here)
/* class WeatherService {
  constructor(client) {
    this.client = client;
  }

  async find(cityName) {
    const url = resolve(apiUrl, `cities/${cityName}`);
    const response = await this.client.get(url);
    const result = JSON.parse(response.data)
    return result;
  }
}

export default WeatherService;
// END */