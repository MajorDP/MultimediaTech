import { Link } from "react-router-dom";
import styles from "./Navigation.module.css";
import logo from "./images/projectLogo.png";
function Navigation() {
  return (
    <header className={styles.container}>
      <ul>
        <li>
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </li>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/excercises">Exercises</Link>
        </li>
        <li>
          <Link to="/workouts">Workout plan</Link>
        </li>
      </ul>
    </header>
  );
}

export default Navigation;
