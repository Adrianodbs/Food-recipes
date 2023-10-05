import { useState } from 'react'
import { toast } from 'react-toastify'
import { alphabet } from '../../utils/alphabet'
import * as C from './style'
import apiData from '../../services/api'
import MealProps from '../../interfaces/MealProps'
import FoodCard from '../../components/FoodCard'

export default function RecipesbyLetters() {
  const [recipes, setRecipes] = useState<MealProps[]>([])

  const fetchRecipesByLetter = async (letter: string) => {
    try {
      const response = await apiData.get(`search.php?f=${letter}`)
      const getMeals: MealProps[] =
        response.data.meals?.map((meal: any) => ({
          idMeal: meal.idMeal,
          strMealThumb: meal.strMealThumb,
          strMeal: meal.strMeal,
          strArea: meal.strArea,
          youtubeUrl: meal.strYoutube
        })) ?? []
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
      <h1>Encontre o prato pela letra</h1>
      <C.LetterList>
        {alphabet.map(l => (
          <li key={l} onClick={() => handleLetterClick(l)}>
            {l}
          </li>
        ))}
      </C.LetterList>
      <C.Content>
        {recipes.length > 0 ? (
          recipes.map(meal => (
            <FoodCard
              key={meal.idMeal}
              image={meal.strMealThumb}
              title={meal.strMeal}
              nationality={meal.strArea}
              youtubeUrl={meal.youtubeUrl}
              id={meal.idMeal}
            />
          ))
        ) : (
          <p>Receitas não encontradas</p>
        )}
      </C.Content>
    </C.Container>
  )
}
