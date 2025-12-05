import { useEffect, useState } from "react";
import "./App.css"
import Nav from "./components/Nav/Nav";
import Home from "./components/Home/Home";

import * as HabitService from "./services/HabitService"
import Habits from "./components/Habits/Habits";


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

const App = () => {
  
  const [page, setPage] = useState("home") // Core Page
  const [tasks, setTasks] = useState([taskSkeleton])

  useEffect(() => {
    const loadHabits = async () => {
      const fetchedTasks = await HabitService.read();
      setTasks(fetchedTasks)
    }
    loadHabits()
  }, [])

  // Change Core Page on Nav Click
  const handlePageChange = (newPage) => {
    setPage(newPage)
  }

  const handleTaskProgressChange = (newProgress, taskIndex) => {
    const currentTask = tasks[taskIndex]
    currentTask.progress += newProgress;

    const revisedTasks = tasks
    revisedTasks[taskIndex].progress = currentTask.progress
    console.log(revisedTasks[taskIndex].progress)
    setTasks(revisedTasks)
  }

  return (
    <>
      <main>
        {page == "home" && <Home tasks={tasks} />} {/* Home page when page = home */}
        {page == "habits" && <Habits tasks={tasks} handleTaskProgressChange={handleTaskProgressChange} />} {/* Home page when page = home */}
      </main>
      <Nav page={page} handlePageChange={handlePageChange}/>
    </>
  )
}

export default App;