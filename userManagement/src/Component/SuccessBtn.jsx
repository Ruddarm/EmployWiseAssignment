import cStyle from "./Comp.module.css";

function SuccessBtn({ value, onClickFun, id, customClass }) {
  return (
    <button className={`${cStyle.SuccessBtn} ${customClass}`} onClick={onClickFun}>
      {value}
    </button>
  );
}

export default SuccessBtn;
