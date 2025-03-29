import React from "react";
import LFStyle from "./LoginForm.module.css";
import InputFeild from "../../Component/InputFeild";
import InputLabel from "../../Component/InputLabel";
import ErrorMsg from "../../Component/ErrorMsg";
import SuccessBtn from "../../Component/SuccessBtn";
import useAuthHooks from "../../Hooks/authHooks";
function LoginForm() {
  const {
    credentials,
    error,
    setError,
    loading,
    validate,
    handelLogin,
    handleEmailChange,
    handlePasswordChange,
  } = useAuthHooks();
  return (
    <>
      <div className={LFStyle.LoginFormContainer}>
        <div style={{ width: "100%" }}>
          <h1 className={LFStyle.singIn}>Sing In</h1>
        </div>
        <div className={LFStyle.LoginForm}>
          <div>
            <ErrorMsg msg={error}></ErrorMsg>
          </div>
          <InputLabel label={"Email"}></InputLabel>
          <InputFeild
            value={credentials.email}
            type={"email"}
            name={"email"}
            onChangeFunc={handleEmailChange}
            placeHolder={"E.g user@gmai.com"}
          ></InputFeild>
          {/* <ErrorMsg msg={"Invalid Email"}></ErrorMsg> */}
          <InputLabel label={"Password"}></InputLabel>
          <InputFeild
            value={credentials.password}
            type={"password"}
            onChangeFunc={handlePasswordChange}
            placeHolder={"*******"}
          ></InputFeild>
          <div className="flex-row flex-btw  flex-align-center pad-top-bottom">
            <div className="flex-row  flex-align-center ">
              <InputFeild type={"checkbox"}></InputFeild>
              <InputLabel
                customClass={"sml-text"}
                label={"Remember"}
              ></InputLabel>
            </div>
            <div>
              <a href="#">Forget Password?</a>
            </div>
          </div>
          {/* <ErrorMsg msg={"Passowrd is required"}></ErrorMsg> */}
          <div className={LFStyle.Submit}>
            <SuccessBtn onClickFun={handelLogin} value={"Log in"}></SuccessBtn>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginForm;
