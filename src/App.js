import React from "react";
import Weather from "./Weather";
import './App.css';
import Search from "./Search";

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
