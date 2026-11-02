import { useEffect } from 'react'
import { useLocation, Link } from 'react-router-dom'
import Navbar from '../components/Navbar.jsx'
import { useInView } from '../hooks/useInView.js'

import heroPhoto from '../assets/hero-photo.jpg'
import WorkoutCard from '../components/WorkoutCard.jsx'
import nutritionPhoto from '../assets/nutrition-photo.jpg'
import bmrPhoto from '../assets/bmr-photo.jpg'
import { categories } from '../data/workouts.js'
import PlanCard from '../components/PlanCard.jsx'
import { plans } from '../data/plans.js'

function Home() {
  const [workoutsHeadRef, workoutsHeadVisible] = useInView()
  const [workoutsGridRef, workoutsGridVisible] = useInView()
  const [nutritionMediaRef, nutritionMediaVisible] = useInView()
  const [nutritionContentRef, nutritionContentVisible] = useInView()
  const [bmrContentRef, bmrContentVisible] = useInView()
  const [bmrMediaRef, bmrMediaVisible] = useInView()
  const [plansHeadRef, plansHeadVisible] = useInView()
  const [plansGridRef, plansGridVisible] = useInView()
  const location = useLocation()

  useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash)
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth' })
        }, 100)
      }
    }
  }, [location])

  return (
    <>
      <Navbar />

      <main>
        <section className="hero" id="home">
          <div className="hero-media">
            <img src={heroPhoto} alt="Woman resting after a strength workout" />
          </div>

          <div className="container hero-content">
            <p className="hero-eyebrow">Strong mind. Strong body. Unstoppable you.</p>

            <h1 className="hero-title">
              BUILD YOUR
              <br />
              <span className="hero-title-accent">STRONGER SELF</span>
            </h1>

            <p className="hero-subtext">
              Workouts, nutrition, BMR, and progress — one dashboard that actually
              keeps up with you.
            </p>

            <div className="hero-actions">
              <a href="/register" className="btn btn-primary btn-lg">
                Start your journey →
              </a>
              <a href="#workouts" className="btn btn-ghost btn-lg">
                Explore workouts
              </a>
            </div>

            <div className="hero-features">
              <div className="hero-feature">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M6 8v8M18 8v8M2 10v4M22 10v4M6 12h12" strokeLinecap="round" />
                </svg>
                <span>Workout Plans</span>
              </div>
              <div className="hero-feature">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M12 21c-4-3-8-6-8-11a5 5 0 0 1 9-3 5 5 0 0 1 9 3c0 5-4 8-8 11l-1 1z" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span>Nutrition Tracking</span>
              </div>
              <div className="hero-feature">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <circle cx="12" cy="12" r="9" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="12" cy="12" r="0.5" fill="currentColor" />
                </svg>
                <span>BMR Calculator</span>
              </div>
              <div className="hero-feature">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M3 3v18h18M7 15l4-4 3 3 5-6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span>Progress Tracking</span>
              </div>
            </div>
          </div>

          <div className="hero-stats container">
            <div className="stat">
              <strong>50+</strong>
              <span>Workouts</span>
            </div>
            <div className="stat">
              <strong>12</strong>
              <span>Fitness Plans</span>
            </div>
            <div className="stat">
              <strong>100%</strong>
              <span>Personalized</span>
            </div>
            <div className="stat">
              <strong>24/7</strong>
              <span>Progress Tracking</span>
            </div>
          </div>
        </section>

        <section className="featured-workouts" id="workouts">
          <div className="container">
            <div
              ref={workoutsHeadRef}
              className={`section-heading reveal ${workoutsHeadVisible ? 'is-visible' : ''}`}
            >
              <p className="section-eyebrow">Handpicked for you</p>
              <h2>Featured Workouts</h2>
              <p className="section-subtext">
                Structured routines built by trainers, ready whenever you are.
              </p>
            </div>

            <div
              ref={workoutsGridRef}
              className={`workout-grid reveal ${workoutsGridVisible ? 'is-visible' : ''}`}
            >
              {categories.map((cat) => (
                <WorkoutCard
                  key={cat.slug}
                  slug={cat.slug}
                  image={cat.image}
                  category={cat.title}
                  title={cat.title}
                  routineCount={cat.routines.length}
                />
              ))}
            </div>

            <div className="featured-workouts-footer">
              <a href="#" className="btn btn-ghost btn-lg">
                View all workouts →
              </a>
            </div>
          </div>
        </section>

        <section className="nutrition-teaser" id="nutrition">
          <div className="container nutrition-teaser-inner">
            <div
              ref={nutritionMediaRef}
              className={`nutrition-media reveal-left ${nutritionMediaVisible ? 'is-visible' : ''}`}
            >
              <img src={nutritionPhoto} alt="Fresh, balanced meal" />

              <div className="nutrition-stat-card">
                <span className="nutrition-stat-value">1,420</span>
                <span className="nutrition-stat-label">
                  kcal tracked today, zero guesswork
                </span>
              </div>
            </div>

            <div
              ref={nutritionContentRef}
              className={`nutrition-content reveal-right ${nutritionContentVisible ? 'is-visible' : ''}`}
            >
              <p className="section-eyebrow">Fuel smarter</p>
              <h2 className="nutrition-heading">
                Eat with
                <br />
                intention.
              </h2>
              <p className="nutrition-copy">
                Log meals in seconds, watch your macros balance in real time, and
                finally see the connection between what you eat and how you train.
                No spreadsheets. No guessing. Just numbers that make sense.
              </p>

              <div className="nutrition-pullquote">
                "The fastest way to actually stick with tracking — because it
                doesn't feel like a chore."
              </div>

              <Link to="/nutrition" className="btn btn-primary btn-lg">
                Explore nutrition tracking →
              </Link>
            </div>
          </div>
        </section>

        <section className="bmr-teaser" id="bmr">
          <div className="container bmr-teaser-inner">
            <div
              ref={bmrContentRef}
              className={`bmr-content reveal-left ${bmrContentVisible ? 'is-visible' : ''}`}
            >
              <p className="section-eyebrow">Know your numbers</p>
              <h2 className="bmr-heading">
                Your body,
                <br />
                decoded.
              </h2>
              <p className="bmr-copy">
                Enter your stats once and get a real baseline — how many calories
                you burn at rest, what maintenance actually looks like, and a
                calorie range built around your goal. No generic formulas pulled
                from a magazine.
              </p>

              <div className="bmr-pullquote">
                "Finally understood why 1,200 kcal was never going to work for me."
              </div>

              <Link to="/bmr" className="btn btn-primary btn-lg">
                Calculate your BMR →
              </Link>
            </div>

            <div
              ref={bmrMediaRef}
              className={`bmr-media reveal-right ${bmrMediaVisible ? 'is-visible' : ''}`}
            >
              <img src={bmrPhoto} alt="Tracking body metrics" />
            </div>
          </div>
        </section>
        <section className="plans-teaser" id="plans">
  <div className="container">
    <div
      ref={plansHeadRef}
      className={`section-heading reveal ${plansHeadVisible ? 'is-visible' : ''}`}
    >
      <p className="section-eyebrow">Structured for results</p>
      <h2>Fitness Plans</h2>
      <p className="section-subtext">
        Multi-week programs that take the guesswork out of your training.
      </p>
    </div>

    <div
      ref={plansGridRef}
      className={`workout-grid reveal ${plansGridVisible ? 'is-visible' : ''}`}
    >
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

    <div className="featured-workouts-footer">
      <Link to="/plans" className="btn btn-ghost btn-lg">
        View all plans →
      </Link>
    </div>
  </div>
</section>
      </main>
    </>
  )
}

export default Home