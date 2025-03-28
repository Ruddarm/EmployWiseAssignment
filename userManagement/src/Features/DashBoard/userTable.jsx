import tStyle from "./userTable.module.css";
import edit from "../../assets/pen.png";
import delLogo from "../../assets/deleteLogo.png";
function UserRow() {
  return (
    <>
      <tr className={tStyle.userTableRow}>
        <td className={tStyle.sr}>2</td>
        <td>
          <div className={tStyle.aimge}>
            <img
              className={tStyle.avtartimg}
              src="https://reqres.in/img/faces/1-image.jpg"
              alt="User Avatar"
              width="40"
            />
          </div>
        </td>
        <td>George</td>
        <td>Bluth</td>
        <td>george.bluth@reqres.in</td>
        <td>
          <button className={tStyle.optionBtnContainer}>
            <img className={tStyle.optionLogo} src={edit}></img>
          </button>
        </td>
        <td>
          <button className={tStyle.optionBtnContainer}>
            <img className={tStyle.optionLogo} src={delLogo}>
            
            </img>
          </button>
        </td>
      </tr>
    </>
  );
}
function UserTable() {
  return (
    <div className={tStyle.tableContainer}>
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
              {Array.from({ length: 15 }).map((_, index) => (
                <UserRow key={index} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default UserTable;
