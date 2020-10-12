const WeatherAPI = require('./WeatherAPI.js')
const OpenWeather = require('./OpenWeather.js')
const OpenWeatherAdapter = require('./OpenWeatherAdapter.js')

class Dashboard {
  constructor(weatherSource) {
    this.weatherSource = weatherSource
  }
  
  displayWeather() {
    const weatherInfo = this.weatherSource.getWeather()
    console.log(`現在 ${weatherInfo.city} 的氣溫是：攝氏 ${weatherInfo.temperature} 度`)
  }
}

// const weatherSource = new OpenWeatherAdapter('台北')
// const weatherSource = new OpenWeather('台北')
const weatherSource = new WeatherAPI('台北')
const dashboard = new Dashboard(weatherSource)
dashboard.displayWeather()
