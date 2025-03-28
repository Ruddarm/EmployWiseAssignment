import hLayout from  "./HeaderLayout.module.css";
import logo from "../assets/employwiselogo.png";
function Header(){
    return(
        <>
            <div className={hLayout.HeaderLayoutContainer}>
                <div className={hLayout.HeaderRight}>
                    <div className="flex-row">
                        <img id={hLayout.logo} src={logo}></img>
                    </div>
                
                </div>
                <div className={hLayout.HeaderLeft}>

                </div>
            </div>
        </>
    )
}

export default Header;