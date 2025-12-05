import { useEffect, useState } from "react";
import "./App.css"
import Nav from "./components/Nav/Nav";
import Home from "./components/Home/Home";

import * as HabitService from "./services/HabitService"


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

  return (
    <>
      <main>
        {page == "home" && <Home tasks={tasks} />} {/* Home page when page = home */}
      </main>
      <Nav page={page} handlePageChange={handlePageChange}/>
    </>
  )
}

export default App;