import squatLogo from "./images/squatLogo.png";
import deadliftLogo from "./images/deadliftLogo.png";
import benchPressLogo from "./images/benchPressLogo.png";
import pullUpsLogo from "./images/pull-ups.png";
import overheadPressLogo from "./images/shoulder-press.png";
import latPullDownLogo from "./images/latPullDown.png";
import bentOverRowLogo from "./images/bent-over-pow.png";
import facePullLogo from "./images/face-pull-800.png";
import sideDeltsLogo from "./images/dumbbell-lateral-raise.png";

import squatGIF from "./images/squat.gif";
import deadliftGIF from "./images/deadlift.gif";
import benchpressGIF from "./images/benchpress.gif";
import latpulldownGIF from "./images/latpulldown.gif";
import sidedeltsGIF from "./images/sidedelts.gif";
import bentoverrowGIF from "./images/bentoverrow.gif";
import ohpGIF from "./images/ohp.gif";
import pullupsGIF from "./images/pullups.gif";
import facepullGIF from "./images/facepull.gif";

import { useEffect, useState } from "react";
import styles from "./ExcerciseSelector.module.css";

function ExcerciseSelector({ setSelectedExercise, setIsLoading }) {
  const excerciseData = [
    {
      name: "Squat",
      categories: ["legs"],
      img: squatGIF,
      logo: squatLogo,
      description: {
        name: "Squat",
        introduction:
          "The squat is a lower-body strength training exercise that targets the thighs, hips, and buttocks. It involves lowering the body by bending the knees and hips, then returning to a standing position while keeping the back straight.",
        form: {
          intro:
            "The squat can be broken down into several key parts: the setup, the descent, the drive, and the lockout.",
          steps: [
            {
              name: "Setup",
              desc: [
                "Stand with feet shoulder-width apart, toes slightly pointed outward.",
                "Position the barbell on your upper traps (for back squat) or in front of your shoulders (for front squat). Ensure the bar is centered over the midfoot.",
                "Engage the core and maintain a neutral spine. Keep your chest up and your shoulders back.",
                "Look straight ahead and maintain a strong, steady posture.",
              ],
            },
            {
              name: "Descent",
              desc: [
                "Begin by bending at the hips and knees simultaneously, pushing the hips back slightly as you lower yourself toward the ground.",
                "Keep your knees tracking over your toes, not letting them collapse inward.",
                "Lower your body until your thighs are parallel to the ground (or deeper if flexibility and mobility allow), ensuring your chest stays upright and your back remains neutral.",
              ],
            },
            {
              name: "Drive",
              desc: [
                "Push through the heels of your feet to begin the ascent, while keeping your knees aligned with your toes.",
                "Engage your glutes, quads, and hamstrings as you drive your hips forward and rise to a standing position.",
                "Maintain a steady and controlled motion to avoid jerking or sudden movements.",
              ],
            },
            {
              name: "Lockout",
              desc: [
                "Fully extend your hips and knees, standing tall with your chest upright.",
                "Squeeze your glutes and engage your core to complete the lift.",
                "At the top of the movement, ensure you do not lean back excessively or over-extend your back.",
              ],
            },
          ],
        },
      },
    },
    {
      name: "Deadlift",
      categories: ["legs", "back", "full body"],
      img: deadliftGIF,
      logo: deadliftLogo,
      description: {
        name: "DeadLift",
        introduction:
          "The deadlift is a weight training and strength training exercise in which a loaded barbell or bar is lifted off the ground to the level of the hips, torso perpendicular to the floor, before being placed back on the ground.",
        form: {
          intro:
            "The conventional deadlift can be broken down into three parts: the setup, the initial pull or drive, and the lockout.",
          steps: [
            {
              name: "Setup",
              desc: [
                "Set behind the bar with it nearly touching the legs (roughly 1 inch away from the shin), with feet pointed forward.",
                "Begin by hinging at the hips and bending the knees, maintaining flat feet, let the shins move forward to touch the barbell but not push it away.",
                "Grip the bar outside of the legs, roughly at shoulder width. Deadlifts are conducted with varying grips based on the objectives of the lifter.",
                "Raise the chest to position for a neutral spine, it is important to maintain a neutral spine throughout the lift.",
                "Raise the chest to position for a neutral spine, it is important to maintain a neutral spine throughout the lift.",
              ],
            },
            {
              name: "Drive",
              desc: [
                "Take a deep diaphragmatic breath and hold it in during the movement, creating an outward pressure on the core to further stabilize the lumbopelvic hip complex and core throughout the motion.",
                "Keep the muscles of the back contracted tightly in order to maintain a neutral spine throughout the motion.",
                "Drive up and forward with the hips and legs to stand erect and lift the bar.",
              ],
            },
            {
              name: "Lockout",
              desc: [
                "Drive the hips completely into the bar.",
                "Contract the glutei and the rectus abdominis to finish the movement with the pelvis in a neutral position. Contracting the glutes as well as the abdominal muscles is critical for lower back health and safety.",
                "To lower the weight to the ground, perform the above steps in reverse order.",
              ],
            },
          ],
        },
      },
    },
    {
      name: "Bench Press",
      categories: ["legs"],
      img: benchpressGIF,
      logo: benchPressLogo,
      description: {
        name: "Bench Press",
        introduction:
          "The bench press is a strength training exercise that primarily targets the chest, shoulders, and triceps. It involves lying on a bench and pressing a barbell upward from chest level until the arms are fully extended.",
        form: {
          intro:
            "The bench press can be broken down into several key parts: the setup, the descent, the press, and the lockout.",
          steps: [
            {
              name: "Setup",
              desc: [
                "Lie flat on your back on the bench with your eyes directly under the bar.",
                "Place your feet flat on the floor for stability. Keep your back slightly arched and your shoulder blades retracted.",
                "Grip the bar with your hands slightly wider than shoulder-width apart.",
                "Ensure your wrists are straight and your elbows are locked in position to prevent injury.",
                "Lift the bar off the rack and bring it directly above your chest, keeping the barbell aligned with the midline of your body.",
              ],
            },
            {
              name: "Descent",
              desc: [
                "Lower the bar slowly and under control towards your chest, keeping your elbows at a 45-degree angle relative to your body.",
                "Maintain a tight core and ensure your feet remain flat on the floor throughout the descent.",
                "Avoid letting the bar bounce off your chest. Control the movement to maximize muscle engagement.",
              ],
            },
            {
              name: "Press",
              desc: [
                "Press the bar upward by driving through your chest and extending your arms.",
                "Focus on keeping your elbows aligned with your wrists as you push the bar upwards.",
                "Make sure the bar travels in a straight line, vertically above your chest.",
              ],
            },
            {
              name: "Lockout",
              desc: [
                "Fully extend your arms at the top of the press, locking your elbows and squeezing your chest and triceps to complete the lift.",
                "Avoid locking your elbows too forcefully to prevent joint strain.",
                "At the top, ensure your chest is up and your back remains slightly arched for optimal form.",
              ],
            },
          ],
        },
      },
    },
    {
      name: "Lat Pulldown",
      categories: ["back"],
      img: latpulldownGIF,
      logo: latPullDownLogo,
      description: {
        name: "Lat Pulldown",
        introduction:
          "The lat pulldown is a back exercise that targets the latissimus dorsi muscles. It involves pulling a weighted bar down toward the chest while keeping a stable torso.",
        form: {
          intro:
            "The lat pulldown can be divided into setup, pull, and release phases.",
          steps: [
            {
              name: "Setup",
              desc: [
                "Sit on the lat pulldown machine with thighs secured under the pads.",
                "Grab the bar with a wide, overhand grip, slightly wider than shoulder-width.",
                "Engage the core, and keep the chest lifted as you start the movement.",
              ],
            },
            {
              name: "Pull",
              desc: [
                "Initiate the movement by pulling the bar down towards your upper chest, engaging your back muscles.",
                "Keep your elbows pointing downward and avoid using momentum.",
                "Squeeze your shoulder blades together as the bar reaches your chest.",
              ],
            },
            {
              name: "Release",
              desc: [
                "Slowly extend your arms to return the bar to the starting position.",
                "Control the movement, keeping your core engaged to avoid swinging.",
                "Make sure to keep tension on your back muscles throughout.",
              ],
            },
          ],
        },
      },
    },
    {
      name: "Overhead Press",
      categories: ["shoulders"],
      img: ohpGIF,
      logo: overheadPressLogo,
      description: {
        name: "Overhead Press",
        introduction:
          "The overhead press is a compound upper-body exercise that targets the shoulders, triceps, and upper chest. It involves lifting a weight vertically above the head from shoulder level.",
        form: {
          intro:
            "The overhead press consists of setup, press, and lockout phases.",
          steps: [
            {
              name: "Setup",
              desc: [
                "Be seated or stand with feet hip-width apart, holding the barbell at shoulder level with an overhand grip.",
                "Engage the core and keep your chest up.",
                "Position your elbows slightly in front of the bar.",
              ],
            },
            {
              name: "Press",
              desc: [
                "Press the bar upward, keeping it close to your body as it moves past your face.",
                "Extend your arms fully overhead, keeping your body tight and balanced.",
                "Avoid leaning back excessively during the lift.",
              ],
            },
            {
              name: "Lockout",
              desc: [
                "At the top of the movement, fully extend your arms and stabilize the bar overhead.",
                "Engage your shoulders, core, and glutes to maintain control.",
                "Lower the bar back down to shoulder level with control.",
              ],
            },
          ],
        },
      },
    },
    {
      name: "Pull-Ups",
      categories: ["back", "arms"],
      img: pullupsGIF,
      logo: pullUpsLogo,
      description: {
        name: "Pull Up",
        introduction:
          "The pull-up is a bodyweight exercise that targets the upper back and biceps. It involves pulling the body upward until the chin clears the bar.",
        form: {
          intro:
            "The pull-up can be divided into setup, pull, and descent phases.",
          steps: [
            {
              name: "Setup",
              desc: [
                "Grab the pull-up bar with an overhand grip, slightly wider than shoulder-width.",
                "Engage your core and stabilize your body, keeping legs slightly bent or crossed.",
              ],
            },
            {
              name: "Pull",
              desc: [
                "Begin the pull by driving your elbows down towards your ribs.",
                "Pull your chest up to the bar, aiming to get your chin above the bar level.",
                "Engage your back muscles and keep your body in control.",
              ],
            },
            {
              name: "Descent",
              desc: [
                "Lower yourself back down with control, fully extending your arms at the bottom.",
                "Avoid swinging or using momentum, keeping tension on the back muscles.",
              ],
            },
          ],
        },
      },
    },
    {
      name: "Bent Over Row",
      categories: ["back"],
      img: bentoverrowGIF,
      logo: bentOverRowLogo,
      description: {
        name: "Bent Over Row",
        introduction:
          "The bent-over row is a compound back exercise that targets the lats, rhomboids, and traps. It involves pulling a weight toward the torso while bent over at the hips.",
        form: {
          intro:
            "The bent-over row consists of setup, row, and release phases.",
          steps: [
            {
              name: "Setup",
              desc: [
                "Stand with feet hip-width apart, holding a barbell or a set of dumbbells with an overhand grip.",
                "Hinge at the hips to bring your torso nearly parallel to the ground.",
                "Keep your core tight and back straight.",
              ],
            },
            {
              name: "Row",
              desc: [
                "Pull the barbell or dumbbells towards your lower chest or abdomen, keeping elbows close to your body.",
                "Engage your back muscles and avoid using your lower body for momentum.",
              ],
            },
            {
              name: "Release",
              desc: [
                "Lower the barbell or dumbbells back down with control, fully extending your arms.",
                "Keep tension on the back muscles throughout the descent.",
              ],
            },
          ],
        },
      },
    },
    {
      name: "Side Delt Raise",
      categories: ["shoulders"],
      img: sidedeltsGIF,
      silho: sideDeltsLogo,
      description: {
        name: "Side Delt Raise",
        introduction:
          "The side delt raise is an isolation shoulder exercise that targets the lateral deltoid muscles. It involves raising the arms to the side until they are parallel to the ground.",
        form: {
          intro: "The side delt raise includes setup, raise, and lower phases.",
          steps: [
            {
              name: "Setup",
              desc: [
                "Stand with feet hip-width apart, holding dumbbells at your sides with a slight bend in the elbows.",
                "Engage your core and keep your chest lifted.",
              ],
            },
            {
              name: "Raise",
              desc: [
                "Lift the dumbbells out to the sides until your arms are parallel to the ground.",
                "Keep a slight bend in your elbows and avoid shrugging your shoulders.",
              ],
            },
            {
              name: "Lower",
              desc: [
                "Lower the dumbbells back to your sides with control.",
                "Avoid swinging or using momentum to keep tension on the shoulder muscles.",
              ],
            },
          ],
        },
      },
    },
    {
      name: "Cable Face Pull",
      categories: ["shoulders", "upper back"],
      img: facepullGIF,
      logo: facePullLogo,
      description: {
        name: "Cable Face Pull",
        introduction:
          "The cable face pull is an exercise that targets the rear deltoids and upper back muscles. It involves pulling a cable attachment towards the face to engage the shoulders and back.",
        form: {
          intro:
            "The cable face pull can be divided into setup, pull, and release phases.",
          steps: [
            {
              name: "Setup",
              desc: [
                "Attach a rope to a cable machine set at upper-chest level.",
                "Grab the rope with an overhand grip, keeping your feet shoulder-width apart.",
                "Step back to create tension on the cable.",
              ],
            },
            {
              name: "Pull",
              desc: [
                "Pull the rope towards your face, keeping your elbows high and wide.",
                "Squeeze your shoulder blades together as the rope reaches your face.",
              ],
            },
            {
              name: "Release",
              desc: [
                "Slowly extend your arms back to the starting position with control.",
                "Avoid letting the weights slam down, maintaining tension on the back and shoulders.",
              ],
            },
          ],
        },
      },
    },
  ];

  const [searchParam, setSearchParam] = useState("");
  const [categorySearchParam, setCategorySearchParam] = useState("");

  const filteredExerciseDataByName = excerciseData.filter((exercise) =>
    exercise.name.toLowerCase().includes(searchParam)
  );

  const filteredExerciseDataByCategory = categorySearchParam
    ? filteredExerciseDataByName.filter((exercise) => {
        if (exercise.categories.includes(categorySearchParam)) {
          return exercise;
        }
      })
    : filteredExerciseDataByName;

  function clearSearch() {
    setSearchParam("");
    setCategorySearchParam("");
  }
  return (
    <div className={styles.excercises}>
      <div className={styles.selector}>
        <h3>Select an exercise to learn about</h3>
        <input
          placeholder="Search by name"
          value={searchParam}
          onChange={(e) => setSearchParam(e.target.value)}
          style={{ marginBottom: "2%" }}
        />
        <input
          placeholder="Search by category"
          value={categorySearchParam}
          onChange={(e) => setCategorySearchParam(e.target.value)}
        />
        <button
          onClick={() => {
            clearSearch();
          }}
        >
          Clear Search
        </button>
      </div>
      <ul className={styles.options}>
        {filteredExerciseDataByCategory.map((exercise, index) => (
          <li
            key={index}
            onClick={() => {
              setSelectedExercise(exercise); // Set the selected exercise
              setIsLoading(true); // Set loading to true when exercise is selected
            }}
          >
            {exercise.img && <img src={exercise.img} alt={exercise.name} />}
            <section>
              <span>{exercise.name}</span>
              <span>Categories: {exercise.categories.join(", ")}</span>
            </section>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ExcerciseSelector;
