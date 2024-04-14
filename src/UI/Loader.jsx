import styles from "./Loader.module.css";
function Loader() {
  return (
    <div className="w-screen h-screen flex justify-center items-center bg-slate-800">
      <div className={styles[`pulsing-7`]}></div>
    </div>
  );
}

export default Loader;
