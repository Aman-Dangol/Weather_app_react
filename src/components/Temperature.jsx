import styles from "../css_modules/tempContainer.module.css";
export default function Temperature({ weatherData }) {
  return (
    <div className={styles.container}>
      <h2>
        {weatherData.main.temp} <sup>o</sup>C
      </h2>
      <p>
        feels like : <strong>{weatherData.main["feels_like"]}</strong>
        <sup>o</sup> C{" "}
      </p>
    </div>
  );
}
