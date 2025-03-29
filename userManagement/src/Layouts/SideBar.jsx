import sStyle from "./SideBar.module.css";
import closeicon from "../assets/close.png";
import { useUser } from "../Hooks/userContex";
function SideBar({ children }) {
  const { user, updateContainer } = useUser();
  // console.log(updateContainer);
  return (
    <>
      {updateContainer.update && (
        <div className={sStyle.SideBarContianer}>
          <div className={sStyle.CloseContianer}>
            <button className={sStyle.CloseBtn}>
              <img id={sStyle.CloseIcon} src={closeicon}></img>
            </button>
          </div>
          {children}
        </div>
      )}
    </>
  );
}

export default SideBar;
