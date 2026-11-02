function StatRadar({ stats, size = 260 }) {
  const center = size / 2
  const maxRadius = size / 2 - 40
  const angleStep = (Math.PI * 2) / stats.length

  const pointFor = (value, index) => {
    const angle = angleStep * index - Math.PI / 2
    const radius = (value / 100) * maxRadius
    return {
      x: center + radius * Math.cos(angle),
      y: center + radius * Math.sin(angle),
    }
  }

  const labelPointFor = (index) => {
    const angle = angleStep * index - Math.PI / 2
    const radius = maxRadius + 24
    return {
      x: center + radius * Math.cos(angle),
      y: center + radius * Math.sin(angle),
    }
  }

  const valuePoints = stats.map((s, i) => pointFor(s.value, i))
  const polygonPath = valuePoints.map((p) => `${p.x},${p.y}`).join(' ')

  const gridRings = [25, 50, 75, 100]

  return (
    <svg viewBox={`0 0 ${size} ${size}`} width="100%" height={size}>
      {/* background grid rings */}
      {gridRings.map((pct) => {
        const ringPoints = stats
          .map((_, i) => pointFor(pct, i))
          .map((p) => `${p.x},${p.y}`)
          .join(' ')
        return (
          <polygon
            key={pct}
            points={ringPoints}
            fill="none"
            stroke="rgba(255, 219, 232, 0.12)"
            strokeWidth="1"
          />
        )
      })}

      {/* axis lines */}
      {stats.map((_, i) => {
        const p = pointFor(100, i)
        return (
          <line
            key={i}
            x1={center}
            y1={center}
            x2={p.x}
            y2={p.y}
            stroke="rgba(255, 219, 232, 0.12)"
            strokeWidth="1"
          />
        )
      })}

      {/* the actual stat shape */}
      <polygon
        points={polygonPath}
        fill="rgba(242, 68, 85, 0.25)"
        stroke="var(--accent)"
        strokeWidth="2"
      />

      {/* dots on each vertex */}
      {valuePoints.map((p, i) => (
        <circle key={i} cx={p.x} cy={p.y} r="4" fill="var(--accent-soft)" />
      ))}

      {/* labels */}
      {stats.map((s, i) => {
        const p = labelPointFor(i)
        return (
          <text
            key={s.label}
            x={p.x}
            y={p.y}
            textAnchor="middle"
            dominantBaseline="middle"
            fontSize="12"
            fill="var(--highlight)"
            opacity="0.85"
          >
            {s.label}
          </text>
        )
      })}
    </svg>
  )
}

export default StatRadar