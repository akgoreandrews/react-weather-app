import React from "react";
import axios from "axios";

export default function Weather() {
  return (
    <div className="current-weather">
      <div className="card-body">
        <div className="row">
          <div className="col-6">
            <div className="clearfix weather-temperature" />
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
              alt="Clear"
              id="icon"
              className="float-left"
            />
            <div className="float-left">
              <strong id="temperature"></strong>
              <span className="units">
                <span href="#" id="celsius-link" className="active">
                  °C
                </span>{" "}
                |
                <span href="#" id="fahrenheit-link">
                  °F
                </span>
              </span>
              <ul>
                <li>
                  Last updated: <span id="date"></span>
                </li>
                <li id="daily-description"></li>
              </ul>
            </div>
          </div>
          <div className="col-sm-4">
            <ul className="today">
              <li>
                Wind:<span id="wind-data"></span>
                <span id="wind-unit">km/h</span>
              </li>
              <li>
                Humidity:<span id="humidity-data"></span>
                <span id="humidity-unit">%</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
