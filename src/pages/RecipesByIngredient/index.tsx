import { toast } from 'react-toastify'
import FoodCard from '../../components/FoodCard'
import Search from '../../components/Search'
import MealProps from '../../interfaces/MealProps'
import apiData from '../../services/api'
import * as C from './style'
import { useState, useEffect } from 'react'

interface ApiResponse {
  meals: MealProps[]
}

const searchMeals = async (ingredient: string) => {
  try {
    const response = await apiData.get<ApiResponse>('filter.php', {
      params: {
        i: ingredient
      }
    })

    return (
      response.data.meals?.map((meal: MealProps) => ({
        idMeal: meal.idMeal,
        strMealThumb: meal.strMealThumb,
        strMeal: meal.strMeal,
        strArea: meal.strArea,
        strYoutube: meal.strYoutube
      })) ?? []
    )
  } catch (error) {
    console.error('Erro ao buscar refeições:', error)
    throw error
  }
}

export default function RecipesByIngredient() {
  const [searchTerm, setSearchTerm] = useState('')
  const [searchResults, setSearchResults] = useState<MealProps[]>([])
  const [allIngredients, setAllIngredients] = useState<string[]>([])

  useEffect(() => {
    const fetchIngredients = async () => {
      try {
        const response = await apiData.get<ApiResponse>('list.php?i=list')

        const ingredients =
          response.data.meals
            ?.map((ingredient: MealProps) => ingredient.strIngredient)
            .filter(
              (ingredient: string | undefined): ingredient is string =>
                !!ingredient
            ) ?? []

        setAllIngredients(ingredients)
      } catch (error) {
        console.error('Erro ao buscar ingredientes:', error)
      }
    }

    fetchIngredients()
  }, [])

  const handleSearchSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault()
    const searchTermLowerCase = searchTerm.toLowerCase()
    if (
      !allIngredients
        .map(ingredient => ingredient.toLowerCase())
        .includes(searchTermLowerCase)
    ) {
      toast.error('O item pesquisado não se encontra na lista de ingredientes!')
      return
    }
    try {
      const meals = await searchMeals(searchTermLowerCase)
      setSearchResults(meals)
      setSearchTerm('')
    } catch (error) {
      console.error('Erro ao buscar refeições:', error)
    }
  }

  const handleIngredientClick = async (ingredient: string) => {
    try {
      const meals = await searchMeals(ingredient)
      setSearchResults(meals)
    } catch (error) {
      console.error('Erro ao buscar refeições:', error)
    }
  }

  return (
    <C.Container>
      <C.Content>
        <h1>Receitas por ingredientes</h1>
        <Search
          submit={handleSearchSubmit}
          placeholder="Digite o nome do ingrediente"
          value={searchTerm}
          onChange={event => setSearchTerm(event.target.value)}
        />
        <C.FoodList>
          {searchResults.length > 0 ? (
            searchResults.map(meal => (
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
            <C.IngredientList>
              {allIngredients.map((ingredient, index) => (
                <li
                  key={index}
                  onClick={() => handleIngredientClick(ingredient)}
                >
                  {ingredient}
                </li>
              ))}
            </C.IngredientList>
          )}
        </C.FoodList>
      </C.Content>
    </C.Container>
  )
}
