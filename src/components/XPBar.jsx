function XPBar({ level, xp, xpToNextLevel, title }) {
  const percent = Math.min((xp / xpToNextLevel) * 100, 100)

  return (
    <div className="xp-bar-wrap">
      <div className="xp-bar-top">
        <span className="xp-level">Level {level}</span>
        <span className="xp-title">{title}</span>
      </div>
      <div className="xp-bar-track">
        <div className="xp-bar-fill" style={{ width: `${percent}%` }}></div>
      </div>
      <span className="xp-bar-label">
        {xp} / {xpToNextLevel} XP
      </span>
    </div>
  )
}

export default XPBar