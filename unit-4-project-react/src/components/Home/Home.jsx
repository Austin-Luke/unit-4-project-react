import { useState } from "react";
import "./Home.css"

import NextHabit from "../Cards/NextHabit/NextHabit";
import DailyRoutine from "../Cards/DailyRoutine/DailyRoutine";

const Home = () => {

  const date = new Date();
  const month = date.toLocaleDateString('en-US', { month: "short" });
  const weekday = date.toLocaleDateString('en-US', { weekday: "short"});
  const day = date.toLocaleDateString('en-US', { day: "numeric"});
  const year = date.toLocaleDateString('en-US', { year: "numeric"})
  const time = date.toLocaleTimeString('en-US', { hour12: true }).slice(-2) // 12:34:56 PM -> 'AM' / 'PM'


  return (
    <>
      <header>
        <h1>{time == "AM" ? "Mornin'" : "Afternoon," } Matt</h1>
        <p>{`${weekday}, ${day} ${month} ${year} `}</p>
      </header>

      <NextHabit />
      <DailyRoutine />
    </>
  )
}

export default Home;