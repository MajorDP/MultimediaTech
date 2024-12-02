import { Link } from "react-router-dom";
import styles from "./Home.module.css";
import img from "./homePageImage.jpg";

function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <h1>Boost Your Fitness</h1>
        <p>
          Transform your life with just 30 minutes of exercise a day! Boost your
          mood, energy, and health. Find what you love, stay consistent, and
          watch yourself thrive!
        </p>
        <Link to="/workouts" className={styles.button}>
          Get started
        </Link>
      </div>

      <div className={styles.image}>
        <img src={img} alt="backg" />
      </div>
    </div>
  );
}

export default Home;
