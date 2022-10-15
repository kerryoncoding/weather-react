import React, { useState } from "react";
import axios from "axios";

export default function SubmitForm() {
  let [city, setCity] = useState("");
  let [list, setList] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "ca47e9200d90350ad07692b8ce034ca3";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(url).then(showWeatherData);
  }

  function showWeatherData(weather) {
    setList(
      <ul className="weatherList">
        <li>Temperature: {Math.round(weather.data.main.temp)}°C</li>
        <li>Description: {weather.data.weather[0].main}</li>
        <li>Humidity: {weather.data.main.humidity}%</li>
        <li>Wind: {weather.data.wind.speed} km/h</li>
        <li>
          <img
            src={`http://openweathermap.org/img/wn/${weather.data.weather[0].icon}@2x.png`}
          />
        </li>
      </ul>
    );
  }

  function cityInput(event) {
    setCity(event.target.value);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          placeholder="Enter a city..."
          onChange={cityInput}
        />{" "}
        <input type="submit" value="Search" />
      </form>
      <div className="listSection">{list}</div>
    </div>
  );
}

