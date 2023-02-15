import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

import Search from "./Search";
import Forecast from "./Forecast";

export default function App() {
  return (
    <div className="App">
      <div className="Forecast-block">
        <Search defaultCity="New York" />
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
      <div className="repository-link">
        <a href="https://github.com/lubinets/weather-react" target="blank_">
          Open-source code
        </a>{" "}
        by Karina Lubinets
      </div>
    </div>
  );
}
