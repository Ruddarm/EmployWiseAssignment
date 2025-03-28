// const { Children } = require("react");
import UpdateUser from "../Features/DashBoard/UpdateUser";
import Header from "./HeaderLayout";
import mainStyle from "./MainLayout.module.css";
import SideBar from "./SideBar";
function MainLayout({ children }) {
  return (
    <>
      <div className={mainStyle.MainLayoutContainer}>
        {/* Header */}
        <Header></Header>
        {/* Body */}
        <div className={mainStyle.MainBodyContainer}>
          <SideBar>
            <UpdateUser></UpdateUser>
          </SideBar>
          <div className={mainStyle.DashBoardContainer}>{children}</div>
        </div>
      </div>
    </>
  );
}

export default MainLayout;
