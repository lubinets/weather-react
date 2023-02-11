import React from "react";
import "./Weather.css";

export default function Weather(props) {
  return (
    <div className="Weather">
      <img
        src="https://i.pinimg.com/originals/53/be/db/53bedbe8c1048ca2be44fa2cdd7d4c63.png"
        alt="Sunny"
        class="weather-img"
      />
      <div className="temperature">
        <span className="degrees">{props.temperature} </span>{" "}
        <a href="#">°C |</a> <a href="#">°F</a>
      </div>
      <div className="indicators">
        <ul>
          <li>Clear sky</li>
          <li>Humidity: {props.humidity}%</li>
          <li>Wind speed: {props.windspeed}m/s</li>
        </ul>
      </div>
    </div>
  );
}
