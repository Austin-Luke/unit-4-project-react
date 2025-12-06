import "./NewCard.css"

const NewCard = ({ handleNewHabit }) => {

  return (
    <div className="card">
      <button onClick={() => {handleNewHabit()}} className="btn-ghost">
        Create a New Habit
      </button>
    </div>
  )
}

export default NewCard;