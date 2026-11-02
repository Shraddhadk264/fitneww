import { Link } from 'react-router-dom'

function WorkoutCard({ slug, image, category, title, routineCount }) {
  return (
    <div className="workout-card">
      <div className="workout-card-media">
        <img src={image} alt={title} />
        <span className="workout-card-tag">{category}</span>
      </div>

      <div className="workout-card-body">
        <h3>{title}</h3>
        <p className="workout-card-exercises">{routineCount} routines available</p>
        <Link to={`/workouts/${slug}`} className="workout-card-link">
          Browse routines →
        </Link>
      </div>
    </div>
  )
}

export default WorkoutCard