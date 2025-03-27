import React from "react";
import LFStyle from "./LoginForm.module.css";
import InputFeild from "../../Component/InputFeild";
import InputLabel from "../../Component/InputLabel";
import ErrorMsg from "../../Component/ErrorMsg";
import SuccessBtn from "../../Component/SuccessBtn";
function LoginForm() {
  return (
    <>
      <div className={LFStyle.LoginFormContainer}>
        <div style={{ width: "100%" }}>
          <h1 className={LFStyle.singIn}>Sing In</h1>
        </div>
        <div className={LFStyle.LoginForm}>
          <InputLabel label={"Email"}></InputLabel>
          <InputFeild
            type={"email"}
            name={"email"}
            placeHolder={"E.g user@gmai.com"}
          ></InputFeild>
          {/* <ErrorMsg msg={"Invalid Email"}></ErrorMsg> */}
          <InputLabel label={"Password"}></InputLabel>
          <InputFeild type={"password"} placeHolder={"*******"}></InputFeild>
          <div className="flex-row flex-btw flex-align-center pad-top-bottom">
            <div>
              <InputFeild type={"checkbox"}></InputFeild>
              <InputLabel
                customClass={"sml-text"}
                label={"Remember me"}
              ></InputLabel>
            </div>
            <div>
              <a href="#">Forget Password?</a>
            </div>
          </div>
          {/* <ErrorMsg msg={"Passowrd is required"}></ErrorMsg> */}
          <div className={LFStyle.Submit}>
            <SuccessBtn value={"Log in"}></SuccessBtn>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginForm;
