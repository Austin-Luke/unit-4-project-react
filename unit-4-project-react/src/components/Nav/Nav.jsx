import "./Nav.css"

const Nav = ({ handlePageChange, page}) => {

  // Array containing all the pages availble for navigation.
  // If we want to add pages, simply add a new element to the array, and it will all work seemlessly!
  const pages = ["home", "habits"]

  return (
    <nav>
      <ul>
        {pages.map((navPage, index) => ( // Loop through the array of pages
          <li key={index} className={page == navPage ? "active" : ""}> {/* Set active if this matches current page */}
            <button className="nav-link" onClick={() => { handlePageChange(navPage) }}>
              <img 
                src={page == navPage ? `/icons/${navPage}-accent.svg` : `/icons/${navPage}-dark.svg`} /* Based on the current page, set the icon to the page's icon + colorstate */
                alt={`${navPage} page`} 
                className="icon-nav" 
              />
              <p>{navPage}</p>
            </button>
          </li>
          
        ))}

        {page == "new" &&
          <li className="active">
            <button className="nav-link">
              <img
                src={`/icons/new-accent.svg`}
                alt={`New page`}
                className="icon-nav"
              />
              <p>New</p>
            </button>
          </li>
        }


        {page == "edit" &&
          <li className="active">
            <button className="nav-link">
              <img
                src={`/icons/edit-accent.svg`}
                alt={`Edit page`}
                className="icon-nav"
              />
              <p>Edit</p>
            </button>
          </li>
        }
      </ul>
      
    </nav>
  
  )
}


export default Nav;