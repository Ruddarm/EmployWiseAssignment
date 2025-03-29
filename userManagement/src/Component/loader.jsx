import Style from "./Comp.module.css";
function LoaderDiv() {
  return (
    <>
      <div>
        <div className={Style.loaderContainer}>
          <div className={Style.loader}></div>
        </div>
      </div>
    </>
  );
}
export default LoaderDiv;