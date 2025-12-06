import { useEffect, useState } from "react"
import "./ProgressCard.css"
import CardHeader from "../../CardHeader/CardHeader"
import ProgressBar from "../../ProgressBar/ProgressBar"
import Illustration from "../../Illustration/Illustration"

const ProgressCard = ({ taskIndex, tasks, handleTaskProgressChange }) => {

  const [task, setTask] = useState(tasks[0])
  const [actionState, setActionState] = useState(false)
  const [totalTimeElapsed, setTotalTimeElapsed] = useState(0)
  const [currentPercentage, setCurrentPercentage] = useState(0)

  useEffect(() => {
    const changeTask = () => {
      setTask(tasks[taskIndex]);
    }
    changeTask();
  }, [taskIndex])

  useEffect(() => {
    const changeTask = () => {
      const progress = task.progress
      console.log(progress)
      console.log(parseInt((progress/100) * task.duration)*60)
      setActionState(false)
      setTotalTimeElapsed(parseInt((progress / 100) * task.duration) * 60)
      setCurrentPercentage(progress)
    }
    changeTask()
  }, [task])


  useEffect(() => {
    const interval = setInterval(() => {
      const difference = 1000;
      const duration = task.duration * 60 * 1000
      
      if (actionState) {
        const percentage = (1 + ((difference - duration) / duration )) * 100

        handleTaskProgressChange(percentage, taskIndex)
        setTotalTimeElapsed(totalTimeElapsed+1)
        setCurrentPercentage(task.progress)

        if (task.progress >= 100) {
          setActionState(false)
        }
      }
    }, 1000);


    return () => clearInterval(interval);
  }, [actionState, totalTimeElapsed])


  const handleToggleAction = () => {
    const newState = !actionState;
    setActionState(newState)
  }



  return (
    <div className="card">
      <CardHeader icon="in-progress" text="In Progress"/>

      <div className="progress-card-details">
        <h2>{task.name}</h2>
        <p>{task.description}</p>
      </div>

      <Illustration category={task.category}/>

      <div className="timer-container">
        <div className="time-counter">
          <p>{parseInt(totalTimeElapsed / 60)}:{totalTimeElapsed % 60}</p>
          <p>{parseInt(task.duration)}:00</p>
        </div>
        <ProgressBar progress={currentPercentage} />
      </div>

      <div>
        {task.progress == 0 && <button onClick={() => { handleToggleAction() }} className="btn full-width">Start</button>}
        {task.progress > 0 && <button onClick={() => { handleToggleAction() }} className="btn-light full-width">{actionState ? "Pause" : "Continue"}</button>}
      </div>
      
    </div>
  )
}

export default ProgressCard