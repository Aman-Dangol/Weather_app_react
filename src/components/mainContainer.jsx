import styles from "../css_modules/mainContainer.module.css";
import WeatherContent from "./WeatherContent";
import Temperature from "./Temperature";
import Other from "./other";
export default function MainContainer({ weatherData }) {
  let ele = <div>loading</div>;
  if (weatherData) {
    ele = (
      <div className={styles.container}>
        <Temperature weatherData={weatherData}></Temperature>
        <WeatherContent weatherData={weatherData}></WeatherContent>
        <Other></Other>
      </div>
    );
  }
  return ele;
}
