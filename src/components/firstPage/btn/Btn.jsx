import React from "react";
import styles from "./btn.module.css";

function Btn(props) {
  return (
    <div className={styles.btnFirstPage}>
      <input type="submit" value={props.text} />
    </div>
  );
}

export default Btn;
