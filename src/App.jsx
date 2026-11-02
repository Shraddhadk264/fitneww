import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import CategoryRoutines from './pages/CategoryRoutines.jsx'
import RoutineDetails from './pages/RoutineDetails.jsx'
import Dashboard from './pages/Dashboard.jsx'
import Nutrition from './pages/Nutrition.jsx'
import BMR from './pages/BMR.jsx'
import Plans from './pages/Plans.jsx'
import PlanDetails from './pages/PlanDetails.jsx'
import './App.css'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/nutrition" element={<Nutrition />} />
      <Route path="/bmr" element={<BMR />} />
      <Route path="/workouts/:categorySlug" element={<CategoryRoutines />} />
      <Route path="/workouts/:categorySlug/:routineSlug" element={<RoutineDetails />} />
      <Route path="/plans" element={<Plans />} />
      <Route path="/plans/:slug" element={<PlanDetails />} />
    </Routes>
  )
}

export default App