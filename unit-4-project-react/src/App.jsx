import { useState } from "react";
import "./App.css"
import Nav from "./components/Nav/Nav";

const App = () => {

  const [page, setPage] = useState("home")
  const handlePageChange = (newPage) => {
    setPage(newPage)
  }

  return (
    <>
      <Nav page={page} handlePageChange={handlePageChange}/>
    </>
  )
}

export default App;