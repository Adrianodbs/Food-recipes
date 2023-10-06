import FoodCard from '../../components/FoodCard'
import apiData from '../../services/api'
import * as C from './style'
import { useState } from 'react'
import { toast } from 'react-toastify'
import MealProps from '../../interfaces/MealProps'
import Search from '../../components/Search'

interface ApiResponse {
  meals: MealProps[]
}

export default function SearchRecipes() {
  const [searchTerm, setSearchTerm] = useState('')
  const [searchResults, setSearchResults] = useState<MealProps[]>([])

  const handleSearchTermChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSearchTerm(event.target.value)
  }

  const handleSearchSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault()
    try {
      const response = await apiData.get<ApiResponse>('search.php', {
        params: {
          s: searchTerm
        }
      })
      const getMeals: MealProps[] = response.data.meals ?? []

      if (getMeals.length === 0) {
        toast.error('Nenhuma receita encontrada para o termo pesquisado.')
      }
      setSearchResults(getMeals)
      setSearchTerm('')
    } catch (error) {
      console.error('Erro ao buscar refeições:', error)
    }
  }

  return (
    <C.Container>
      <C.Content>
        <h1>Encontre o prato pelo nome</h1>
        <Search
          submit={handleSearchSubmit}
          placeholder="Digite o nome do seu prato"
          value={searchTerm}
          onChange={handleSearchTermChange}
        />
        <ul>
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
            <p>Receitas não encontradas</p>
          )}
        </ul>
      </C.Content>
    </C.Container>
  )
}
