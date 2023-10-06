import { useState, useEffect } from 'react'
import * as C from './style'
import Food from '../../assets/img/prato.jpeg'
import Button from '../../components/Button'
import FoodCard from '../../components/FoodCard'
import apiData from '../../services/api'
import { Link } from 'react-router-dom'

import MealProps from '../../interfaces/MealProps'

interface ApiResponse {
  meals: MealProps[]
}

export default function Home() {
  const [meals, setMeals] = useState<MealProps[]>([])

  useEffect(() => {
    async function fetchGetMeals() {
      try {
        const response = await apiData.get<ApiResponse>('search.php', {
          params: {
            s: ''
          }
        })

        console.log(response.data.meals)
        const getMeals: MealProps[] = response.data.meals ?? []
        setMeals(getMeals)
      } catch (error) {
        console.error('Erro ao buscar refeições:', error)
      }
    }

    fetchGetMeals()
  }, [])

  return (
    <C.Container>
      <C.Hero>
        <div className="homeText">
          <h1>Está com fome?</h1>
          <span>Conheça aqui as nossas principais receitas!</span>
          <div className="delivery">
            <p>Também entregamos por delivery.</p>
            <Link to="/search">
              <Button>Encontre seu prato preferido</Button>
            </Link>
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
            youtubeUrl={meal.strYoutube}
            id={meal.idMeal}
          />
        ))}
      </C.Content>
    </C.Container>
  )
}
