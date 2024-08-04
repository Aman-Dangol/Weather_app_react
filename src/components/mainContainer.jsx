import styles from "../css_modules/mainContainer.module.css";
import WeatherContent from "./WeatherContent";
export default function MainContainer() {
  return (
    <div className={styles.container}>
      <WeatherContent></WeatherContent>
    </div>
  );
}
