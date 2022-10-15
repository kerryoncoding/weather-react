import React from "react";
import "./App.css";

export default function FutureDays() {
  return (
    <div className="FutureDays">
      <form>
        <div className="future-weather-section">
          <div className="row">
            <div className="card-future" id="forecast"></div>
          </div>
        </div>
      </form>
    </div>
  );
}
