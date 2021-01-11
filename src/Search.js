import React from "react";

export default function Search() {
  return (
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
    </div>
  );
}