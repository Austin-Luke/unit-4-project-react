import { useState } from "react";
import "./App.css"
import Nav from "./components/Nav/Nav";
import Home from "./components/Home/Home";

const App = () => {
  
  const [page, setPage] = useState("home") // Core Page

  // Change Core Page on Nav Click
  const handlePageChange = (newPage) => {
    setPage(newPage)
  }

  return (
    <>
      <main>
        {page == "home" && <Home />} {/* Home page when page = home */}
      </main>
      <Nav page={page} handlePageChange={handlePageChange}/>
    </>
  )
}

export default App;