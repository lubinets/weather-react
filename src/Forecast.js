import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./Forecast.css";
import axios from "axios";

export default function Forecast(props) {
  const apiKey = "a6o4fa673bc484t5e5fff45478942920";
  let latitude = `${props.coordsData.latitude}`;
  let longitude = `${props.coordsData.longitude}`;
  let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lat=${latitude}&lon=${longitude}&key=${apiKey}&units=metric`;

  function handleResponse(response) {
    console.log(response.data);
  }

  axios.get(apiUrl).then(handleResponse);

  return (
    <div className="Forecast">
      <div className="Forecast-day">Sat</div>
      <WeatherIcon icon="rain-day" />
      <div className="Forecast-temperature">
        <span className="Forecast-temperature-max">{props.temp_day}°</span> |{" "}
        <span className="Forecast-temperature-min">{props.temp_night}°</span>
      </div>
    </div>
  );
}
