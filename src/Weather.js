import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import WeatherInfo from "./weatherInfo";
import Forecast from "./Forecast";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      wind: response.data.wind.speed,
      city: response.data.name
    });
  }
function search() {
    const apiKey = "bf038e802ff968ae367d4b3973b5ce64";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }
   function getCurrentLocation(event) {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(current);
  }

  function current(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const apiKey = "bf038e802ff968ae367d4b3973b5ce64";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
           <div className="search">
      <div className="card-body">
        <div className="row">
          <div className="col-6">
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                class="button"
                id="enter-city"
                placeholder="Enter your city here"
                autofocus="on"
                onChange={handleCityChange}
              />
            </form>
          </div>
          <div className="col-3">
            <input type="submit" className="search-button" value="Search" />
          </div>
          <div className="col-3">
            <input
              type="submit"
              className="current-location-button"
              id="current-location-button"
              value="Current location"
              onClick={getCurrentLocation}
            />
          </div>
        </div>
      </div>
      </div>
      <WeatherInfo data={weatherData}/>
      <Forecast city={weatherData.city} />
    </div>
    );
  } else {
      search();
    return "Loading...";
  }
}