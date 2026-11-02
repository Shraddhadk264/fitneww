import { Link } from 'react-router-dom'

function PlanCard({ slug, image, title, duration, goal, level }) {
  return (
    <div className="workout-card">
      <div className="workout-card-media">
        <img src={image} alt={title} />
        <span className="workout-card-tag">{duration}</span>
      </div>
      <div className="workout-card-body">
        <h3>{title}</h3>
        <div className="workout-card-meta">
          <span>{goal}</span>
          <span className="dot">•</span>
          <span>{level}</span>
        </div>
        <Link to={`/plans/${slug}`} className="workout-card-link">
          View plan →
        </Link>
      </div>
    </div>
  )
}

export default PlanCard