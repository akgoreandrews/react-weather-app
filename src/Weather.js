import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import WeatherInfo from "./weatherInfo";

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
      iconUrl: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      wind: response.data.wind.speed,
      city: response.data.name
    });
  }
function search() {
    const apiKey = "bf038e802ff968ae367d4b3973b5ce64";
    let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
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
            />
          </div>
        </div>
      </div>
      </div>
      <WeatherInfo data={weatherData}/>
    </div>
    );
  } else {
      search();
    return "Loading...";
  }
}