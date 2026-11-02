import { useState } from 'react'
import Navbar from '../components/Navbar.jsx'
import BMRCalculatorForm from '../components/BMRCalculatorForm.jsx'
import CalorieRing from '../components/CalorieRing.jsx'
import MacroBar from '../components/MacroBar.jsx'
import MealLogSection from '../components/MealLogSection.jsx'
import './BMR.css'

function BMR() {
  const [bmrResult, setBmrResult] = useState(null)
  const [loggedFoods, setLoggedFoods] = useState([])

  const goalCalories = bmrResult ? bmrResult.maintenance : 2000

  const totals = loggedFoods.reduce(
    (acc, f) => ({
      calories: acc.calories + f.calories,
      protein: acc.protein + f.protein,
      carbs: acc.carbs + f.carbs,
      fats: acc.fats + f.fats,
    }),
    { calories: 0, protein: 0, carbs: 0, fats: 0 }
  )

  const handleAddFood = (meal, food) => {
    setLoggedFoods((prev) => [...prev, { ...food, meal }])
  }

  return (
    <>
      <Navbar />

      <main className="bmr-page">
        <section className="bmr-page-hero">
          <div className="container">
            <p className="section-eyebrow">Know your numbers</p>
            <h1 className="bmr-page-heading">Your Body, Decoded.</h1>
            <p className="section-subtext">
              Calculate your baseline, then track how today's meals stack up
              against it.
            </p>
          </div>
        </section>

        <section className="bmr-page-body">
          <div className="container bmr-page-grid">
            {/* Left column: calculator */}
            <div className="bmr-page-card">
              <BMRCalculatorForm onResult={setBmrResult} />

              {bmrResult && (
                <div className="bmr-result-panel">
                  <div className="bmr-result-item">
                    <span className="bmr-result-label">Your BMR</span>
                    <span className="bmr-result-value">
                      {bmrResult.bmr} kcal
                    </span>
                  </div>
                  <div className="bmr-result-item">
                    <span className="bmr-result-label">Maintenance</span>
                    <span className="bmr-result-value">
                      {bmrResult.maintenance} kcal
                    </span>
                  </div>
                  <div className="bmr-result-divider"></div>
                  <div className="bmr-result-range">
                    <span>Cutting range</span>
                    <strong>{bmrResult.cutRange} kcal</strong>
                  </div>
                  <div className="bmr-result-range">
                    <span>Bulking range</span>
                    <strong>{bmrResult.bulkRange} kcal</strong>
                  </div>
                </div>
              )}
            </div>

            {/* Right column: today's tracker */}
            <div className="bmr-page-card">
              <h2 className="bmr-calc-title">Today's Summary</h2>

              <div className="tracker-summary">
                <CalorieRing consumed={totals.calories} goal={goalCalories} />

                <div className="tracker-macros">
                  <MacroBar
                    label="Protein"
                    consumed={totals.protein}
                    target={120}
                  />
                  <MacroBar
                    label="Carbs"
                    consumed={totals.carbs}
                    target={200}
                  />
                  <MacroBar label="Fats" consumed={totals.fats} target={60} />
                </div>
              </div>

              <div className="tracker-streak-card">
                <span className="streak-flame">🔥</span>
                <div>
                  <strong>4 day streak</strong>
                  <p>Keep logging to build your streak.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="container">
            <h2 className="bmr-calc-title" style={{ marginTop: '48px' }}>
              Meal Log
            </h2>
            <MealLogSection loggedFoods={loggedFoods} onAddFood={handleAddFood} />
          </div>
        </section>
      </main>
    </>
  )
}

export default BMR