import InputFeild from "../../Component/InputFeild";
import InputLabel from "../../Component/InputLabel";
import SuccessBtn from "../../Component/SuccessBtn";
import { useUser } from "../../Hooks/userContex";
import Style from "./UpdateUser.module.css";
import prsnIcon from "../../assets/man.png";
import { useEffect } from "react";
function UpdateUser() {
  const { user } = useUser();
  return (
    <div className={Style.UpdateUserContainer}>
      <div className={Style.avatarContainer}>
        <img
          className={Style.avatarContainerimg}
          src={user ? user.avatar : ""}
        ></img>
      </div>
      <div className={Style.upDateinfoContianer}>
        <InputLabel customClass={"sml-text"} label={"First Name"}></InputLabel>
        <InputFeild
          value={user ? user.first_name : ""}
          placeHolder={""}
        ></InputFeild>
        <InputLabel customClass={"sml-text"} label={"Last Name"}></InputLabel>
        <InputFeild
          value={user ? user.last_name : ""}
          placeHolder={"Last Name"}
        ></InputFeild>
        <InputLabel customClass={"sml-text"} label={"Email"}></InputLabel>
        <InputFeild
          value={user ? user.email : ""}
          placeHolder={"Email"}
        ></InputFeild>
        <div className={Style.updateBtnContainer}>
          <SuccessBtn value={"Update"}></SuccessBtn>
        </div>
      </div>
    </div>
  );
}

export default UpdateUser;
