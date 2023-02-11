import React, { useState } from "react";
import "./Search.css";

export default function Search() {
  let [city, setCity] = useState("London");

  function changeCity(event) {
    event.preventDefault();
    setCity(event.target.value);
  }
  return (
    <div className="Search">
      <input
        type="search"
        className="search-bar"
        placeholder="Type your city..."
        onChange={changeCity}
      />
      <input type="submit" className="submit-button" value="Search" />
    </div>
  );
}
