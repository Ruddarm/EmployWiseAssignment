import SearchBar from "../Features/DashBoard/SearchBar";
import UserTable from "../Features/DashBoard/userTable";
import MainLayout from "../Layouts/MainLayout";
import Dstyle from "./DashBoard.module.css";
import { UserList } from "../Hooks/userHooks";
import Loading from "../Component/loader";
function DashBoardPage() {
  const { user, loading, error, nextPage } = UserList();
  // console.log(user);
  return (
    <MainLayout>
      <div className={Dstyle.DashBoardPageContainer}>

        <SearchBar></SearchBar>
        <div className={Dstyle.DashBoardUserTableContianer}>
          <UserTable userlist={user?.data ? user.data : []}></UserTable>
        </div>
        <div className={Dstyle.DashBoardPageIndexContainer}>
          {Array.from({ length: parseInt(user?.total_pages) }).map((_, idx) => (
            <PageBtn key={idx} clickFun={nextPage} idx={idx + 1}></PageBtn>
          ))}
        </div>
      </div>
    </MainLayout>
  );
}
function PageBtn({ idx, clickFun }) {
  return (
    <button
      onClick={() => {
        // console.log("click",idx)
        clickFun(idx);
      }}
      className={Dstyle.pageBtn}
    >
      {idx}
    </button>
  );
}
export default DashBoardPage;
