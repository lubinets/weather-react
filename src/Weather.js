import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import FormattedDate from "./FormattedDate";
import FormattedTime from "./FormattedTime";

export default function Weather(props) {
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

  if (weatherData.ready) {
    return (
      <div>
        <div className="Date">
          <div>
            Updated: <FormattedDate date={weatherData.date} />
          </div>
          <div>
            Local time: <FormattedTime time={weatherData.local_time} />
          </div>
        </div>
        <div className="Weather">
          <h2>{weatherData.city}</h2>
          <div className="weather-data">
            <img
              src={weatherData.icon}
              alt={weatherData.description}
              className="weather-img"
            />
            <div className="temperature">
              <span className="degrees">{weatherData.temperature}</span>{" "}
              <a href="https://en.wikipedia.org/wiki/Celsius">°C |</a>{" "}
              <a href="https://en.wikipedia.org/wiki/Fahrenheit">°F</a>
            </div>
            <div className="indicators">
              <ul>
                <li>{weatherData.description}</li>
                <li>Humidity: {weatherData.humidity}%</li>
                <li>Wind speed: {weatherData.wind}m/s</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "502dc8f7ae36e57af1974e18d16a86f8";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
