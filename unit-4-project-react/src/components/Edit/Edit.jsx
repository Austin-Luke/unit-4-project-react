import { useEffect, useState } from "react"
import "./Edit.css"

const categories = ["food", "fitness", "meditation", "hobby", "creative"]
const days = ["Su","Mo","Tu","We","Th","Fr","Sa"]

const Edit = ({ task, handleDeleteHabit, handleEditHabit }) => {
  
  const [inputs, setInputs] = useState(task)
  const [durations, setDurations] = useState([])

  useEffect(() => {
    const initDurations = () => {
      const durations = []
      durations.push(1)
      durations.push(2)
      durations.push(3)
      durations.push(5)
      durations.push(10)
      for (let i = 1; i < 96; i++) {
        durations.push(i*15)
      }

      setDurations(durations)
    }
    initDurations();
  }, [])


  const handleInputChange = (e) => {
    console.log(e.target.value)

    // Treat the days seperatly from the other inputs
    if (e.target.name === "day") {
      const index = Number(e.target.value)
      const updatedDays = [...inputs.days];
      updatedDays[index] = e.target.checked;

      setInputs({ ...inputs, days: updatedDays })
      return; // Stop the function since an input was set
    }

    setInputs({ ...inputs, [e.target.name]: e.target.value })
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();
    handleEditHabit(inputs)
  }

  return (
    <>
      <header className="header-split">
        <div className="header-inner">
          <h1>Edit Your Habit</h1>
          <p>Let's redefine your lifestyle!</p>
        </div>
        <button type="button" onClick={() => { handleDeleteHabit(task) }}><img src="/icons/trash.svg" alt="" /></button>
        
      </header>

      <img src="/illustrations/form.svg" alt="" className="form-img" />

      <form onSubmit={handleFormSubmit} className="habit-form">

        {/* Categories */}
        <fieldset>
          <legend>Select a Category</legend>
          <div className="category-list">
            {categories.map((category, index) => (
              <div key={index}>
                <input
                  type="radio"
                  id={category}
                  name="category"
                  value={index + 1}
                  checked={index + 1 == inputs.category}
                  onChange={handleInputChange}
                />
                <label htmlFor={category}>
                  <img src={`/icons/${category}-dark.svg`} alt={`${category} icon`} />
                  {category}
                </label>
              </div>
            ))}
          </div>
          
        </fieldset>

        {/* Name */}
        <div className="input-collection">
          <label htmlFor="name">Name your Habit</label>
          <input type="text" id="name" name="name" value={inputs.name} onChange={handleInputChange} />
        </div>
        
        
        {/* Description */}
        <div className="input-collection">
          <label htmlFor="description">Describe your Habit</label>
          <textarea name="description" id="description" value={inputs.description} onChange={handleInputChange}></textarea>
        </div>
        
        {/* Days */}
        <fieldset>
          <legend>Repeat Days</legend>
          <div className="days-list">
            {days.map((day, index) => (
              <div key={index}>
                <input
                  type="checkbox"
                  id={day}
                  name="day"
                  value={index}
                  checked={inputs.days[index]}
                  onChange={handleInputChange}
                />
                <label htmlFor={day}>{day[0]}</label>
              </div>
            ))}
          </div>
        </fieldset>

        <div className="input-split">
          {/* Duration */}
          <div className="input-collection">
            <label htmlFor="duration">Activity Duration</label>
            <select name="duration" id="duration" value={inputs.duration} onChange={handleInputChange}>
              {durations.map((duration, index) => (
                <option value={duration} key={index}>{duration < 60 ? `${duration} min` : `${(duration / 60)} hrs`}</option>
              ))}
            </select>
          </div>


          {/* Time */}
          <div className="input-collection">
            <label htmlFor="start">Start Time</label>
            <input type="time" name="start" id="time" value={inputs.start} onChange={(handleInputChange)} />
          </div>
        </div>

        <button className="btn">Save Changes</button>
        

      </form>
    </>
  )
}

export default Edit