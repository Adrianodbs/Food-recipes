import FoodCard from '../../components/FoodCard'
import Search from '../../components/Search'
import MealProps from '../../interfaces/MealProps'
import apiData from '../../services/api'
import * as C from './style'
import { useState, useEffect } from 'react'

export default function RecipesByIngredient() {
  const [searchTerm, setSearchTerm] = useState('')
  const [searchResults, setSearchResults] = useState<MealProps[]>([])
  const [allIngredients, setAllIngredients] = useState<string[]>([])

  useEffect(() => {
    const fetchIngredients = async () => {
      try {
        const response = await apiData.get('list.php?i=list')

        const ingredients: string[] =
          response.data.meals?.map(
            (ingredient: any) => ingredient.strIngredient
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
    try {
      const response = await apiData.get('filter.php', {
        params: {
          i: searchTerm,
          apikey: '1'
        }
      })
      const getMeals: MealProps[] =
        response.data.meals?.map((meal: any) => ({
          idMeal: meal.idMeal,
          strMealThumb: meal.strMealThumb,
          strMeal: meal.strMeal,
          strArea: meal.strArea,
          youtubeUrl: meal.strYoutube
        })) ?? []

      setSearchResults(getMeals)
    } catch (error) {
      console.error('Erro ao buscar refeições:', error)
    }
  }

  const handleIngredientClick = async (ingredient: string) => {
    try {
      const response = await apiData.get('filter.php', {
        params: {
          i: ingredient,
          apikey: '1'
        }
      })
      const getMeals: MealProps[] =
        response.data.meals?.map((meal: any) => ({
          idMeal: meal.idMeal,
          strMealThumb: meal.strMealThumb,
          strMeal: meal.strMeal,
          strArea: meal.strArea,
          youtubeUrl: meal.strYoutube
        })) ?? []

      setSearchResults(getMeals)
    } catch (error) {
      console.error('Erro ao buscar refeições:', error)
    }
  }
  return (
    <C.Container>
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
              youtubeUrl={meal.youtubeUrl}
            />
          ))
        ) : (
          <C.IngredientList>
            {allIngredients.map((ingredient, index) => (
              <li key={index} onClick={() => handleIngredientClick(ingredient)}>
                {ingredient}
              </li>
            ))}
          </C.IngredientList>
        )}
      </C.FoodList>
    </C.Container>
  )
}
