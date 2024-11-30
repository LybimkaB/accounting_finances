import React from "react";
import styles from "./InputArea.module.css";
import { useState } from "react";

function InputArea(props) {
  const [text, setText] = useState("");

  return (
    <div>
      <div className={styles.inputData}>
        <label htmlFor={props.name} className={styles.label}>
          {props.name}
        </label>
        <input
          type={props.type}
          name={props.name}
          className={styles.input}
          onChange={(e) => setText(e.target.value)}
          value={text}
          required
        ></input>
      </div>
    </div>
  );
}

export default InputArea;
