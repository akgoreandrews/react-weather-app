import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import FormattedDate from "./FormattedDate";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      iconUrl: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
      wind: response.data.wind.speed,
      city: response.data.name
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
           <div className="search">
      <div className="card-body">
        <div className="row">
          <div className="col-6">
            <form id="enter-city-search">
              <input
                type="text"
                class="button"
                id="enter-city"
                placeholder="Enter your city here"
                autofocus="on"
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
    </div><span className="city">
        <h1>{weatherData.city}</h1>
        </span>
        <div className="current-weather">
      <div className="card-body">
        <div className="row">
          <div className="col-6">
            <div className="clearfix weather-temperature" />
             <img
                src={weatherData.iconUrl}
                alt={weatherData.description}
                className="float-left"
              />
            <div className="float-left">
              <span className="temperature">{Math.round(weatherData.temperature)}</span>  
              <span className="unit">°C</span>
              <ul>
                <li>
                   <FormattedDate date={weatherData.date} />
                </li>
              <li className="text-capitalize">{weatherData.description}</li>
              </ul>
            </div>
          </div>
          <div className="col-sm-4">
            <ul className="today">
              <li>
                Wind:<span className="wind-data">{weatherData.wind} km/h</span>
                <span className="wind-unit">km/h</span>
              </li>
              <li>
                Humidity:<span className="humidity-data">{weatherData.humidity}%</span>
                <span className="humidity-unit">%</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    </div>
    );
  } else {
    const apiKey = "bf038e802ff968ae367d4b3973b5ce64";
    let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}