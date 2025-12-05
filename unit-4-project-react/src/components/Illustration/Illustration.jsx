

const Illustration  = ({category}) => {

  return (
    <> {/* Illustration, based on the category */}
      {category == 1 && <img src="illustrations/food.svg" alt="Decorative food illustration" />}
      {category == 2 && <img src="illustrations/fitness.svg" alt="Decorative fitness illustration" />}
      {category == 3 && <img src="illustrations/meditation.svg" alt="Decorative meditation illustration" />}
      {category == 4 && <img src="illustrations/hobby.svg" alt="Decorative hobby illustration" />}
      {category == 5 && <img src="illustrations/creative.svg" alt="Decorative creative illustration" />}
    </>
  )
}

export default Illustration