// Init Storage
const storage = new Storage();
// Get stored location data
const weatherLocation = storage.getLocationData();

// Init Weather
const weather = new Weather(weatherLocation.city, weatherLocation.country);

// Init ui
const ui = new UI();

// Get weather on DOM load
document.addEventListener('DOMContentLoaded', getWeather);

// change location event
document.getElementById('w-change-btn').addEventListener('click', () => {
  const city = document.getElementById('city').value;
  const country = document.getElementById('country').value;

  // Change location
  weather.changeLocation(city, country);

  // Set location in Local Storage
  storage.setLocationData(city, country);

  // get and display weather
  getWeather();

  // clear close modal
  document.getElementById('w-form').reset();
  $('#locModal').modal('hide');
});

function getWeather() {
  weather.getWeather()
    .then(data => ui.paint(data))
    .catch(err => console.log(err));
}