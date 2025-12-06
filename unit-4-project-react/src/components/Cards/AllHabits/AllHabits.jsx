import "./AllHabits.css"

import CardHeader from "../../CardHeader/CardHeader"
import Icon from "../../Icon/Icon"
import SingleHabit from "./SingleHabit/SingleHabit"

const AllHabits = ({ tasks }) => {



  const handleFormAction = (task) => {

  }

  return (
    <div className="card">
      <CardHeader icon="all-habits" text="All Habits" />

      <ul className="all-habits-container">
        {
          tasks.map((task, index) => (
            <SingleHabit key={index} task={task} />
            
          ))
        }
      </ul>
    </div>
  )
  
}

export default AllHabits