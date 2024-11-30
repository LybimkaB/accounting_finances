import React from "react";
import InputArea from "../inputAreas/InputArea";
import styles from "./forgetPasswordForm.module.css";
import Btn from "../btn/Btn";
import { NavLink } from "react-router-dom";

function ForgetPasswordForm() {
  return (
    <div className={styles.firstPage}>
      <div className={styles.loginForm}>
        <h2 className={styles.titleForm}>
          <span className={styles.loginText}>Forget Password?</span>
        </h2>
        <form action="" method="get">
          <InputArea name="Enter your email address" type="email" />
          <div className={styles.btn}>
            <Btn text="Login" />
          </div>
        </form>
        <div className={styles.links}>
          <p className={styles.fogetPas}>
            <NavLink to="/create">Create Account</NavLink>
          </p>
          <p className={styles.createAc}>
            <NavLink to="*">Enter the password</NavLink>
          </p>
        </div>
      </div>
    </div>
  );
}

export default ForgetPasswordForm;
