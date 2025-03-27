// const { Children } = require("react");
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
          <SideBar></SideBar>
          <div className={mainStyle.DashBoardContainer}>{children}</div>
        </div>
      </div>
    </>
  );
}

export default MainLayout;
