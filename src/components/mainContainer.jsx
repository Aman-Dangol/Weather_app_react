import styles from "../css_modules/mainContainer.module.css";
import WeatherContent from "./WeatherContent";
import Temperature from "./Temperature";
export default function MainContainer({ weatherData }) {
  let ele = <div>loading</div>;
  if (weatherData) {
    ele = (
      <div className={styles.container}>
        <Temperature weatherData={weatherData}></Temperature>
        <WeatherContent weatherData={weatherData}></WeatherContent>
        <div style={{ backgroundColor: "red", textAlign: "center" }}>div 3</div>
      </div>
    );
  }
  return ele;
}
