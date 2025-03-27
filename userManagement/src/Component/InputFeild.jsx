
import cStyle from "./Comp.module.css";
function InputFeild({ onChangeFunc, value, type, required, id, customClass ,placeHolder,name}) {
  return (
    <input
      type={type}
      placeholder={placeHolder}
      id={id}
      name={name}
      value={value}
      onChange={(e) => {
        onChangeFunc(e);
      }}
      className={`${cStyle.InputFeild} ${customClass}`}
    />
  );
}

export default InputFeild;
