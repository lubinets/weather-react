import React from "react";
import "./Search.css";

export default function Search() {
  return (
    <div className="Search">
      <input
        type="search"
        className="search-bar"
        placeholder="Type your city..."
      />
      <input type="submit" className="submit-button" value="Search" />
    </div>
  );
}
