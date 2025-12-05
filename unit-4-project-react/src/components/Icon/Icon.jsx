import "./Icon.css"

const Icon = ({category}) => {

  return (
    <>
      {category == 1 && <img src="/icons/food-dark.svg" alt="" className="icon-red icon" />}
      {category == 2 && <img src="/icons/fitness-dark.svg" alt="" className="icon-blue icon" />}
      {category == 3 && <img src="/icons/meditation-dark.svg" alt="" className="icon-purple icon" />}
      {category == 4 && <img src="/icons/hobby-dark.svg" alt="" className="icon-green icon" />}
      {category == 5 && <img src="/icons/creative-dark.svg" alt="" className="icon-orange icon" />}
    </>
  )
}

export default Icon