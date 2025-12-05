import { useState } from "react"
import DailyRoutine from "../Cards/DailyRoutine/DailyRoutine"
import "./Habits.css"
import ProgressCard from "../Cards/ProgressCard/ProgressCard"
import AllHabits from "../Cards/AllHabits/AllHabits"

const Habits = ({ tasks, handleTaskProgressChange }) => {

  const [selectedTask, setSelectedTask] = useState(0)

  const handleHabitSelection = (taskIndex) => {
    console.log(`Setting Selected Task to: ${taskIndex} `, tasks[taskIndex])
    setSelectedTask(taskIndex)
  }



  return (
    <>
      <header>
        <h1>Your Habits</h1>
        <p>Manage your habits, and review your stats!</p>
      </header>


      <ProgressCard taskIndex={selectedTask} tasks={tasks} handleTaskProgressChange={handleTaskProgressChange} />
      <DailyRoutine tasks={tasks} action={handleHabitSelection}/>
      <AllHabits tasks={tasks} />
    </>
  )
}

export default Habits