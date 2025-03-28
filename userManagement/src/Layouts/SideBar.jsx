import sStyle from "./SideBar.module.css";
import closeicon from "../assets/close.png";

function SideBar({ children }) {
  return (
    <>
      <div className={sStyle.SideBarContianer}>
        <div className={sStyle.CloseContianer}>
          <button className={sStyle.CloseBtn}>
            <img id={sStyle.CloseIcon} src={closeicon}></img>
          </button>
        </div>
        {children}
      </div>
    </>
  );
}

export default SideBar;
