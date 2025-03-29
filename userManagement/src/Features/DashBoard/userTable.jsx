import tStyle from "./userTable.module.css";
import edit from "../../assets/pen.png";
import delLogo from "../../assets/deleteLogo.png";
import { UserList } from "../../Hooks/userHooks";
import { useCallback, useState } from "react";
import { useUser } from "../../Hooks/userContex";
import Loading from "../../Component/loader";
import LoaderDiv from "../../Component/loader";
function UserRow({ user, editFun, delFun, }) {
  // console.log(editFun);
  const [deleteEffect, setDeleteEffect] = useState(false);

  async function handelDelete() {
    setDeleteEffect(true);
    await new Promise((resolve) => setTimeout(resolve, 500));
    delFun(user.id);
    setDeleteEffect(false);
  }
  return (
    <>
      <tr
        className={`${tStyle.userTableRow} ${
          deleteEffect ? tStyle.deleteRow : ""
        }`}
      >
        <td className={tStyle.sr}>{user.id}</td>
        <td>
          <div className={tStyle.aimge}>
            <img
              className={tStyle.avtartimg}
              src={user.avatar}
              alt="User Avatar"
              width="40"
            />
          </div>
        </td>
        <td>{user.first_name}</td>
        <td>{user.last_name}</td>
        <td>{user.email}</td>
        <td>
          <button
            onClick={() => {
              console.log("clikc", user);
              editFun(user);
            }}
            className={tStyle.optionBtnContainer}
          >
            <img className={tStyle.optionLogo} src={edit}></img>
          </button>
        </td>
        <td>
          <button onClick={handelDelete} className={tStyle.optionBtnContainer}>
            <img className={tStyle.optionLogo} src={delLogo}></img>
          </button>
        </td>
      </tr>
    </>
  );
}
function UserTable() {
  const {userList , selectUser, handleDelete  } = useUser();
  const { updateUser } = useUser();
  const { loading } = UserList();
  const handleEdit = useCallback(
    (userData) => {
      console.log("Updating user:", userData);
      updateUser(userData);
    },
    [updateUser]
  );

  console.log("loading is ", loading);

  return (
    <div className={tStyle.tableContainer}>
      {loading && <LoaderDiv />}
      <div className={tStyle.scrlDiv}>
        <div className={tStyle.tableWrapper}>
          <table className={tStyle.userTable}>
            <thead>
              <tr className={tStyle.userTableRow}>
                <th className={tStyle.sr}>Sr.</th>
                <th>Avatar</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {userList?.map((data, key) => (
                <UserRow
                  delFun={handleDelete}
                  user={data}
                  key={key}
                  editFun={handleEdit}
                ></UserRow>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default UserTable;
