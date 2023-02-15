import React from "react";

export default function FormattedDate(props) {
  let now = props.date;
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[props.date.getDay()];
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let month = months[props.date.getMonth()];

  let ending = ["st", "nd", "rd", "th"];
  let numberEnding;
  if (now.getDate() === 1 || now.getDate() === 21 || now.getDate() === 31) {
    numberEnding = ending[0];
  }
  if (now.getDate() === 2 || now.getDate() === 22) {
    numberEnding = ending[1];
  }
  if (now.getDate() === 3 || now.getDate() === 23) {
    numberEnding = ending[2];
  }
  if (
    (now.getDate() >= 4 && now.getDate() <= 20) ||
    (now.getDate() >= 24 && now.getDate() <= 30)
  ) {
    numberEnding = ending[3];
  }

  return (
    <span>
      {day}, {now.getDate()}
      {numberEnding} of {month}
    </span>
  );
}
