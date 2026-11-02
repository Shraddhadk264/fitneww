import { useParams, Link } from 'react-router-dom'
import Navbar from '../components/Navbar.jsx'
import { categories } from '../data/workouts.js'

function CategoryRoutines() {
  const { categorySlug } = useParams()
  const category = categories.find((c) => c.slug === categorySlug)

  if (!category) {
    return (
      <>
        <Navbar />
        <div className="container" style={{ padding: '120px 0' }}>
          <p>Category not found.</p>
          <Link to="/">Back home</Link>
        </div>
      </>
    )
  }

  return (
    <>
      <Navbar />

      <main className="category-routines">
        <div className="category-routines-hero">
          <img src={category.image} alt={category.title} />
          <div className="category-routines-hero-overlay"></div>
        </div>

        <div className="container category-routines-body">
          <p className="section-eyebrow">{category.title}</p>
          <h1 className="category-routines-heading">Choose your routine</h1>
          <p className="category-routines-desc">{category.description}</p>

          <div className="workout-grid">
            {category.routines.map((routine) => (
              <div className="workout-card" key={routine.slug}>
                <div className="workout-card-body routine-card-body">
                  <h3>{routine.title}</h3>
                  <div className="workout-card-meta">
                    <span>{routine.duration}</span>
                    <span className="dot">•</span>
                    <span>{routine.level}</span>
                  </div>
                  <p className="workout-card-exercises">
                    {routine.exercises.length} exercises · {routine.calories}
                  </p>
                  <Link
                    to={`/workouts/${category.slug}/${routine.slug}`}
                    className="workout-card-link"
                  >
                    View routine →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  )
}

export default CategoryRoutines