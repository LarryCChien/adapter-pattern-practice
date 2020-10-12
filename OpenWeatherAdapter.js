const OpenWeather = require('./OpenWeather.js')

class OpenWeatherAdapter {
  constructor(city) {
    this.city = city
    this.openWeather = new OpenWeather({ city })
  }
  
  getWeather() {
    return this.formattedInfo(this.openWeather.getCurrent())
  }

  toCelsius(farenheit) {
    const converted = (farenheit - 32) * 5 / 9
    return converted.toFixed(2)
  }
  
  formattedInfo(data) {
    return {
      city: this.city,
      temperature: this.toCelsius(data.temperature)
    }
  }
}

module.exports = OpenWeatherAdapter
