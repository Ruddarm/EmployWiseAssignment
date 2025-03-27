import cStyle from "./Comp.module.css";
function InputLabel({ label, customClass }) {
  return (
    <label className={`${cStyle.inputLabel} ${customClass}`}>{label}</label>
  );
}
export default InputLabel;
