import React from "react";
import "./Search.css";

export default function Search() {
  return (
    <form className="Search">
      <input
        type="search"
        className="search-bar form-control"
        placeholder="Type your city..."
      />

      <input
        type="submit"
        className="btn btn-primary submit-button"
        value="Search"
      />
    </form>
  );
}
