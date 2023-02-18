function showTemp(response) {
  let temp = document.querySelector("#temperature");
  temp.innerHTML = Math.round(response.data.main.temp);
  let description = document.querySelector("#description");
  description.innerHTML = response.data.weather[0].main;
  let humidity = document.querySelector("#humidity");
  humidity.innerHTML = response.data.main.humidity;
  let wind = document.querySelector("#wind");
  wind.innerHTML = Math.round(response.data.wind.speed);
}

function showCity(event) {
  event.preventDefault();
  let cityName = document.querySelector("#city-input");
  let city = document.querySelector("#city");
  let apiKey = "a2d5c141caa760021e618a903bcc320b";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName.value}&appid=${apiKey}&units=metric`;
  city.innerHTML = cityName.value;
  axios.get(apiUrl).then(showTemp);
}

function currentTemp(response) {
  let res = response;
  let city = document.querySelector("#city");
  city.innerHTML = response.data.name;
  showTemp(res);
  // let temp = document.querySelector("#temperature");
  // temp.innerHTML
}
function showPosition(position) {
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let apiKey = "a2d5c141caa760021e618a903bcc320b";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(currentTemp);
}

function showCurrentTemp(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(showPosition);
}

let search = document.querySelector("#search-form");
search.addEventListener("submit", showCity);
let current = document.querySelector("#current-location-button");
current.addEventListener("click", showCurrentTemp);
