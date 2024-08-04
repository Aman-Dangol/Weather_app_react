import styles from "../css_modules/form.module.css";
import { useState } from "react";
export default function Form({ apiKey, setWeatherData }) {
  const url = "https://api.openweathermap.org/data/2.5/weather";
  const [input, setInput] = useState("");
  async function fetchWeather() {
    const response = await fetch(`${url}?appid=${apiKey}&q=nepal`);
    const data = await response.json();
    setWeatherData(data);
    console.log(data);
  }
  function buttonClick(e) {
    e.preventDefault();
    fetchWeather();
  }
  return (
    <form className={styles.formContainer}>
      <input
        type="text"
        onChange={(e) => setInput(e.target.value)}
        value={input}
        placeholder="enter a city name"
      />
      <button
        onClick={(e) => {
          buttonClick(e);
        }}
      >
        submit
      </button>
    </form>
  );
}
