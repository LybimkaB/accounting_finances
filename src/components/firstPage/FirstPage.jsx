import React from "react";
import styles from "./firstPage.module.css";
import LoginForm from "./loginForm/LoginForm";
import CreateAccountForm from "./createAccountForm/CreateAccountForm";
import ForgetPasswordForm from "./forgetPasswordForm/ForgetPasswordForm";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function FirstPageForm() {
  return (
    <BrowserRouter>
      <div className={styles.pageBg}>
        <Routes>
          <Route path="*" element={<LoginForm />} />
          <Route path="/create" element={<CreateAccountForm />} />
          <Route path="/forgetPassword" element={<ForgetPasswordForm />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default FirstPageForm;
