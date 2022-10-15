import React from "react";
import "./App.css";

export default function CurrentWeather() {
  return (
    <div className="CurrentWeather">
      <form class="current-weather-section">
        <div className="row">
          <div className="col-1"></div>
          <div className="col-4">
            <div className="current-city-weather">
              <strong className="current-city-name">New York</strong>
              <div className="current-day-time">Tuesday, 10:05 AM</div>
            </div>
          </div>
          <div className="col-7"></div>
        </div>
        <div className="row">
          <div className="col-1"></div>
          <div className="col-4">
            <img
              src={require(`./images/02d.png`)}
              alt="mostly sunny"
              className="current-weather-image"
            />
          </div>
          <div className="col-3">
            <div className="current-temperature">
              <span className="current-temperature-value">25</span>
              <span className="current-units">
                <a href="/" id="celsious" class="active">
                  °C
                </a>
                |
                <a href="/" id="fahrenheit">
                  °F
                </a>
              </span>
            </div>
          </div>
          <div className="col-3">
            <div className="current-weather-description">
              <div id="current-description">
                <strong>Cloudy</strong>
              </div>
              <div>
                Humidity: <span id="current-humidity">71</span>%
              </div>
              <div>
                Wind: <span id="current-wind">8</span> km/h
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
