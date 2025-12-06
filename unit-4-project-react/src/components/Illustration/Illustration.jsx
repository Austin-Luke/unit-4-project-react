

const Illustration  = ({category}) => {

  return (
    <> {/* Illustration, based on the category */}
      {category == null && <div className="illustration"></div>}
      {category == 1 && <img src="illustrations/food.svg" alt="Decorative food illustration" className="illustration" />}
      {category == 2 && <img src="illustrations/fitness.svg" alt="Decorative fitness illustration" className="illustration" />}
      {category == 3 && <img src="illustrations/meditation.svg" alt="Decorative meditation illustration" className="illustration" />}
      {category == 4 && <img src="illustrations/hobby.svg" alt="Decorative hobby illustration" className="illustration" />}
      {category == 5 && <img src="illustrations/creative.svg" alt="Decorative creative illustration" className="illustration" />}
    </>
  )
}

export default Illustration