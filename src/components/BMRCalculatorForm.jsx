import { useState } from 'react'
import { calculateBMR } from '../utils/bmrCalculations.js'

function BMRCalculatorForm({ onResult }) {
  const [form, setForm] = useState({
    age: '',
    height: '',
    weight: '',
    gender: 'female',
    activityLevel: 'moderate',
  })

  const handleChange = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const result = calculateBMR(form)
    onResult(result)
  }

  return (
    <form className="bmr-calc-form" onSubmit={handleSubmit}>
      <h2 className="bmr-calc-title">BMR Calculator</h2>

      <div className="bmr-calc-row">
        <label>
          Age
          <input
            type="number"
            value={form.age}
            onChange={(e) => handleChange('age', e.target.value)}
            placeholder="28"
            required
          />
        </label>

        <label>
          Gender
          <select
            value={form.gender}
            onChange={(e) => handleChange('gender', e.target.value)}
          >
            <option value="female">Female</option>
            <option value="male">Male</option>
          </select>
        </label>
      </div>

      <div className="bmr-calc-row">
        <label>
          Height (cm)
          <input
            type="number"
            value={form.height}
            onChange={(e) => handleChange('height', e.target.value)}
            placeholder="165"
            required
          />
        </label>

        <label>
          Weight (kg)
          <input
            type="number"
            value={form.weight}
            onChange={(e) => handleChange('weight', e.target.value)}
            placeholder="61"
            required
          />
        </label>
      </div>

      <label className="bmr-calc-full">
        Activity Level
        <select
          value={form.activityLevel}
          onChange={(e) => handleChange('activityLevel', e.target.value)}
        >
          <option value="sedentary">Sedentary (little to no exercise)</option>
          <option value="light">Light (1–3 days/week)</option>
          <option value="moderate">Moderate (3–5 days/week)</option>
          <option value="active">Active (6–7 days/week)</option>
          <option value="veryActive">Very Active (athlete / physical job)</option>
        </select>
      </label>

      <button type="submit" className="btn btn-primary btn-lg bmr-calc-submit">
        Calculate
      </button>
    </form>
  )
}

export default BMRCalculatorForm