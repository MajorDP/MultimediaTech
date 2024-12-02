import styles from "./Loader.module.css";
import logo from "./images/projectLogo.png";
function Loader({ timeout }) {
  return (
    <div className={styles.loader}>
      <img src={logo} alt="Loading..." className={styles.logo} />
    </div>
  );
}

export default Loader;
