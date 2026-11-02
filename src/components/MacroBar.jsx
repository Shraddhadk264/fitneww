function MacroBar({ label, consumed, target, unit = 'g' }) {
  const percent = Math.min((consumed / target) * 100, 100)

  return (
    <div className="macro-bar">
      <div className="macro-bar-top">
        <span>{label}</span>
        <span>
          {consumed}
          {unit} / {target}
          {unit}
        </span>
      </div>
      <div className="xp-bar-track">
        <div className="xp-bar-fill" style={{ width: `${percent}%` }}></div>
      </div>
    </div>
  )
}

export default MacroBar
