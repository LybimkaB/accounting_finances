import React from "react";
import styles from "./addForm.module.css";
import logo from "../../img/moneyLogo.svg";
import menuOpen from "../../img/menu.svg";
import home from "../../img/HomeIcon.svg";
import income from "../../img/profitsIcon.svg";
import expenses from "../../img/expensesIcon.svg";
import directory from "../../img/categoryIcon.svg";
import AddIncomeExpensesFrom from "./addIncomeForm/AddIncomeExpensesFrom";
import { useState, useRef } from "react";

function AddForm() {
  const [isView, setMenu] = useState(true);

  const handleClick = () => {
    setMenu(!isView);
  };

  return (
    <div
      className={`${styles.addForm}  ${isView ? "" : styles.addFormNoActive}`}
    >
      {/* Header */}
      <div className={styles.header}>
        <img src={logo} alt="logo" className="logo" />
        <div className={styles.header_right_cont}>
          <div className={styles.name}>nikname</div>
          <button onClick={handleClick} className={styles.menuOpen}></button>
        </div>
      </div>

      {/* Add content */}
      <div className={styles.content}>
        <AddIncomeExpensesFrom titleForm="Add Income" />
      </div>

      {/* Menu content */}
      <div className={`${styles.menu}  ${isView ? "" : styles.activeNot}`}>
        {/* menu links */}
        <ul className={`${styles.menuList}`}>
          <div className={styles.menu_cont}>
            <img src={home} alt="home" className={styles.img} />
            <li>Home</li>
          </div>
          <div className={styles.menu_cont}>
            <img src={income} alt="income" className={styles.img} />
            <li>Income</li>
          </div>
          <div className={styles.menu_cont}>
            <img src={expenses} alt="expenses" className={styles.img} />
            <li>Expenses</li>
          </div>
          <div className={styles.menu_cont}>
            <img src={directory} alt="category" className={styles.img} />
            <li>Directory of categories</li>
          </div>
        </ul>

        {/* footer in the menu */}
        <div className={styles.footer}>
          <ul className={styles.footerList}>
            <li className={styles.footer_cont}>
              <a href="">About the service</a>
            </li>
            <li className={styles.footer_cont}>
              <a href="">Copyright</a>
            </li>
            <li className={styles.footer_cont}>
              <a href="">Contact us </a>
            </li>
          </ul>
          <p className={styles.footerText}>© 2024 KarNik </p>
        </div>
      </div>
    </div>
  );
}

export default AddForm;
