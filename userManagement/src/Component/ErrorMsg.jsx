import cStyle from "./Comp.module.css";
function ErrorMsg({ msg }) {
  return <p className={cStyle.ErrorMsg}>{msg}</p>;
}


export default ErrorMsg;