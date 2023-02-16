import React from "react";

export default function WeatherIcon(props) {
  const codeMapping = {
    "01d": "clear-day",
    "01n": "clear-night",
    "02d": "partly-cloudy-day",
    "02n": "partly-cloudy-night",
    "03d": "cloudy",
    "03n": "cloudy",
    "04d": "overcast-day",
    "04n": "overcast-night",
    "09d": "overcast-rain",
    "09n": "overcast-rain",
    "10d": "partly-cloudy-day-rain",
    "10n": "partly-cloudy-night-rain",
    "11d": "thunderstorms-day",
    "11n": "thunderstorms-night",
    "13d": "overcast-day-snow",
    "13n": "overcast-night-snow",
    "50d": "mist",
    "50n": "mist",
  };
  let iconUrl = `https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/${
    codeMapping[props.icon]
  }.svg`;
  return (
    <div>
      <img src={iconUrl} alt={props.alt} />
    </div>
  );
}
