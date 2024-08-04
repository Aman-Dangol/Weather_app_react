import styles from "../css_modules/mainContainer.module.css";
import WeatherContent from "./WeatherContent";
export default function MainContainer({weatherData}) {
  return (
    <div className={styles.container}>
      <WeatherContent weatherData={weatherData}></WeatherContent>
    </div>
  );
}
