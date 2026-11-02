function ExerciseThumb({ image, name }) {
  if (image) {
    return (
      <div className="exercise-thumb">
        <img src={image} alt={name} />
      </div>
    )
  }

  return (
    <div className="exercise-thumb exercise-thumb-placeholder">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M6 8v8M18 8v8M2 10v4M22 10v4M6 12h12" strokeLinecap="round" />
      </svg>
    </div>
  )
}

export default ExerciseThumb