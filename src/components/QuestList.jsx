import { useState } from 'react'

function QuestList({ dailyQuests, weeklyQuest }) {
  const [quests, setQuests] = useState(dailyQuests)

  const toggleQuest = (id) => {
    setQuests((prev) =>
      prev.map((q) => (q.id === id ? { ...q, done: !q.done } : q))
    )
  }

  return (
    <div className="quest-panel">
      <h3 className="quest-panel-title">Today's Quests</h3>

      <div className="quest-list">
        {quests.map((quest) => (
          <button
            key={quest.id}
            className={`quest-row ${quest.done ? 'is-done' : ''}`}
            onClick={() => toggleQuest(quest.id)}
          >
            <span className="quest-checkbox">{quest.done ? '✓' : ''}</span>
            <span className="quest-label">{quest.label}</span>
            <span className="quest-xp">+{quest.xp} XP</span>
          </button>
        ))}
      </div>

      <div className="quest-divider"></div>

      <h3 className="quest-panel-title">Weekly Quest</h3>
      <div className="weekly-quest-card">
        <div className="weekly-quest-top">
          <span>{weeklyQuest.label}</span>
          <span className="quest-xp">+{weeklyQuest.xp} XP</span>
        </div>
        <div className="xp-bar-track">
          <div
            className="xp-bar-fill"
            style={{
              width: `${(weeklyQuest.progress / weeklyQuest.target) * 100}%`,
            }}
          ></div>
        </div>
        <span className="xp-bar-label">
          {weeklyQuest.progress} / {weeklyQuest.target}
        </span>
      </div>
    </div>
  )
}

export default QuestList