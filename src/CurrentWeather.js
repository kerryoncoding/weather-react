import React, { useState } from "react";
import axios from "axios";

export default function SubmitForm() {
  let [city, setCity] = useState("");
  let [list, setList] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "ca47e9200d90350ad07692b8ce034ca3";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
    axios.get(url).then(showWeatherData);
  }

  function showWeatherData(weather) {
    console.log(weather);
    setList(
      <ul className="weatherList">
        <li>City: {weather.data.name}</li>
        <li>The current day and time</li>
        <li>Description: {weather.data.weather[0].main}</li>
        <li>
          <img
            src={`http://openweathermap.org/img/wn/${weather.data.weather[0].icon}@2x.png`} alt="weatherimage"
          />
        </li>
        <li>Temperature: {Math.round(weather.data.main.temp)}°F</li>
        <li>Humidity: {weather.data.main.humidity}%</li>
        <li>Wind: {Math.round(weather.data.wind.speed)} mph</li>
        
      </ul>
    );
  }

  function cityInput(event) {
    setCity(event.target.value);
  }

  return (
    <div className="container">
      <div className="row">
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-10">
              <span className="mb-3">
                <input
                  type="search"
                  placeholder="Enter a city..."
                  onChange={cityInput}
                />
              </span>
              {" "}
              <span>
                <input type="submit" className="btn btn-secondary" value="Search" />
              </span>
          </div>
        </div>
      </form>
      <div className="listSection">{list}</div>
    </div>
    </div>
  );
}

