function CalorieRing({ consumed, goal, size = 160 }) {
  const percent = Math.min((consumed / goal) * 100, 100)
  const radius = size / 2 - 12
  const circumference = 2 * Math.PI * radius
  const offset = circumference - (percent / 100) * circumference

  return (
    <div className="calorie-ring" style={{ width: size, height: size }}>
      <svg viewBox={`0 0 ${size} ${size}`} width={size} height={size}>
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="rgba(255, 219, 232, 0.1)"
          strokeWidth="12"
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="var(--accent)"
          strokeWidth="12"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          transform={`rotate(-90 ${size / 2} ${size / 2})`}
        />
      </svg>
      <div className="calorie-ring-label">
        <span className="calorie-ring-value">{consumed}</span>
        <span className="calorie-ring-goal">/ {goal} kcal</span>
      </div>
    </div>
  )
}

export default CalorieRing