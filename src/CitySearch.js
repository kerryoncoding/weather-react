import React from "react";
import "./App.css";

export default function CitySearch() {
  return (
    <div className="CitySearch">
      <form className="input-city">
        <div className="row">
          <div className="col-1"></div>
          <div className="col-8">
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                id="input-city-name"
                placeholder="Enter a city"
              />
            </div>
          </div>
          <div className="col-3">
            <button
              type="button"
              className="btn btn-outline-secondary input-button"
            >
              Enter
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
