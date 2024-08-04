import { apiKey } from "./apiKey";
import "./css_modules/global.css";
import Header from "./components/header";
import Form from "./components/form";
import MainContainer from "./components/MainContainer";
import { useState } from "react";

function App() {
  console.clear();
  return (
    <>
      <Header></Header>
      <Form></Form>
      <MainContainer></MainContainer>
    </>
  );
}

export default App;
