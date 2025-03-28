import SearchBar from "../Features/DashBoard/SearchBar";
import UserTable from "../Features/DashBoard/userTable";
import MainLayout from "../Layouts/MainLayout";
import Dstyle from "./DashBoard.module.css";

function DashBoardPage() {
  return (
    <MainLayout>
      {" "}
      <div className={Dstyle.DashBoardPageContainer}>
        <SearchBar></SearchBar>
        <div className={Dstyle.DashBoardUserTableContianer}>
          <UserTable></UserTable>
        </div>
        <div className={Dstyle.DashBoardPageIndexContainer}>
          <PageBtn idx={1}></PageBtn>
          <PageBtn idx={2}></PageBtn>
          <PageBtn idx={3}></PageBtn>
          <PageBtn idx={4}></PageBtn>
        </div>
      </div>
    </MainLayout>
  );
}
function PageBtn({ idx }) {
  return <button className={Dstyle.pageBtn}>{idx}</button>;
}
export default DashBoardPage;
