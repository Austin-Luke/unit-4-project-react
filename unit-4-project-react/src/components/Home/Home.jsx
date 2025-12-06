import { useEffect, useState } from "react";
import "./Home.css"

import NextHabit from "../Cards/NextHabit/NextHabit";
import DailyRoutine from "../Cards/DailyRoutine/DailyRoutine";

const taskSkeleton = {
  name: "",
  description: "",
  category: null,
  completions: [
    { day: null, completion: null },
    { day: null, completion: null },
    { day: null, completion: null },
  ],
  duration: null,
  start: "",
  progress: null
}

const Home = ({tasks, todaysTasks}) => {

  const [nextTask, setNextTask] = useState(taskSkeleton)

  useEffect(() => {
    const defineNextTask = () => {
      const date = new Date();
      const timeSummed = (date.getHours()*60*60) + (date.getMinutes()*60) + (date.getSeconds());

      let selectedTask = 0;

      for (let i = 1; i < todaysTasks.length; i++) {
        const task = todaysTasks[i]
        const timeArr = task.start.split(":")
        const secs = parseInt(timeArr[2]);
        const mins = parseInt(timeArr[1]) * 60;
        const hours = parseInt(timeArr[0]) * 60 * 60;

        const timePassed = secs+mins+hours;
        
        if (timeSummed > timePassed) {
          if (i + 1 < todaysTasks.length) {
            selectedTask = i+1
          }
        }
      }

      setNextTask(todaysTasks[selectedTask])
    }
    defineNextTask()
  }, [todaysTasks])

  const date = new Date();
  const month = date.toLocaleDateString('en-US', { month: "short" });
  const weekday = date.toLocaleDateString('en-US', { weekday: "short"});
  const day = date.toLocaleDateString('en-US', { day: "numeric"});
  const year = date.toLocaleDateString('en-US', { year: "numeric"})
  const time = date.toLocaleTimeString('en-US', { hour12: true }).slice(-2) // 12:34:56 PM -> 'AM' / 'PM'


  return (
    <>
      <header>
        <h1>{time == "AM" ? "Mornin'" : "Afternoon," } Matt</h1>
        <p>{`${weekday}, ${day} ${month} ${year} `}</p>
      </header>

      <NextHabit task={nextTask} />
      <DailyRoutine taskList={todaysTasks} />
    </>
  )
}

export default Home;