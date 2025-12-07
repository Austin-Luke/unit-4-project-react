import { useEffect, useState } from "react";
import "./App.css"
import Nav from "./components/Nav/Nav";
import Home from "./components/Home/Home";
import Edit from "./components/Edit/Edit"
import NewHabit from "./components/NewHabit/NewHabit";

import * as HabitService from "./services/HabitService"
import Habits from "./components/Habits/Habits";

// Template to be used for having a default task structure to prevent errors.
const taskSkeleton = {
  name: "",
  description: "",
  category: null,
  days: [true, true, true, true, true, true, true],
  completions: [
    { day: null, completion: null }
  ],
  duration: null,
  start: "",
  progress: null
}


const App = () => {
  
  const [page, setPage] = useState("home") // Core Page
  const [tasks, setTasks] = useState([taskSkeleton]) // All tasks that have been fetched
  const [todaysTasks, setTodaysTasks] = useState([taskSkeleton]) // All of today's tasks, ordered.
  const [editHabit, setEditHabit] = useState(taskSkeleton)

  // Init fetch and cleanup of data.
  useEffect(() => {
    const loadHabits = async () => {
      // Service function to fetch data
      const fetchedTasks = await HabitService.read();
      setTasks(fetchedTasks)

      // New ordered list of TODAY's tasks only.
      const today = new Date() // Today's date
      const tasksToday = []

      fetchedTasks.forEach((task, index) => {
        if (task.days[today.getDay()]) { // If the day[#] = true
          tasksToday.push(task)          // Add the task to the array
        }
      })

      // Comes in as a "12:34:56"
      // Since today's tasks are used in an ordered list, let's order them!
      // Sort the array of today's tasks. To sort, convert to int, by removing ":"
      tasksToday.sort((a, b) => parseInt((a.start).replaceAll(":", "")) - parseInt((b.start).replaceAll(":", "")))
      setTodaysTasks(tasksToday)
    }
    loadHabits()
  }, [])

  // Change Core Page on Nav Click
  const handlePageChange = (newPage) => {
    setPage(newPage)
  }

  // Function to handle a change in task progress.
  const handleTaskProgressChange = (newProgress, taskIndex) => {
    const currentTask = todaysTasks[taskIndex] // Grab the task in question
    currentTask.progress += newProgress; // Increment the percentage by the change

    const revisedTasks = todaysTasks; // Whole list
    revisedTasks[taskIndex].progress = currentTask.progress // Set the incremented percentage
    setTodaysTasks(revisedTasks)  // Sets the task list
  }

  const handleEditPage = (task) => {
    setEditHabit(task)
    setPage("edit")
    console.log("Edit: ", task)
  }

  return (
    <>
      <main>
        {page == "home" && // Home page when page = home
          <Home tasks={tasks} todaysTasks={todaysTasks} />
        } 
        {page == "habits" && //Task page when page = task
          <Habits 
            tasks={tasks} 
            todaysTasks={todaysTasks} 
            handleTaskProgressChange={handleTaskProgressChange} 
            handlePageChange={handlePageChange} 
            handleEditPage={handleEditPage} />
        }
        {page == "new" &&  //New Habit page when page = new
          <NewHabit />}
        
        {page == "edit" && // Edit Habit page when page = edit
          <Edit 
            task={editHabit} />
        }
      </main>
      <Nav page={page} handlePageChange={handlePageChange}/>
    </>
  )
}

export default App;