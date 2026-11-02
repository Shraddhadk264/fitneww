import proteinBowls from '../assets/nutrition/protein-bowls.jpg'
import veganDelights from '../assets/nutrition/vegan-delights.jpg'
import smoothieBoost from '../assets/nutrition/smoothie-bowlst.jpg'
import lightBalanced from '../assets/nutrition/light-balanced.jpg'

import proteinGuide from '../assets/blog/protein-guide.jpg'
import carbsGuide from '../assets/blog/carbs-guide.jpg'
import fatsGuide from '../assets/blog/fats-guide.jpg'
import fiberGuide from '../assets/blog/fiber-guide.jpg'
import sugarGuide from '../assets/blog/sugar-guide.jpg'

export const goalFilters = [
  'High Protein',
  'Low Carb',
  'Gluten Free',
  'Vegan',
  'Dairy Free',
  'Low Sugar',
  'Keto Friendly',
]

export const mealCategories = [
  {
    slug: 'protein-bowls',
    image: proteinBowls,
    title: 'Protein Bowls',
    description: 'Fuel your day with high-protein goodness.',
  },
  {
    slug: 'vegan-delights',
    image: veganDelights,
    title: 'Vegan Delights',
    description: '100% plant-based and full of flavor.',
  },
  {
    slug: 'smoothie-boosts',
    image: smoothieBoost,
    title: 'Smoothie Boosts',
    description: 'Refreshing blends for on-the-go energy.',
  },
  {
    slug: 'light-balanced',
    image: lightBalanced,
    title: 'Light & Balanced',
    description: 'Perfect portions for a balanced lifestyle.',
  },
]

export const blogArticles = [
  {
    slug: 'protein-101',
    image: proteinGuide,
    category: 'Protein',
    title: 'Protein 101: How Much Do You Actually Need?',
    excerpt:
      'Protein repairs muscle and keeps you full longer — but more isn\'t always better. Here\'s how to find your real target.',
    readTime: '4 min read',
  },
  {
    slug: 'carbs-explained',
    image: carbsGuide,
    category: 'Carbohydrates',
    title: 'Carbs Aren\'t the Enemy: A Guide to Smart Carb Choices',
    excerpt:
      'Carbs fuel your workouts and your brain. The difference is in the source — here\'s how to choose well.',
    readTime: '5 min read',
  },
  {
    slug: 'healthy-fats',
    image: fatsGuide,
    category: 'Fats',
    title: 'Healthy Fats Explained: Why Your Body Needs Them',
    excerpt:
      'Fat isn\'t the villain diet culture made it out to be. Learn which fats support hormones, recovery, and long-term health.',
    readTime: '4 min read',
  },
  {
    slug: 'fiber-forgotten-nutrient',
    image: fiberGuide,
    category: 'Fiber',
    title: 'Fiber: The Nutrient Everyone Forgets',
    excerpt:
      'Most people fall short on fiber without realizing it. Here\'s why it matters for digestion, fullness, and blood sugar.',
    readTime: '3 min read',
  },
  {
    slug: 'sugar-myths',
    image: sugarGuide,
    category: 'Sugar',
    title: 'Sugar Myths, Busted',
    excerpt:
      'Not all sugar is created equal — and cutting it out entirely isn\'t always the answer. Here\'s the real picture.',
    readTime: '5 min read',
  },
 
]