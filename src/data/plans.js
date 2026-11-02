import shredImg from '../assets/plans/shred-challenge.jpg'
import transformImg from '../assets/plans/total-transformation.jpg'
import gluteImg from '../assets/plans/glute-builder.jpg'
import strengthImg from '../assets/plans/strength-foundations.jpg'

const DAY_LABELS = {
  'full-body': 'Full Body',
  hiit: 'HIIT Cardio',
  'upper-body': 'Upper Body',
  'lower-body': 'Lower Body',
  abs: 'Core & Abs',
  rest: 'Rest Day',
}

function buildWeeks(numWeeks, pattern) {
  return Array.from({ length: numWeeks }, (_, i) => ({
    weekNumber: i + 1,
    days: pattern.map((catSlug, dayIndex) => ({
      day: `Day ${dayIndex + 1}`,
      categorySlug: catSlug === 'rest' ? null : catSlug,
      label: DAY_LABELS[catSlug],
    })),
  }))
}

export const plans = [
  {
    slug: 'shred-challenge',
    title: 'Shred Challenge',
    image: shredImg,
    duration: '4 Weeks',
    goal: 'Fat Loss',
    level: 'Beginner',
    tagline: 'Torch fat and build core strength in just 4 weeks.',
    description:
      'A beginner-friendly program combining HIIT cardio and core work to kickstart fat loss and build consistency.',
    weeks: buildWeeks(4, ['hiit', 'abs', 'rest', 'full-body', 'hiit', 'abs', 'rest']),
  },
  {
    slug: 'total-transformation',
    title: 'Total Transformation',
    image: transformImg,
    duration: '6 Weeks',
    goal: 'Weight Loss',
    level: 'Intermediate',
    tagline: 'A complete weight loss program blending strength and cardio.',
    description:
      'Six weeks of structured full-body training and cardio conditioning designed to maximize weight loss while preserving muscle.',
    weeks: buildWeeks(6, ['full-body', 'hiit', 'lower-body', 'rest', 'upper-body', 'hiit', 'rest']),
  },
  {
    slug: 'glute-builder',
    title: 'Glute Builder',
    image: gluteImg,
    duration: '8 Weeks',
    goal: 'Glute Growth',
    level: 'Intermediate',
    tagline: 'Build strength and shape with a lower-body focused program.',
    description:
      'Eight weeks of progressive lower-body training designed to build strength, size, and definition in your glutes and legs.',
    weeks: buildWeeks(8, ['lower-body', 'abs', 'rest', 'lower-body', 'full-body', 'rest', 'rest']),
  },
  {
    slug: 'strength-foundations',
    title: 'Strength Foundations',
    image: strengthImg,
    duration: '6 Weeks',
    goal: 'Strength',
    level: 'Beginner',
    tagline: 'Build a solid strength base with fundamental movements.',
    description:
      'A beginner strength program covering upper body, lower body, and full body sessions to build a reliable foundation.',
    weeks: buildWeeks(6, ['upper-body', 'lower-body', 'rest', 'full-body', 'upper-body', 'rest', 'rest']),
  },
]