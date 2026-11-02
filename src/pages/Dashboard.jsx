import Navbar from '../components/Navbar.jsx'
import StatRadar from '../components/StatRadar.jsx'
import XPBar from '../components/XPBar.jsx'
import QuestList from '../components/QuestList.jsx'
import { character } from '../data/character.js'
import './Dashboard.css'

function Dashboard() {
  return (
    <>
      <Navbar />

      <main className="dashboard">
        <div className="container dashboard-header">
          <div>
            <p className="section-eyebrow">Welcome back</p>
            <h1 className="dashboard-name">{character.name}</h1>
          </div>

          <div className="streak-badge">
            <span className="streak-flame">🔥</span>
            <span className="streak-count">{character.streak.current}</span>
            <span className="streak-label">
              day streak · {character.streak.freezesAvailable} freezes left
            </span>
          </div>
        </div>

        <div className="container dashboard-grid">
          <div className="dashboard-card dashboard-card-xp">
            <XPBar
              level={character.level}
              xp={character.xp}
              xpToNextLevel={character.xpToNextLevel}
              title={character.title}
            />
          </div>

          <div className="dashboard-card dashboard-card-radar">
            <h3 className="dashboard-card-title">Character Stats</h3>
            <StatRadar stats={character.stats} />
          </div>

          <div className="dashboard-card dashboard-card-quests">
            <QuestList
              dailyQuests={character.dailyQuests}
              weeklyQuest={character.weeklyQuest}
            />
          </div>

          <div className="dashboard-card dashboard-card-coach">
            <h3 className="dashboard-card-title">Your Guide</h3>
            <p className="coach-note">{character.coachNote}</p>
          </div>

          <div className="dashboard-card dashboard-card-achievements">
            <h3 className="dashboard-card-title">Achievements</h3>
            <div className="achievement-shelf">
              {character.achievements.map((a) => (
                <div
                  key={a.id}
                  className={`achievement-badge ${a.unlocked ? 'is-unlocked' : ''}`}
                >
                  <span className="achievement-icon">
                    {a.unlocked ? '🏆' : '🔒'}
                  </span>
                  <span className="achievement-label">{a.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default Dashboard