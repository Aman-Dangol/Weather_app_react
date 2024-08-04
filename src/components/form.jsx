import styles from "../css_modules/form.module.css";
import { useState } from "react";
export default function Form() {
  const [input, setInput] = useState("");
  function buttonClick(e) {
    e.preventDefault();
    console.log("fetch api will be called here");
  }
  return (
    <form className={styles.formContainer}>
      <input
        type="text"
        onChange={(e) => setInput(e.target.value)}
        value={input}
        placeholder="enter a city name"
      />
      <button
        onClick={(e) => {
          buttonClick(e);
        }}
      >
        submit
      </button>
    </form>
  );
}
