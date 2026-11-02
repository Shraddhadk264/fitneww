export const character = {
  name: 'Shraddha',
  title: 'Steel Adept',
  level: 12,
  xp: 340,
  xpToNextLevel: 500,
  streak: {
    current: 9,
    freezesAvailable: 2,
  },
  stats: [
    { label: 'Power', value: 72 },
    { label: 'Stamina', value: 58 },
    { label: 'Vitality', value: 64 },
    { label: 'Discipline', value: 85 },
    { label: 'Resilience', value: 47 },
  ],
  dailyQuests: [
    { id: 'd1', label: 'Complete today\'s workout', xp: 50, done: true },
    { id: 'd2', label: 'Log all 3 meals', xp: 30, done: true },
    { id: 'd3', label: 'Drink 6 glasses of water', xp: 20, done: false },
  ],
  weeklyQuest: {
    label: 'Train 4x this week',
    progress: 3,
    target: 4,
    xp: 150,
  },
  achievements: [
    { id: 'a1', label: 'First Workout', unlocked: true },
    { id: 'a2', label: '7-Day Streak', unlocked: true },
    { id: 'a3', label: 'All Categories Tried', unlocked: false },
    { id: 'a4', label: 'Nutrition Nerd', unlocked: false },
    { id: 'a5', label: '30-Day Streak', unlocked: false },
  ],
  coachNote:
    "Your Power stat jumped 8% this week — that Upper Body routine is paying off. Stamina's lagging a bit behind; want me to nudge your next quest toward cardio?",
}