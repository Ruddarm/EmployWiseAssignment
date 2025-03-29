// const { Children } = require("react");
import UpdateUser from "../Features/DashBoard/UpdateUser.jsx";
import { UserProvider, useUser } from "../Hooks/userContex.jsx";
import Header from "./HeaderLayout";
import mainStyle from "./MainLayout.module.css";
import SideBar from "./SideBar";
function MainLayout({ children }) {
  // const { user, setUser } = useUser();
  return (
    <>
      <div className={mainStyle.MainLayoutContainer}>
        {/* Header */}
        <Header></Header>
        {/* Body */}
        <div className={mainStyle.MainBodyContainer}>
          <UserProvider>
            <SideBar>
              <UpdateUser></UpdateUser>
            </SideBar>
            <div className={mainStyle.DashBoardContainer}>{children}</div>
          </UserProvider>
        </div>
      </div>
    </>
  );
}

export default MainLayout;
