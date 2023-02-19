import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

import Search from "./Search";

export default function App() {
  return (
    <div className="App">
      <div className="Forecast-block">
        <Search defaultCity="London" />
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
