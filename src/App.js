import React from "react";
import Weather from "./Weather";
import './App.css';
import Forecast from "./Forecast";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
           <div className="weather-wrapper">
 <div class="weather-app">
   <div className="card-body">
   </div>
    <Weather />
     <Forecast />
 </div>
           </div>
           <Footer />
        </div>
      </header>
    </div>
  );
}

export default App;
