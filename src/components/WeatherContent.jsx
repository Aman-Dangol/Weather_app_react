import styles from "../css_modules/weatherContent.module.css";
export default function WeatherContent({ weatherData }) {
  return (
    <div className={styles.container}>
      <img
        src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
        alt="image"
      />
    </div>
  );
}
