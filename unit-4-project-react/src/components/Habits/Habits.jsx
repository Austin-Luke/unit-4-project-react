import { useState } from "react"
import DailyRoutine from "../Cards/DailyRoutine/DailyRoutine"
import "./Habits.css"

const Habits = ({tasks}) => {

  const [selectedTask, setSelectedTask] = useState(null)

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

      <DailyRoutine tasks={tasks} action={handleHabitSelection}/>
    </>
  )
}

export default Habits