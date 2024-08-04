import styles from "../css_modules/weatherContent.module.css";

export default function WeatherContent({ weatherData }) {
  return <div className={styles.container}>{JSON.stringify(weatherData)}</div>;
}
