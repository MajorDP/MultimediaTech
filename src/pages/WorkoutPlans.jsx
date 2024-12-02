// WorkoutPlan.js
import React, { useState } from "react";
import styles from "./WorkoutPlan.module.css";

const workoutPlan = [
  {
    day: "Day 1: Full Body",
    exercises: [
      "Bench Press",
      "Squat",
      "Pull Ups",
      "Overhead Press",
      "Side Delts Superset",
    ],
  },
  {
    day: "Day 2: Full Body",
    exercises: [
      "Bench Press",
      "Deadlift",
      "Pull Ups",
      "Overhead Press",
      "Side Delts Superset",
    ],
  },
  {
    day: "Day 3: Full Body",
    exercises: [
      "Squat",
      "Deadlift",
      "Pull Ups",
      "Overhead Press",
      "Side Delts Superset",
    ],
  },
];

export default function WorkoutPlan() {
  const [currentDayIndex, setCurrentDayIndex] = useState(0);

  const prevDay = () => {
    setCurrentDayIndex((currentDayIndex) => currentDayIndex - 1);
  };

  const nextDay = () => {
    setCurrentDayIndex((currentDayIndex) => currentDayIndex + 1);
  };

  const currentDay = workoutPlan[currentDayIndex];

  return (
    <div className={styles.workoutPlan}>
      <h2 className={styles.title}>Workout Plan</h2>
      <div className={styles.daySlide}>
        <h3>{currentDay.day}</h3>
        <ul className={styles.exerciseList}>
          {currentDay.exercises.map((exercise, idx) => (
            <li key={idx} className={styles.exercise}>
              {exercise}
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.buttonGroup}>
        <button
          className={styles.navButton}
          onClick={prevDay}
          disabled={currentDayIndex === 0}
        >
          Previous Day
        </button>
        <button
          className={styles.navButton}
          onClick={nextDay}
          disabled={currentDayIndex === workoutPlan.length - 1}
        >
          Next Day
        </button>
      </div>
    </div>
  );
}
