import React from "react";
import Weather from "./Weather";
import './App.css';
import Search from "./Search";
import City from "./City";
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
       <Search />
   </div>
    <City /> 
    <Weather />
     <Forecast />
 </div>
           </div>
           <Footer />
        </div>
       <h1>Hello world!</h1>
      

      </header>
    </div>
  );
}

export default App;
