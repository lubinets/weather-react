import React, { useState } from "react";
import axios from "axios";
import "./Search.css";
import Weather from "./Weather";

export default function Search(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      local_time: new Date(response.data.dt * 1000),
      icon: "https://i.pinimg.com/originals/53/be/db/53bedbe8c1048ca2be44fa2cdd7d4c63.png",
      temperature: Math.round(response.data.main.temp),
      description: response.data.weather[0].main,
      wind: Math.round(response.data.wind.speed),
      humidity: response.data.main.humidity,
    });
  }

  function search() {
    const apiKey = "502dc8f7ae36e57af1974e18d16a86f8";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
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
