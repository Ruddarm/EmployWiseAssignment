import SearchBar from "../Features/DashBoard/SearchBar";
import UserTable from "../Features/DashBoard/userTable";
import MainLayout from "../Layouts/MainLayout";
import Dstyle from "./DashBoard.module.css";
import { UserList } from "../Hooks/userHooks";
import Loading from "../Component/loader";
import { useUser } from "../Hooks/userContex";
function DashBoardPage() {
  const { userList, loading, totalPage ,error, setPage , handleDelete } = useUser();
  console.log(userList)
  return (
    <MainLayout>
      <div className={Dstyle.DashBoardPageContainer}>
        <SearchBar></SearchBar>
        <div className={Dstyle.DashBoardUserTableContianer}>
          <UserTable></UserTable>
        </div>
        <div className={Dstyle.DashBoardPageIndexContainer}>
          {Array.from({ length: parseInt(totalPage) }).map((_, idx) => (
            <PageBtn key={idx} clickFun={setPage} idx={idx + 1}></PageBtn>
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
