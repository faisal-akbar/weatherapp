class Weather {
  constructor(city, country) {
    // Place your api key from openweathermap here
    this.apiKey = 'd560ed9ade1159e8743e074aab7081de';
    this.city = city;
    this.country = country;
  }

  // Fetch Weather from API
  async getWeather() {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.country}&&units=metric&appid=${this.apiKey}`);
    const responseData = await response.json();
    return responseData;
  }

  // Change Weather location
  changeLocation(city, country) {
    this.city = city;
    this.country = country;
  }
}