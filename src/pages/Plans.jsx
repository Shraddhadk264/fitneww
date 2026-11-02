import Navbar from '../components/Navbar.jsx'
import PlanCard from '../components/PlanCard.jsx'
import { plans } from '../data/plans.js'

function Plans() {
  return (
    <>
      <Navbar />
      <main className="plans-page">
        <section className="plans-page-hero">
          <div className="container">
            <p className="section-eyebrow">Structured for results</p>
            <h1 className="plans-page-heading">Find Your Plan</h1>
            <p className="section-subtext">
              Multi-week programs built around a clear goal — follow the
              schedule, show up, and let the plan do the thinking.
            </p>
          </div>
        </section>

        <section className="plans-page-grid-section">
          <div className="container">
            <div className="plans-page-grid">
              {plans.map((plan) => (
                <PlanCard
                  key={plan.slug}
                  slug={plan.slug}
                  image={plan.image}
                  title={plan.title}
                  duration={plan.duration}
                  goal={plan.goal}
                  level={plan.level}
                />
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default Plans