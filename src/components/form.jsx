import styles from "../css_modules/form.module.css";
import { useState, useEffect } from "react";
export default function Form({ apiKey, weatherData, setWeatherData }) {
  const url = "https://api.openweathermap.org/data/2.5/weather";
  const [input, setInput] = useState("");

  async function fetchWeather(query) {
    const response = await fetch(
      `${url}?appid=${apiKey}&q=${query}&units=metric`
    );
    const data = await response.json();
    if (data.cod == 200) {
    setWeatherData(data);
    }
  }
  function buttonClick(e) {
    e.preventDefault();
    fetchWeather(input);
  }
  useEffect(() => {
    fetchWeather("kathmandu");
  }, []);
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
