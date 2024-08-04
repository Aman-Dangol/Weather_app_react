import { apiKey } from "./apiKey";
import "./css_modules/global.css";
import Header from "./components/header";
import Form from "./components/form";
import MainContainer from "./components/MainContainer";

import { useState } from "react";

function App() {
  const [weatherData, setWeatherData] = useState("");
  // console.clear();
  return (
    <>
      <Header></Header>
      <Form
        apiKey={apiKey}
        weatherData={weatherData}
        setWeatherData={setWeatherData}
      ></Form>
      <MainContainer weatherData={weatherData}></MainContainer>
    </>
  );
}

export default App;
