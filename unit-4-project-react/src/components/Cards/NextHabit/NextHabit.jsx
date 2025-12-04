import "./NextHabit.css"

import CardHeader from "../../CardHeader/CardHeader";
import { useEffect, useState } from "react";

const NextHabit = () => {

  const [lastComplete, setLastComplete] = useState(-1)

  const task = {
    taskName: "Reading",
    description: "A short description",
    category: 4,
    completions: [
      { day: 13, completion: false },
      { day: 14, completion: true },
      { day: 15, completion: true },
    ],
    duration: 75,
    start: 8,
  }

  useEffect(() => {
    const filterCompletion = () => {
      const completions = structuredClone(task.completions).reverse();
      for (let i = 1; i < task.completions.length+1; i++) {
        if (completions[i-1].completion) {
          setLastComplete(i);
          break;
        }
      }
    }
    filterCompletion()
  }, [])


  return (
    <div className="card">
      <CardHeader icon="next-habit" text="Next Habit" color="white" />

      <div className="card-content-habit">
        <div className="icon-block">
          {task.category == 1 && <img src="/icons/food-dark.svg" alt="" className="icon-red" />}
          {task.category == 2 && <img src="/icons/fitness-dark.svg" alt="" className="icon-blue" />}
          {task.category == 3 && <img src="/icons/meditation-dark.svg" alt="" className="icon-purple" />}
          {task.category == 4 && <img src="/icons/hobby-dark.svg" alt="" className="icon-green" />}
          {task.category == 5 && <img src="/icons/creative-dark.svg" alt="" className="icon-orange" />}
          
          <p className="timer">
            { // If there's greater than 60mins, convert mins to hours/mins
              task.duration < 60 ? `${task.duration} mins` : `${(task.duration/60).toFixed(2)} hrs`
            }
          </p>
        </div>

        <div className="next-habit-content">
          <h3>{task.taskName}</h3>
          <div>
            <p>{task.description}</p>
            <p>Last Updated: {lastComplete >= 0 ? `${lastComplete} days ago` : "Never"} </p>
          </div>
        </div>
        <button className="btn-light">Start</button>
      </div>
    </div>
  )
}

export default NextHabit;