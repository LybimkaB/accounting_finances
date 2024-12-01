import React from "react";
import styles from "./AddIncomeExpensesFrom.module.css";
import { useState } from "react";

function AddIncomeExpensesFrom(props) {
  const [text, setText] = useState("");

  return (
    <div className={styles.addIncomeExpensesForm}>
      <div className={styles.add}>
        <p className={styles.titleForm}>{props.titleForm}</p>
        {/* форма добавления */}
        <form className={styles.addArea}>
          <input
            type="text"
            placeholder="name"
            onChange={(e) => setText(e.target.value)}
          />
          <input type="date" onChange={(e) => setText(e.target.value)} />
          <input
            type="text"
            placeholder="category"
            onChange={(e) => setText(e.target.value)}
          />
          <input
            type="number"
            placeholder="prise"
            min="0"
            onChange={(e) => setText(e.target.value)}
          />
          <input type="submit" value="+" className={styles.btnAdd} />
        </form>
        {/* список */}
        <div className={styles.list}>
          <p className={styles.titleList}>For all the time</p>
          <div>dsfs</div>
          <div>dsfs</div>
          <div>dsfs</div>
        </div>
      </div>
    </div>
  );
}

export default AddIncomeExpensesFrom;
