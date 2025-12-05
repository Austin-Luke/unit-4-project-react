import "./CardHeader.css"

/**
 * 
 * @param {string} icon - End-url for the icon (ie: home.svg)
 * @param {string} text - Text used on the header
 * @param {string} color - Denote the color of the text. Default is 'black'
 */
const CardHeader = ({icon, text, color}) => {

  return (
    <div className="card-header">
      <img src={`/icons/${icon}.svg`} alt="" className="icon-card-header" />
      <h5 className={color == "white" ? "light" : "dark"}>{text}</h5>
    </div>
  )
}

export default CardHeader