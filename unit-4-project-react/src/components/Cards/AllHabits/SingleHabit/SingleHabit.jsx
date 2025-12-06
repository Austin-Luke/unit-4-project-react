import { useState } from "react"
import Icon from "../../../Icon/Icon"

const schedule = ["S","M","T","W","T","F","S"]

const SingleHabit = ({ task, handleEditHabit }) => {
  const [expanded, setExpanded] = useState(false)

  const handleCardExpand = () => {
    setExpanded(!expanded)
  }

  return (
    <li className="all-habits-card">
      <div className="habits-header" onClick={() => { handleCardExpand() }}>
        <div className="daily-routine-icon">
          <Icon category={task.category} />
        </div>

        <div className="habits-header-content">
          <h3>{task.name}</h3>
          <p>{task.description}</p>
        </div>
      </div>

      { expanded && 
        <div className="habit-inner-content">
          <div className="schedule">
            <h5>Schedule:</h5>
            <ul>
              {schedule.map((day, index) => (
                <li className={task.days[index] ? "on" : ""} key={index}>
                  <p>{day}</p>
                </li>
              ))}
            </ul>
          </div>
          <button onClick={() => { handleEditHabit({task}) }}>Edit Habit</button>
        </div>
      }

    </li>
  )
}

export default SingleHabit