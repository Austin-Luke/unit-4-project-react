import { useEffect, useState } from "react"
import CardHeader from "../../CardHeader/CardHeader"
import Icon from "../../Icon/Icon"
import ProgressBar from "../../ProgressBar/ProgressBar"

import "./DailyRoutine.css"

const DailyRoutine = ({taskList, action}) => {
  const [tasks, setTasks] = useState(taskList)

  useEffect(() => {
    const setTaskList = () => {
      setTasks(taskList)
    }
    setTaskList();
  }, [taskList])

  return (
    <div className="card">
      <CardHeader icon="calendar-dark" text="Daily Routine" color="white" />

      <div className="card-container-routine">
        <div className="progress-tracker">
          {
            tasks.map((task, index) => (
              <div key={index} className="progress-tracker-grouping">
                {index < tasks.length - 1 && <div className={task.progress >= 100 ? "progress-circle completed-circle" : "progress-circle"}></div>}
                {index < tasks.length - 1 && <div className="progress-line"></div>}
              </div>
            ))
          }
          <div className={tasks[tasks.length-1].progress == 100 ? "progress-circle completed-circle" : "progress-circle"}></div>
        </div>

        <ul>
          {
            tasks.map((task, index) => (
              <li key={index} className="card-routine-content" onClick={action ? () => {action(index)} : () => {}}>
                <div className="daily-routine-icon">
                  <Icon category={task.category} />
                </div>

                <div className="routine-content-details">
                  <div className="routine-content-details-text">
                    <h3>{task.name}</h3>
                    <p>{task.description}</p>
                  </div>

                  <ProgressBar progress={task.progress}/>
                </div>

                <div className="side-timer">
                  <img src="/icons/clock.svg" alt="Clock icon" className="icon-small"/>
                  <p className="timer">
                    { // If there's greater than 60mins, convert mins to hours/mins
                      task.duration < 60 ? `${task.duration} mins` : `${(task.duration / 60)} hrs`
                    }
                  </p>
                </div>
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  )
}

export default DailyRoutine;