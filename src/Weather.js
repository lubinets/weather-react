import React from "react";
import "./Weather.css";
import FormattedDate from "./FormattedDate";
import FormattedTime from "./FormattedTime";

export default function Weather(props) {
  return (
    <div>
      <div className="Date">
        <div>
          Updated: <FormattedDate date={props.data.date} />
        </div>
        <div>
          Local time: <FormattedTime time={props.data.local_time} />
        </div>
      </div>
      <div className="Weather">
        <h2>{props.data.city}</h2>
        <div className="weather-data">
          <img
            src={props.data.icon}
            alt={props.data.description}
            className="weather-img"
          />
          <div className="temperature">
            <span className="degrees">{props.data.temperature}</span>{" "}
            <a href="https://en.wikipedia.org/wiki/Celsius">°C |</a>{" "}
            <a href="https://en.wikipedia.org/wiki/Fahrenheit">°F</a>
          </div>
          <div className="indicators">
            <ul>
              <li>{props.data.description}</li>
              <li>Humidity: {props.data.humidity}%</li>
              <li>Wind speed: {props.data.wind}m/s</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
