import React from "react";
import "./Weather.css";
import FormattedDate from "./FormattedDate";
import FormattedTime from "./FormattedTime";
import WeatherIcon from "./WeatherIcon";
import Forecast from "./Forecast";

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
        <ul className="weather-data">
          <li className="weather-img">
            <WeatherIcon icon={props.data.icon} alt={props.data.description} />
          </li>
          <li className="temperature">
            <span className="degrees">{props.data.temperature}</span>{" "}
            <a href="https://en.wikipedia.org/wiki/Celsius">°C |</a>{" "}
            <a href="https://en.wikipedia.org/wiki/Fahrenheit">°F</a>
          </li>
          <li className="indicators">
            <ul>
              <li>{props.data.description}</li>
              <li>Humidity: {props.data.humidity}%</li>
              <li>Wind speed: {props.data.wind}m/s</li>
            </ul>
          </li>
        </ul>
      </div>
      <div className="forecast-cards">
        <Forecast
          weather_img="https://cdn-icons-png.flaticon.com/512/2864/2864448.png"
          temp_night={10}
          temp_day={23}
        />
        <Forecast
          weather_img="https://cdn-icons-png.flaticon.com/512/3262/3262919.png"
          temp_night={10}
          temp_day={23}
        />
        <Forecast
          weather_img="https://cdn-icons-png.flaticon.com/512/3262/3262933.png"
          temp_night={10}
          temp_day={23}
        />
        <Forecast
          weather_img="https://cdn-icons-png.flaticon.com/512/3262/3262946.png"
          temp_night={10}
          temp_day={23}
        />
        <Forecast
          weather_img="https://cdn-icons-png.flaticon.com/512/4490/4490117.png"
          temp_night={10}
          temp_day={23}
        />
      </div>
    </div>
  );
}
