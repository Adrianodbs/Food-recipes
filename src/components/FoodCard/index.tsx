import * as C from './style'
import Button from '../Button'
import { useNavigate } from 'react-router-dom'

interface FoodCardProps {
  title: string
  nationality: string
  image: string
  youtubeUrl: string
  id?: string
}

export default function FoodCard({
  title,
  nationality,
  image,
  youtubeUrl,
  id
}: FoodCardProps) {
  const navigate = useNavigate()

  const handleCardClick = () => {
    // Você pode ajustar o caminho conforme necessário
    navigate(`/detalhes/${id}`)
  }
  return (
    <C.Container onClick={handleCardClick}>
      <img src={image} alt={title} />
      <div className="text">
        <h3>{title}</h3>
        <span>
          Nacionalidade:<p>{nationality}</p>
        </span>
        <a href={youtubeUrl} target="_blank" rel="noopener noreferrer">
          <Button>Assista no YouTube</Button>
        </a>
      </div>
    </C.Container>
  )
}
