import * as C from './style'
import Button from '../Button'

interface FoodCardProps {
  title: string
  nationality: string
  image: string
  youtubeUrl: string
}

export default function FoodCard({
  title,
  nationality,
  image,
  youtubeUrl
}: FoodCardProps) {
  return (
    <C.Container>
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
