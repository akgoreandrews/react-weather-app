import React from "react";

export default function Forecast() {
  return (
    <div className="row weather-forecast" id="forecast">
      <div classNameName="col-2">
        <h3>12:00</h3>
        <img src="https://ssl.gstatic.com/onebox/weather/64/sunny.png" alt="" />
      </div>
      <div className="weather-forecast-temperature">
        <strong>16</strong>15°
      </div>
      <div className="col-2">
        <h3>Tues</h3>
        <img src="https://ssl.gstatic.com/onebox/weather/64/sunny.png" alt="" />
      </div>
      <div className="col-2">
        <h3>Wed</h3>
        <img src="https://ssl.gstatic.com/onebox/weather/64/sunny.png" alt="" />
      </div>
      <div className="col-2">
        <h3>Thurs</h3>
        <img src="https://ssl.gstatic.com/onebox/weather/64/sunny.png" alt="" />
      </div>
      <div className="col-2">
        <h3>Fri</h3>
        <img src="https://ssl.gstatic.com/onebox/weather/64/sunny.png" alt="" />
      </div>
      <div className="col-2">
        <h3>Sat</h3>
        <img src="https://ssl.gstatic.com/onebox/weather/64/sunny.png" alt="" />
      </div>
    </div>
  );
}