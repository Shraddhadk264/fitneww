import { useState } from 'react'

function AddFoodModal({ meal, onAdd, onClose }) {
  const [food, setFood] = useState({
    name: '',
    calories: '',
    protein: '',
    carbs: '',
    fats: '',
  })

  const handleChange = (field, value) => {
    setFood((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onAdd(meal, {
      id: Date.now(),
      name: food.name,
      calories: Number(food.calories) || 0,
      protein: Number(food.protein) || 0,
      carbs: Number(food.carbs) || 0,
      fats: Number(food.fats) || 0,
    })
    onClose()
  }

  return (
    <div className="wardrobe-overlay" onClick={onClose}>
      <div
        className="wardrobe-modal add-food-modal"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="wardrobe-header">
          <h2>Add to {meal}</h2>
          <button className="wardrobe-close" onClick={onClose}>
            ✕
          </button>
        </div>

        <form onSubmit={handleSubmit} className="add-food-form">
          <label>
            Food name
            <input
              type="text"
              value={food.name}
              onChange={(e) => handleChange('name', e.target.value)}
              placeholder="Grilled chicken salad"
              required
            />
          </label>

          <label>
            Calories (kcal)
            <input
              type="number"
              value={food.calories}
              onChange={(e) => handleChange('calories', e.target.value)}
              placeholder="350"
              required
            />
          </label>

          <div className="add-food-macros-row">
            <label>
              Protein (g)
              <input
                type="number"
                value={food.protein}
                onChange={(e) => handleChange('protein', e.target.value)}
                placeholder="20"
              />
            </label>
            <label>
              Carbs (g)
              <input
                type="number"
                value={food.carbs}
                onChange={(e) => handleChange('carbs', e.target.value)}
                placeholder="30"
              />
            </label>
            <label>
              Fats (g)
              <input
                type="number"
                value={food.fats}
                onChange={(e) => handleChange('fats', e.target.value)}
                placeholder="10"
              />
            </label>
          </div>

          <p className="add-food-note">
            Note: manual entry for now — a searchable food database connects
            once the backend is ready.
          </p>

          <button type="submit" className="btn btn-primary btn-lg">
            Add Food
          </button>
        </form>
      </div>
    </div>
  )
}

export default AddFoodModal