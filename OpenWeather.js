class OpenWeather {
  constructor(location) {
    this.city = location.city
  }
  
  getCurrent() {
    // 華氏
    return { temperature: 80.33 }
  }

}

module.exports = OpenWeather
