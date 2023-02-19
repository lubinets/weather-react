import React, { useState } from "react";
import axios from "axios";
import "./Search.css";
import Weather from "./Weather";

export default function Search(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      coordinates: response.data.coordinates,
      city: response.data.city,
      date: new Date(response.data.time * 1000),
      local_time: new Date(response.data.time * 1000),
      icon: response.data.condition.icon,
      temperature: Math.round(response.data.temperature.current),
      description: response.data.condition.description,
      wind: Math.round(response.data.wind.speed),
      humidity: response.data.temperature.humidity,
    });
  }

  function search() {
    const apiKey = "a6o4fa673bc484t5e5fff45478942920";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather-info">
        <form className="Search" onSubmit={handleSubmit}>
          <input
            type="search"
            className="search-bar form-control"
            placeholder="Type your city..."
            onChange={updateCity}
          />

          <input
            type="submit"
            className="btn btn-primary submit-button"
            value="Search"
          />
        </form>
        <Weather data={weatherData} />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
