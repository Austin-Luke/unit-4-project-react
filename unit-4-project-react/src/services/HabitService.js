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

export { read }