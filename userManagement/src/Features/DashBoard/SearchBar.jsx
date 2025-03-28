import InputFeild from "../../Component/InputFeild";
import filterIcon from "../../assets/sort.png";
import sStyle from "./SearchBar.module.css";
function SearchBar() {
  return (
    <div className={sStyle.SearchBarContainer}>
      <div className={sStyle.SeachBarContainer}>
        <InputFeild placeHolder={"Find By Name"}></InputFeild>
        <div className={sStyle.FilterContainer}>
          <img id={sStyle.FilterIcon} src={filterIcon}></img>
          <button className={sStyle.FilterBtn}>Filter</button>
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
