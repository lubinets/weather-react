import axios from "axios";
import ClipLoader from "react-spinners/ClipLoader";

export default function Weather(props) {
  function handleWeather(response) {
    alert(
      `The temperature in ${props.city} is ${Math.round(
        response.data.main.temp
      )}˚C`
    );
  }
  let apiKey = "502dc8f7ae36e57af1974e18d16a86f8";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(handleWeather);
  return (
    <ClipLoader
      color="#000000"
      loading="true"
      size={150}
      aria-label="Loading Spinner"
      data-testid="loader"
    />
  );
}
