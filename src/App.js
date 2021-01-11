import React from "react";
import Weather from "./Weather";
import './App.css';
import Search from "./Search";
import City from "./City";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
           <div className="weather-wrapper">
 <div class="weather-app">
   <div className="card-body">
       <Search />
   </div>
    <City />
 </div>
           </div>
        </div>
       <h1>Hello world!</h1>
       <Weather city = "Paris"/>

      </header>
    </div>
  );
}

export default App;
