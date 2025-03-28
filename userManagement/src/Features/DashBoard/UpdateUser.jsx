import InputFeild from "../../Component/InputFeild";
import InputLabel from "../../Component/InputLabel";
import SuccessBtn from "../../Component/SuccessBtn";
import Style from "./UpdateUser.module.css";
function UpdateUser() {
  return (
    <div className={Style.UpdateUserContainer}>
  
      <div className={Style.avatarContainer}>
        <img
          className={Style.avatarContainerimg}
          src="https://reqres.in/img/faces/1-image.jpg"
        ></img>
      </div>
      <div className={Style.upDateinfoContianer}>
        <InputLabel customClass={"sml-text"} label={"First Name"}></InputLabel>
        <InputFeild placeHolder={""}></InputFeild>
        <InputLabel customClass={"sml-text"} label={"Last Name"}></InputLabel>
        <InputFeild placeHolder={"Last Name"}></InputFeild>
        <InputLabel customClass={"sml-text"} label={"Email"}></InputLabel>
        <InputFeild placeHolder={"Email"}></InputFeild>
        <div className={Style.updateBtnContainer}>
          <SuccessBtn value={"Update"}></SuccessBtn>
        </div>
      </div>
    </div>
  );
}

export default UpdateUser;
