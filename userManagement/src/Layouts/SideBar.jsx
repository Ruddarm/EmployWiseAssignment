import sStyle from "./SideBar.module.css";
import closeicon from "../assets/close.png";
import { useUser } from "../Hooks/userContex";
function SideBar({ children }) {
  const {  openUpdate , closeUpdate } = useUser();
  // console.log(updateContainer);
  return (
    <>
      {openUpdate && (
        <div className={sStyle.SideBarContianer}>
          <div className={sStyle.CloseContianer}>
            <button onClick={closeUpdate} className={sStyle.CloseBtn}>
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
