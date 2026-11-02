const ACTIVITY_MULTIPLIERS = {
  sedentary: 1.2,
  light: 1.375,
  moderate: 1.55,
  active: 1.725,
  veryActive: 1.9,
}

export function calculateBMR({ age, height, weight, gender, activityLevel }) {
  const a = Number(age)
  const h = Number(height)
  const w = Number(weight)

  if (!a || !h || !w) return null

  // Mifflin-St Jeor Equation
  const base = 10 * w + 6.25 * h - 5 * a
  const bmr = gender === 'male' ? base + 5 : base - 161

  const multiplier = ACTIVITY_MULTIPLIERS[activityLevel] || 1.2
  const maintenance = Math.round(bmr * multiplier)

  return {
    bmr: Math.round(bmr),
    maintenance,
    cutRange: `${maintenance - 600} – ${maintenance - 300}`,
    bulkRange: `${maintenance + 200} – ${maintenance + 500}`,
  }
}