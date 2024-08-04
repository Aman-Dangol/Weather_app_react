import styles from "../css_modules/weatherContent.module.css";
import Image from "./image";
export default function WeatherContent({ weatherData }) {
  return (
    <div className={styles.container}>
      <Image imgName={weatherData.weather[0].icon}></Image>
      <h3>{weatherData.weather[0].main}</h3>
    </div>
  );
}
