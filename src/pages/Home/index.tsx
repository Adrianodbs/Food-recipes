import { useState, useEffect } from 'react'
import * as C from './style'
import Food from '../../assets/img/prato.jpeg'
import Button from '../../components/Button'
import FoodCard from '../../components/FoodCard'
import apiData from '../../services/api'

interface MealProps {
  idMeal: string
  strMealThumb: string
  strMeal: string
  strArea: string
}

export default function Home() {
  const [meals, setMeals] = useState<MealProps[]>([])

  useEffect(() => {
    async function fetchRandomMeals() {
      try {
        const response = await apiData.get('search.php', {
          params: {
            s: '',
            apikey: '1'
          }
        })

        const randomMeals = response.data.meals ?? []
        setMeals(randomMeals)
      } catch (error) {
        console.error('Erro ao buscar refeições:', error)
      }
    }

    fetchRandomMeals()
  }, [])
  return (
    <C.Container>
      <C.Hero>
        <div className="homeText">
          <h1>Está com fome?</h1>
          <span>Conheça aqui as nossas principais receitas!</span>
          <div className="delivery">
            <p>Também entregamos por delivery.</p>
            <Button>Encontre seu prato preferido</Button>
          </div>
        </div>
        <img src={Food} alt="Um prato com macarrão" />
      </C.Hero>
      <C.Content>
        {meals.map(meal => (
          <FoodCard
            key={meal.idMeal}
            image={meal.strMealThumb}
            title={meal.strMeal}
            nationality={meal.strArea}
          />
        ))}
      </C.Content>
    </C.Container>
  )
}
