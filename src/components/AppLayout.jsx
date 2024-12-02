import { Outlet, useLocation } from "react-router-dom";
import Navigation from "./Navigation";

import styles from "./AppLayout.module.css";
import Loader from "./Loader";
import { useEffect, useState } from "react";

function AppLayout() {
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation(); // Detects route changes

  useEffect(() => {
    // Trigger loading animation every time the route changes
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500); // Adjust the delay as needed

    // Clean up the timer to avoid memory leaks
    return () => clearTimeout(timer);
  }, [location]); // Re-run the effect on route change
  return (
    <div className={styles.container}>
      <Navigation />
      {isLoading === true ? (
        <Loader />
      ) : (
        <>
          <Outlet />
        </>
      )}
    </div>
  );
}

export default AppLayout;
