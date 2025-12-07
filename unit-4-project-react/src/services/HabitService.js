const read = async () => {
    try {
      const response = await fetch ("http://localhost:8000/api/habits");
      const data = await response.json();

      // When the app loads, we need each habit to start with 0 progress.
      const habits = []
      await data.forEach((habit, index) => {
        habits.push(habit)
        habits[index].progress = 0;
      })
      console.log("habits: ", habits)
      return habits;
    } catch (err) {
      console.log(err)
    }
}

const create = async (habit) => {
  try {
    const response = await fetch("http://localhost:8000/api/habits", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(habit)
    });
    const data = await response.json()
    console.log("Submitted: ", data)
    return data
  } catch (err) {
    console.log(err)
  }
}

const edit = async (habit) => {
  const id = habit.id
  try {
    const response = await fetch(`http://localhost:8000/api/habits/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(habit)
    })
    const data = await response.json()
    console.log("Edited: ", data)
    return data;
  } catch (err) {
    console.log(err)
  }
}

const del = async (habit) => {
  const id = habit.id
  try {
    const response = await fetch(`http://localhost:8000/api/habits/${id}`, {
      method: "DELETE",
    });
    const data = await response.json();
    console.log("Deleted: ", data);
    return data;
  } catch (err) {
    console.log(err)
  }
}

export { 
  read, 
  create,
  edit,
  del 
}