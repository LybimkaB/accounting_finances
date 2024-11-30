import React from "react";
import InputArea from "../inputAreas/InputArea";
import styles from "./loginForm.module.css";
import Btn from "../btn/Btn";
import { NavLink } from "react-router-dom";

function LoginForm() {
  return (
    <div className={styles.firstPage}>
      <p className={styles.title1}>Hello!</p>
      <p className={styles.title2}>
        <span>Good Morning</span>
      </p>
      <div className={styles.loginForm}>
        <h2 className={styles.titleForm}>
          <span className={styles.loginText}>Login</span> your account
        </h2>
        <form form action="" method="get">
          <InputArea name="Username" type="text" />
          <InputArea name="Password" type="password" />
          <p className={styles.fogetPas}>
            <NavLink to="/forgetPassword">forget password?</NavLink>
          </p>
          <div className={styles.btn}>
            <Btn text="Login" />
          </div>
        </form>

        <p className={styles.createAc}>
          <NavLink to="/create">Create Account</NavLink>
        </p>
      </div>
    </div>
  );
}

export default LoginForm;
