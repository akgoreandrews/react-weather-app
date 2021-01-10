import React from "react";
import axios from "axios";

import Loader from 'react-loader-spinner';

export default function Weather(props){
    function handleResponse(response)
    {
    alert(`The weather in ${response.data.name} ${response.data.main.temp}°c`);
    }
  
    let apiKey = "bf038e802ff968ae367d4b3973b5ce64";
    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(handleResponse);

    return  <Loader
         type="Puff"
         color="#00BFFF"
         height={100}
         width={100}
         timeout={3000} //3 secs
 
      />;
}
