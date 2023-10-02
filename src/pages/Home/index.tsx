import * as C from './style'
import Food from '../../assets/img/prato.jpeg'
import Button from '../../components/Button'
import FoodCard from '../../components/FoodCard'

export default function Home() {
  return (
    <C.Container>
      <C.Hero>
        <div className="homeText">
          <h1>Está com fome?</h1>
          <span>Conheça aqui as nossas principais receitas!</span>
          <div className="delivery">
            <p>Também entregamos por delivery.</p>
            <Button>Encontre seu prato preferido</Button>
          </div>
        </div>
        <img src={Food} alt="Um prato com macarrão" />
      </C.Hero>
      <C.Content>
        <FoodCard />
        <FoodCard />
        <FoodCard />
        <FoodCard />
        <FoodCard />
        <FoodCard />
        <FoodCard />
      </C.Content>
    </C.Container>
  )
}
