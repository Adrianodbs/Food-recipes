import * as C from './style'
import Button from '../Button'

interface FoodCardProps {
  title: string
  nationality: string
  image: string
}

export default function FoodCard({ title, nationality, image }: FoodCardProps) {
  return (
    <C.Container>
      <img src={image} alt={title} />
      <div className="text">
        <h3>{title}</h3>
        <span>{nationality}</span>
        <Button>YouTube</Button>
      </div>
    </C.Container>
  )
}
