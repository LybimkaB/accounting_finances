import React from "react";
import InputArea from "../inputAreas/InputArea";
import styles from "./createAccountForm.module.css";
import Btn from "../btn/Btn";
import { NavLink } from "react-router-dom";

function CreateAccountForm() {
  return (
    <div className={styles.firstPage}>
      <div className={styles.loginForm}>
        <h2 className={styles.titleForm}>
          <span className={styles.loginText}>Create</span> your account
        </h2>
        <form action="" method="get">
          <InputArea name="Username" type="text" />
          <InputArea name="Email" type="email" />
          <InputArea name="Password" type="password" />
          <InputArea name="Repeat the password" type="password" />
          <div className={styles.btn}>
            <Btn text="Create" />
          </div>
        </form>
        <p className={styles.createAc}>
          <NavLink to="*">Sign in</NavLink>
        </p>
      </div>
    </div>
  );
}

export default CreateAccountForm;
