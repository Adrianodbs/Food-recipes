import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import apiData from '../../services/api'
import MealProps from '../../interfaces/MealProps'

export default function Details() {
  const { id } = useParams()
  const [details, setDetails] = useState<MealProps | null>(null)

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const response = await apiData.get(`lookup.php?i=${id}`)
        const meal = response.data.meals?.[0] // Obtenha apenas o primeiro item da resposta
        console.log('Dados da API:', response.data)

        const mealDetails: MealProps = {
          idMeal: meal.idMeal,
          strMealThumb: meal.strMealThumb,
          strMeal: meal.strMeal,
          strArea: meal.strArea,
          youtubeUrl: meal.strYoutube
        }
        setDetails(mealDetails)
      } catch (error) {
        console.error('Erro ao buscar detalhes:', error)
      }
    }

    fetchDetails()
  }, [id])
  console.log(details)
  if (!details) {
    return <div>Carregando detalhes...</div>
  }

  return (
    <div>
      <h1>{details.strMeal}</h1>
      <img src={details.strMealThumb} alt={details.strMeal} />
      <p>Nacionalidade: {details.strArea}</p>
      <p>Link do YouTube: {details.youtubeUrl}</p>
      {/* Outras informações detalhadas que você deseja exibir */}
    </div>
  )
}
