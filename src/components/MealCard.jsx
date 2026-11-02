function MealCard({ image, title, description }) {
  return (
    <div className="meal-card">
      <div className="meal-card-media">
        <img src={image} alt={title} />
      </div>
      <div className="meal-card-body">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default MealCard