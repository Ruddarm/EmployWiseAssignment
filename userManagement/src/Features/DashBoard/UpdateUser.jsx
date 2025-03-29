import InputFeild from "../../Component/InputFeild";
import InputLabel from "../../Component/InputLabel";
import SuccessBtn from "../../Component/SuccessBtn";
import { useUser } from "../../Hooks/userContex";
import Style from "./UpdateUser.module.css";

function UpdateUser() {
  const { selectedUser, updateSingleUser, setSelectedUser } = useUser();

  // Handle input change directly on selectedUser
  const handleChange = (e) => {
    const { name, value } = e.target;
    setSelectedUser((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className={Style.UpdateUserContainer}>
      <div className={Style.avatarContainer}>
        <img
          className={Style.avatarContainerimg}
          src={selectedUser?.avatar || ""}
          alt="User Avatar"
        />
      </div>
      <div className={Style.upDateinfoContianer}>
        <InputLabel customClass={"sml-text"} label={"First Name"} />
        <InputFeild
          name="first_name"
          value={selectedUser?.first_name || ""}
          placeHolder="First Name"
          onChangeFunc={handleChange}
        />
        <InputLabel customClass={"sml-text"} label={"Last Name"} />
        <InputFeild
          name="last_name"
          value={selectedUser?.last_name || ""}
          placeHolder="Last Name"
          onChangeFunc={handleChange}
        />
        <InputLabel customClass={"sml-text"} label={"Email"} />
        <InputFeild
          name="email"
          value={selectedUser?.email || ""}
          placeHolder="Email"
          onChangeFunc={handleChange}
        />
        <div className={Style.updateBtnContainer}>
          <SuccessBtn
            onClickFun={() => updateSingleUser(selectedUser)}
            value="Update"
          />
        </div>
      </div>
    </div>
  );
}

export default UpdateUser;
