import styles from "../css_modules/other.module.css";

export default function Other({ weatherData }) {
  return (
    <div className={styles.container}>
      <div className={styles.ddiv}>
        <span class="material-symbols-outlined">humidity_percentage</span>
        <span>{weatherData.main.humidity}%</span>
        <span>Humidity</span>
      </div>
      <div className={styles.ddiv}>
        <span class="material-symbols-outlined">air</span>
        <span>{weatherData.wind.speed}km/hr</span>
        <span>Wind speed</span>
      </div>
      <div className={styles.ddiv}>
        <span class="material-symbols-outlined">compress</span>
        <span title="hectoPascals">{weatherData.main.pressure}hPa</span>
        <span>Pressure</span>
      </div>
      <div className={styles.ddiv}>
        <span class="material-symbols-outlined">visibility</span> <span>{weatherData.visibility/1000}km</span>
        <span>Visibility</span>
      </div>
    </div>
  );
}
