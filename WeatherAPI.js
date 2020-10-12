class WeatherAPI {
  constructor(city) {
    this.city = city
  }
  
  getWeather() {
    return this.formattedInfo({ temp: 300 })
  }
  
  toCelsius(kelvin) {
    const converted = kelvin - 273.15
    return converted.toFixed(2)
  }
  
  formattedInfo(data) {
    return {
      city: this.city,
      temperature: this.toCelsius(data.temp)
    }
  }
}

module.exports = WeatherAPI
