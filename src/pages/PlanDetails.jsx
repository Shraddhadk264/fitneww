import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import Navbar from '../components/Navbar.jsx'
import { plans } from '../data/plans.js'

function PlanDetails() {
  const { slug } = useParams()
  const plan = plans.find((p) => p.slug === slug)
  const [activeWeek, setActiveWeek] = useState(1)

  if (!plan) {
    return (
      <>
        <Navbar />
        <div className="container" style={{ padding: '120px 0' }}>
          <p>Plan not found.</p>
          <Link to="/plans">Back to plans</Link>
        </div>
      </>
    )
  }

  const currentWeek = plan.weeks.find((w) => w.weekNumber === activeWeek)

  return (
    <>
      <Navbar />
      <main className="workout-details">
        <div className="workout-details-hero">
          <img src={plan.image} alt={plan.title} />
          <div className="workout-details-hero-overlay"></div>
        </div>

        <div className="container workout-details-body">
          <Link to="/plans" className="workout-card-link">
            ← Back to Plans
          </Link>

          <span className="workout-card-tag" style={{ marginTop: '16px' }}>
            {plan.duration}
          </span>
          <h1>{plan.title}</h1>

          <div className="workout-details-meta">
            <span>{plan.goal}</span>
            <span className="dot">•</span>
            <span>{plan.level}</span>
          </div>

          <p className="plan-details-desc">{plan.description}</p>

          <h2 className="workout-details-subhead">Weekly Schedule</h2>

          <div className="week-tab-row">
            {plan.weeks.map((week) => (
              <button
                key={week.weekNumber}
                className={`week-tab ${
                  activeWeek === week.weekNumber ? 'is-active' : ''
                }`}
                onClick={() => setActiveWeek(week.weekNumber)}
              >
                Week {week.weekNumber}
              </button>
            ))}
          </div>

          <div className="plan-day-list">
            {currentWeek.days.map((day, index) => (
              <div className="plan-day-row" key={index}>
                <span className="plan-day-label">{day.day}</span>
                <span className="plan-day-name">{day.label}</span>
                {day.categorySlug ? (
                  <Link
                    to={`/workouts/${day.categorySlug}`}
                    className="workout-card-link"
                  >
                    View routines →
                  </Link>
                ) : (
                  <span className="plan-day-rest-tag">Rest</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  )
}

export default PlanDetails