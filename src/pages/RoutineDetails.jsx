import { useParams, Link } from 'react-router-dom'
import Navbar from '../components/Navbar.jsx'
import ExerciseThumb from '../components/ExerciseThumb.jsx'
import { categories } from '../data/workouts.js'

function RoutineDetails() {
  const { categorySlug, routineSlug } = useParams()
  const category = categories.find((c) => c.slug === categorySlug)
  const routine = category?.routines.find((r) => r.slug === routineSlug)

  if (!category || !routine) {
    return (
      <>
        <Navbar />
        <div className="container" style={{ padding: '120px 0' }}>
          <p>Routine not found.</p>
          <Link to="/">Back home</Link>
        </div>
      </>
    )
  }

  return (
    <>
      <Navbar />

      <main className="workout-details">
        <div className="workout-details-hero">
          <img src={category.image} alt={routine.title} />
          <div className="workout-details-hero-overlay"></div>
        </div>

        <div className="container workout-details-body">
          <Link to={`/workouts/${category.slug}`} className="workout-card-link">
            ← Back to {category.title}
          </Link>

          <span className="workout-card-tag" style={{ marginTop: '16px' }}>
            {category.title}
          </span>
          <h1>{routine.title}</h1>

          <div className="workout-details-meta">
            <span>{routine.duration}</span>
            <span className="dot">•</span>
            <span>{routine.level}</span>
            <span className="dot">•</span>
            <span>{routine.calories}</span>
          </div>

          <h2 className="workout-details-subhead">Exercises</h2>

          <div className="workout-exercise-list">
            {routine.exercises.map((exercise, index) => (
              <div className="workout-exercise-row" key={exercise.name + index}>
                <span className="workout-exercise-index">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <ExerciseThumb image={exercise.image} name={exercise.name} />
                <span className="workout-exercise-name">{exercise.name}</span>
                <span className="workout-exercise-sets">
                  {exercise.sets} × {exercise.reps}
                </span>
              </div>
            ))}
          </div>

          <button className="btn btn-primary btn-lg workout-start-btn">
            Start Workout
          </button>
        </div>
      </main>
    </>
  )
}

export default RoutineDetails