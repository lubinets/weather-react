import React from "react";
import "./Forecast.css";

export default function Forecast(props) {
  return (
    <div className="Forecast">
      <img src={props.weather_img} alt="Cloud" />
      <div>
        {props.temp_night}° | <strong>{props.temp_day}°</strong>
      </div>
    </div>
  );
}
