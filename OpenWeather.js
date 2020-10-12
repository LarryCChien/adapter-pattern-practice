class OpenWeather {
  constructor(location) {
    this.city = location.city
  }
  
  getCurrent() {
    // 華氏
    return { temp: 80.33 }
  }

}

module.exports = OpenWeather
