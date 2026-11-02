import { useState } from 'react'
import Navbar from '../components/Navbar.jsx'
import MealCard from '../components/MealCard.jsx'
import BlogCard from '../components/BlogCard.jsx'
import { useInView } from '../hooks/useInView.js'
import nutritionHero from '../assets/nutrition-photo.jpg'
import { goalFilters, mealCategories, blogArticles } from '../data/nutritionContent.js'
import './Nutrition.css'

function Nutrition() {
  const [activeFilter, setActiveFilter] = useState(null)
  const [mealsRef, mealsVisible] = useInView()
  const [blogRef, blogVisible] = useInView()

  return (
    <>
      <Navbar />

      <main className="nutrition-page">
        {/* Hero */}
        <section className="nutrition-page-hero">
          <div className="container nutrition-page-hero-inner">
            <div className="nutrition-page-hero-content">
              <p className="section-eyebrow">Fuel your training</p>
              <h1 className="nutrition-page-heading">
                Eat well,
                <br />
                without the guesswork.
              </h1>
              <p className="nutrition-page-subtext">
                Personalized meal guidance, calorie and macro tracking, and
                nutrition insights that actually connect to how you train.
              </p>
              <div className="hero-actions">
                <a href="#meals" className="btn btn-primary btn-lg">
                  Explore meal ideas →
                </a>
              </div>

              <div className="hero-features">
                <div className="hero-feature">
                  <span>🍽️</span>
                  <span>Personalized Meal Plans</span>
                </div>
                <div className="hero-feature">
                  <span>📊</span>
                  <span>Calorie & Macro Tracking</span>
                </div>
                <div className="hero-feature">
                  <span>💡</span>
                  <span>Nutrition Insights</span>
                </div>
                <div className="hero-feature">
                  <span>💧</span>
                  <span>Hydration Tracker</span>
                </div>
              </div>
            </div>

            <div className="nutrition-page-hero-media">
              <img src={nutritionHero} alt="Fresh, balanced meal" />
            </div>
          </div>
        </section>

        {/* Goal filter chips */}
        <section className="nutrition-goal-filter">
          <div className="container">
            <h2 className="nutrition-goal-heading">Find meals that fit your goals</h2>
            <div className="goal-chip-row">
              {goalFilters.map((filter) => (
                <button
                  key={filter}
                  className={`goal-chip ${activeFilter === filter ? 'is-active' : ''}`}
                  onClick={() =>
                    setActiveFilter(activeFilter === filter ? null : filter)
                  }
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Meal categories */}
        <section className="nutrition-meals" id="meals">
          <div className="container">
            <div
              ref={mealsRef}
              className={`section-heading reveal ${mealsVisible ? 'is-visible' : ''}`}
            >
              <p className="section-eyebrow">Made simple</p>
              <h2>Healthy Meals, Made Simple</h2>
              <p className="section-subtext">
                Browse ideas by category and find what fits your day.
              </p>
            </div>

            <div className="meal-grid">
              {mealCategories.map((meal) => (
                <MealCard
                  key={meal.slug}
                  image={meal.image}
                  title={meal.title}
                  description={meal.description}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Nutrition tips / blog */}
        <section className="nutrition-blog">
          <div className="container">
            <div
              ref={blogRef}
              className={`section-heading reveal ${blogVisible ? 'is-visible' : ''}`}
            >
              <p className="section-eyebrow">Learn as you eat</p>
              <h2>Nutrition, Explained</h2>
              <p className="section-subtext">
                Straightforward guides on what your food actually does for you.
              </p>
            </div>

            <div className="blog-grid">
              {blogArticles.map((article) => (
                <BlogCard
                  key={article.slug}
                  image={article.image}
                  category={article.category}
                  title={article.title}
                  excerpt={article.excerpt}
                  readTime={article.readTime}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Trust strip */}
        <section className="nutrition-trust">
          <div className="container nutrition-trust-inner">
            <div className="trust-item">
              <span className="trust-icon">🎯</span>
              <span>Personalized to your goals</span>
            </div>
            <div className="trust-item">
              <span className="trust-icon">🔬</span>
              <span>Backed by real nutrition science</span>
            </div>
            <div className="trust-item">
              <span className="trust-icon">📈</span>
              <span>Built for real, tracked results</span>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default Nutrition