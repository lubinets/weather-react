import React from "react";
import "./Weather.css";
import FormattedDate from "./FormattedDate";
import FormattedTime from "./FormattedTime";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";
import Forecast from "./Forecast";

export default function Weather(props) {
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

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
        <ul className="weather-data">
          <li className="weather-img">
            <WeatherIcon icon={props.data.icon} alt={props.data.description} />
          </li>
          <li className="temperature">
            <WeatherTemperature celsius={props.data.temperature} />
          </li>
          <li className="indicators">
            <ul>
              <li>{capitalizeFirstLetter(props.data.description)}</li>
              <li>Humidity: {props.data.humidity}%</li>
              <li>Wind speed: {props.data.wind}m/s</li>
            </ul>
          </li>
        </ul>
      </div>
      <div className="forecast-cards">
        <Forecast coordsData={props.data.coordinates} />
      </div>
    </div>
  );
}
