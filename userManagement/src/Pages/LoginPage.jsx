import React from "react";

import LogStyle from "./LoginPage.module.css";
import LoginForm from "../Features/Auth/loginForm";
import LoginLayout from "../Layouts/LoginLayout";

function LoginPage() {
  return (
    <>
      <LoginLayout>
        <div className={LogStyle.LoginPageContainer}>
          <div className={LogStyle.LoginBannerContainer}></div>
          <div className={LogStyle.LoginFormContainer}>
            <LoginForm></LoginForm>
          </div>
        </div>
      </LoginLayout>
    </>
  );
}

export default LoginPage;
