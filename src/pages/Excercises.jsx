import { useState } from "react";
import ExcerciseSelector from "../components/ExcerciseSelector";
import SelectedExcercise from "../components/SelectedExcercise";
import styles from "./Excercises.module.css";

function Excercises() {
  const [selectedExcercise, setSelectedExercise] = useState(undefined);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className={styles.container}>
      <ExcerciseSelector
        setSelectedExercise={setSelectedExercise}
        setIsLoading={setIsLoading}
      />
      <SelectedExcercise
        selectedExcercise={selectedExcercise}
        isLoading={isLoading}
        setIsLoading={setIsLoading}
      />
    </div>
  );
}

export default Excercises;
