import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

import Search from "./Search";

export default function App() {
  return (
    <div className="App shadow-lg">
      <div className="Forecast-block">
        <Search defaultCity="London" />
      </div>
      <div className="repository-link">
        <a href="https://github.com/lubinets/weather-react" target="blank_">
          Open-source code
        </a>{" "}
        by{" "}
        <a href="https://www.linkedin.com/in/karina-lubinets-70309b11a/">
          Karina Lubinets
        </a>
        , hosted on{" "}
        <a href="https://scintillating-crepe-07248b.netlify.app/">Netlify</a>
      </div>
    </div>
  );
}
