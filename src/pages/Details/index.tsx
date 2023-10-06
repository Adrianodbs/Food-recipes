import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import apiData from '../../services/api'
import MealProps from '../../interfaces/MealProps'

import * as C from './style'
import Button from '../../components/Button'

export default function Details() {
  const { id } = useParams()
  const [details, setDetails] = useState<MealProps | null>(null)

  const [ingredients, setIngredients] = useState<string[]>([])
  const [measures, setMeasures] = useState<string[]>([])

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const response = await apiData.get(`lookup.php?i=${id}`)
        const meal = response.data.meals?.[0]

        const ingredientList = []
        const measureList = []

        for (let i = 1; i <= 20; i++) {
          const ingredient = meal[`strIngredient${i}`]
          const measure = meal[`strMeasure${i}`]

          if (ingredient) {
            ingredientList.push(ingredient)
            measureList.push(measure || '')
          }
        }

        setIngredients(ingredientList)
        setMeasures(measureList)

        const mealDetails: MealProps = {
          idMeal: meal.idMeal,
          strMealThumb: meal.strMealThumb,
          strMeal: meal.strMeal,
          strArea: meal.strArea,
          strYoutube: meal.strYoutube,
          strCategory: meal.strCategory,
          strInstructions: meal.strInstructions,
          strTags: meal.strTags,
          strSource: meal.strSource
        }
        setDetails(mealDetails)
      } catch (error) {
        console.error('Erro ao buscar detalhes:', error)
      }
    }

    fetchDetails()
  }, [id])
  if (!details) {
    return <div>Carregando detalhes...</div>
  }

  return (
    <C.Container>
      <C.Content>
        <C.Title>{details.strMeal}</C.Title>
        <C.Image src={details.strMealThumb} alt={details.strMeal} />
        <div className="info">
          <p>
            Nacionalidade: <span>{details.strArea}</span>{' '}
          </p>
          <p>
            Cetegoria: <span>{details.strCategory}</span>{' '}
          </p>
          <p>
            Tags: <span>{details.strTags}</span>
          </p>
        </div>

        <h4>{details.strInstructions}</h4>

        <div className="list">
          <div>
            <h2>Ingredientes</h2>
            <ul>
              {ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
          </div>

          <div>
            <h2>Medidas</h2>
            <ul>
              {measures.map((measure, index) => (
                <li key={index}>{measure}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="buttons">
          <Button>
            <a
              href={details.strYoutube}
              target="_blank"
              rel="noopener noreferrer"
            >
              Acesse no YouTube
            </a>
          </Button>

          <a
            className="font"
            href={details.strSource}
            target="_blank"
            rel="noopener noreferrer"
          >
            Fonte original
          </a>
        </div>
      </C.Content>
    </C.Container>
  )
}
