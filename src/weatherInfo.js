import React from "react";
import FormattedDate from "./FormattedDate";
export default function weatherInfo(props){
    return (
       <div className= "weatherInfo">
<span className="city">
        <h1>{props.data.city}</h1>
        </span>
        <div className="current-weather">
      <div className="card-body">
        <div className="row">
          <div className="col-6">
            <div className="clearfix weather-temperature" />
             <img
                src={props.data.iconUrl}
                alt={props.data.description}
                className="float-left"
              />
            <div className="float-left">
              <span className="temperature">{Math.round(props.data.temperature)}</span>  
              <span className="unit">°C</span>
              <ul>
                <li>
                   <FormattedDate date={props.data.date} />
                </li>
              <li className="text-capitalize">{props.data.description}</li>
              </ul>
            </div>
          </div>
          <div className="col-sm-4">
            <ul className="today">
              <li>
                Wind:<span className="wind-data">{props.data.wind} km/h</span>
                <span className="wind-unit">km/h</span>
              </li>
              <li>
                Humidity:<span className="humidity-data">{props.data.humidity}%</span>
                <span className="humidity-unit">%</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    </div>
    );
}