import React from "react";

export default function WeatherIcon(props) {
  const codeMapping = {
    "clear-sky-day": "clear-day",
    "clear-sky-night": "clear-night",
    "few-clouds-day": "partly-cloudy-day",
    "few-clouds-night": "partly-cloudy-night",
    "scattered-clouds-day": "cloudy",
    "scattered-clouds-night": "cloudy",
    "broken-clouds-day": "overcast-day",
    "broken-clouds-night": "overcast-night",
    "shower-rain-day": "overcast-rain",
    "shower-rain-night": "overcast-rain",
    "rain-day": "partly-cloudy-day-rain",
    "rain-night": "partly-cloudy-night-rain",
    "thunderstorm-day": "thunderstorms-day",
    "thunderstorm-night": "thunderstorms-night",
    "snow-day": "overcast-day-snow",
    "snow-night": "overcast-night-snow",
    "mist-day": "mist",
    "mist-night": "mist",
  };
  let iconUrl = `https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/${
    codeMapping[props.icon]
  }.svg`;
  return (
    <div className="WeatherIcon">
      <img src={iconUrl} alt={props.alt} />
    </div>
  );
}
