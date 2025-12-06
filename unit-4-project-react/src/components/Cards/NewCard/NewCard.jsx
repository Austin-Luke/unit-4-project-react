import "./NewCard.css"

const NewCard = ({ handlePageChange }) => {

  return (
    <div className="card">
      <button onClick={() => { handlePageChange("new")}} className="btn-ghost">
        Create a New Habit
      </button>
    </div>
  )
}

export default NewCard;