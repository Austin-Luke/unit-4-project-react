import "./Nav.css"

const Nav = ({ handlePageChange, page}) => {

  const pages = ["calendar", "home", "habits"]
  return (
    <nav>
      <ul>
        {pages.map((navPage, index) => (
          <li key={index} className={page == navPage ? "active" : ""}>
            <button className="nav-link" onClick={() => { handlePageChange(navPage) }}>
              <img src={page == navPage ? `/icons/${navPage}-accent.svg` : `/icons/${navPage}-dark.svg`} alt={`${navPage} page`} className="icon icon-nav" />
              <p>{navPage}</p>
            </button>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Nav;