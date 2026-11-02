import { useState } from 'react'
import AddFoodModal from './AddFoodModal.jsx'

const MEALS = ['Breakfast', 'Lunch', 'Snack', 'Dinner']

function MealLogSection({ loggedFoods, onAddFood }) {
  const [activeMeal, setActiveMeal] = useState(null)

  return (
    <div className="meal-log">
      {MEALS.map((meal) => {
        const items = loggedFoods.filter((f) => f.meal === meal)
        const mealTotal = items.reduce((sum, f) => sum + f.calories, 0)

        return (
          <div className="meal-log-group" key={meal}>
            <div className="meal-log-header">
              <h3>{meal}</h3>
              <div className="meal-log-header-right">
                <span>{mealTotal} kcal</span>
                <button
                  className="meal-log-add-btn"
                  onClick={() => setActiveMeal(meal)}
                >
                  + Add Food
                </button>
              </div>
            </div>

            {items.length === 0 ? (
              <p className="meal-log-empty">Nothing logged yet.</p>
            ) : (
              <div className="meal-log-items">
                {items.map((item) => (
                  <div className="meal-log-item" key={item.id}>
                    <span>{item.name}</span>
                    <span className="meal-log-item-cal">
                      {item.calories} kcal
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>
        )
      })}

      {activeMeal && (
        <AddFoodModal
          meal={activeMeal}
          onAdd={onAddFood}
          onClose={() => setActiveMeal(null)}
        />
      )}
    </div>
  )
}

export default MealLogSection