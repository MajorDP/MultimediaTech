import { useEffect, useState } from "react";
import Loader from "./Loader";
import styles from "./SelectedExcercise.module.css";

function SelectedExercise({ selectedExcercise, isLoading, setIsLoading }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [isLoading]);

  return (
    <div className={styles.container}>
      {isLoading && <Loader />} {/* Show Loader if loading */}
      {selectedExcercise !== undefined && isLoading === false ? (
        <>
          <div className={styles.intro}>
            <h3>{selectedExcercise.name}</h3>
            <p>{selectedExcercise.description.introduction}</p>
            <div>
              <img src={selectedExcercise.logo} alt={selectedExcercise.name} />
            </div>
          </div>

          <div className={styles.excerciseInfo}>
            <div className={styles.excerciseInfoIntro}>
              <p>Form</p>
              <span>{selectedExcercise.description.form.intro}</span>
              <ul>
                {selectedExcercise.description.form.steps.map((step, index) => (
                  <li key={index}>
                    <p className={styles.formTitle}>{step.name}</p>
                    <ul>
                      {step.desc.map((el, subIndex) => (
                        <li key={subIndex}>{el}</li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>

              <div className={styles.intro} style={{ marginTop: "3rem" }}>
                <h3>Demonstration:</h3>
                <div>
                  <img
                    src={selectedExcercise.img}
                    alt={selectedExcercise.name}
                  />
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        ""
      )}
      {selectedExcercise === undefined && isLoading === false ? (
        <p className={styles.placeholder}>Select and exercise to begin!</p>
      ) : (
        ""
      )}
    </div>
  );
}

export default SelectedExercise;
