import hLayout from "./HeaderLayout.module.css";
import logo from "../assets/employwiselogo.png";
import daymode from "../assets/day-mode.png";
import user from "../assets/man.png";
function Header() {
  return (
    <>
      <div className={hLayout.HeaderLayoutContainer}>
        <div className={hLayout.HeaderRight}>
          <div className="flex-row">
            <img id={hLayout.logo} src={logo}></img>
          </div>
        </div>
        <div className={hLayout.HeaderLeft}>
          <div className={hLayout.leftContainer}>
            <ul className={hLayout.OptionListContianer}>
              <li>
                <button id={hLayout.HeaderBtn}>
                  <img id={hLayout.headerIcon} src={daymode}></img>
                </button>
              </li>
              <li>
                <button id={hLayout.HeaderBtn}>
                  <img id={hLayout.headerIcon} src={user}></img>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
