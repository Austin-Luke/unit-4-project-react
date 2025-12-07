import { useEffect, useState } from "react"
import "./NewHabit.css"

const categories = [`food`, `fitness`, `meditation`, `hobby`, `creative`]
const days = [`S`, `M`, `T`, `W`, `T`, `F`, `S`]
// defining these variables globally for simplicity's sake

const NewHabit = () => {

    const [inputs, setInputs] = useState({

        name: "",
        description: "",
        // simple strings

        category: 0,
        // defines type of category using integers

        days: [false, false, false, false, false, false, false],
        // 7 booleans; one for each day; which one is user on?

        completions: [{ day: Date.now(), completion: false }],
        // day: which day user is on
        // completion: is the habit complete?

        duration: 15,
        // the amount (in minutes) of time the task will take to complete

        start: "",
        // ...

    })

    const [durations, setDurations] = useState([])

    useEffect(() => {

        const startingDurations = () => {

            const durations = []

            durations.push(1)
            durations.push(2)
            durations.push(3)
            durations.push(4)
            durations.push(5)
            durations.push(10)

            for (let i = 1; i < 96; i++) {

                durations.push(i * 15)
            }
            setDurations(durations)

        }
        startingDurations()

    }, [])
    // useEffect is like a global function that runs whenever something in the state changes
    // [] means start on launch

    const handleInputChange = (event) => {

        if (event.target.name == "day") {

            const index = Number(event.target.value)
            const updatedDays = [...inputs.days]
            updatedDays[index] = event.target.checked
            setInputs({ ...inputs, days: updatedDays })
            // copy the days array
            // update the clicked day's value
            // update the object

            return
            // prevent the below instance of SetInputs from executing after this statement
        }
        setInputs({ ...inputs, [event.target.name]: event.target.value })
    }

    const handleFormSubmit = (event) => {

        event.preventDefault()
        // prevent default functionality of a form (redirection of the page)

        console.log(inputs)
    }


    return (
        <>
            <header>
                <h1>New Habit</h1>
                <p>All good habits start with a plan!</p>

            </header>
            <form onSubmit={handleFormSubmit}>

                {/* category input */}
                <fieldset>
                    <legend>Select a category:</legend>
                    {categories.map((category, index) => (

                        <div key={index}>
                            <input
                                type="radio"
                                name="category"
                                // simple strings

                                value={index + 1}
                                // refers to the index of the categories array

                                checked={index + 1 == inputs.category}
                                // is this specific radio button on or off?
                                // checks the state of the radio boolean

                                onChange={handleInputChange}
                            // action on change

                            />
                            <label htmlFor="category">
                                <img src={`/icons/${category}-dark.svg`} alt="" />
                            </label>
                            <label htmlFor="category">{category}</label>
                        </div>
                    ))}
                </fieldset>


                {/* name input */}
                <label htmlFor="name">Name your habit:</label>
                <input type="text" name="name" value={inputs.name} onChange={handleInputChange} />

                {/* description input */}
                <label htmlFor="description">Describe your task:</label>
                <textarea name="description" value={inputs.description} onChange={handleInputChange}></textarea>

                {/* days input */}
                <fieldset>
                    <legend>Repeat days:</legend>
                    {days.map((day, index) => (

                        <div key={index}>
                            <input
                                type="checkbox"
                                name="day"
                                value={index}
                                checked={inputs.days[index]}
                                onChange={handleInputChange}
                            />
                            <label htmlFor={day}>{day}</label>
                        </div>

                    ))}
                </fieldset>

                {/* duration input */}
                <label htmlFor="duration">Activity duration:</label>
                <select name="duration" value={inputs.duration} onChange={handleInputChange}>

                    {durations.map((duration, index) => (
                        <option value={duration} key={index}>
                            {duration < 60 ? `${duration} mins` : `${duration / 60} hrs`}
                        </option>
                        // an option will be created for every iteration of the above for-loop
                        // << this is JavaScript
                    ))}
                    {/* .map returns whatever code is written inside it */}
                    {/* << this is HTML */}

                </select>

                {/* time input */}
                <label htmlFor="start">Start time:</label>
                <input type="time" name="start" value={inputs.start} onChange={handleInputChange} />

                {/* submit new task button */}
                <button type="submit">Create habit</button>
            </form>
        </>
    )
}

export default NewHabit