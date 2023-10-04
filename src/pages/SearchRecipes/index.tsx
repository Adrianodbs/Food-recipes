import Button from '../../components/Button'
import FoodCard from '../../components/FoodCard'
import apiData from '../../services/api'
import * as C from './style'
import { useState } from 'react'
import MealProps from '../../interfaces/MealProps'

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
      const response = await apiData.get('search.php', {
        params: {
          s: searchTerm,
          apikey: '1'
        }
      })
      setSearchResults(response.data.meals || [])
    } catch (error) {
      console.error('Erro ao buscar refeições:', error)
    }
  }
  return (
    <C.Container>
      <C.Content>
        <h1>Encontre o prato pelo nome</h1>
        <form onSubmit={handleSearchSubmit}>
          <C.Input
            placeholder="Digite o nome do seu prato"
            value={searchTerm}
            onChange={handleSearchTermChange}
          />
          <Button type="submit">Buscar</Button>
        </form>
        <ul>
          {searchResults.map(meal => (
            <FoodCard
              key={meal.idMeal}
              image={meal.strMealThumb}
              title={meal.strMeal}
              nationality={meal.strArea}
              youtubeUrl={meal.youtubeUrl}
            />
          ))}
        </ul>
      </C.Content>
    </C.Container>
  )
}
