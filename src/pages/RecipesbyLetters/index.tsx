import { useState } from 'react'
import { toast } from 'react-toastify'
import { alphabet } from '../../utils/alphabet'
import * as C from './style'
import apiData from '../../services/api'
import MealProps from '../../interfaces/MealProps'
import FoodCard from '../../components/FoodCard'

interface ApiResponse {
  meals: MealProps[]
}

export default function RecipesbyLetters() {
  const [recipes, setRecipes] = useState<MealProps[]>([])

  const fetchRecipesByLetter = async (letter: string) => {
    try {
      const response = await apiData.get<ApiResponse>(`search.php?f=${letter}`)
      const getMeals: MealProps[] = response.data.meals ?? []
      if (getMeals.length === 0) {
        toast.error('Nenhuma receita encontrada para a letra selecionada')
      }
      setRecipes(getMeals)
    } catch (error) {
      console.error('Error fetching recipes: ', error)
    }
  }

  const handleLetterClick = (letter: string) => {
    fetchRecipesByLetter(letter)
  }

  return (
    <C.Container>
      <C.Content>
        <h1>Encontre o prato pela letra</h1>
        <C.LetterList>
          {alphabet.map(l => (
            <li key={l} onClick={() => handleLetterClick(l)}>
              {l}
            </li>
          ))}
        </C.LetterList>
        <C.ContentList>
          {recipes.length > 0 ? (
            recipes.map(meal => (
              <FoodCard
                key={meal.idMeal}
                image={meal.strMealThumb}
                title={meal.strMeal}
                nationality={meal.strArea}
                youtubeUrl={meal.strYoutube}
                id={meal.idMeal}
              />
            ))
          ) : (
            <p>Receitas não encontradas</p>
          )}
        </C.ContentList>
      </C.Content>
    </C.Container>
  )
}
