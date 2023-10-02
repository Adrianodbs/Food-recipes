import * as C from './style'

import Food from '../../assets/img/prato.jpg'
import Button from '../Button'

export default function FoodCard() {
  return (
    <C.Container>
      <img src={Food} alt="prato" />
      <div className="text">
        <h3>Nome do prato</h3>
        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
          eligendi id doloribus fugit! Vel, quae.{' '}
        </span>
        <Button>YouTube</Button>
      </div>
    </C.Container>
  )
}
