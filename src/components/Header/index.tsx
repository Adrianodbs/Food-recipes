import { Link } from 'react-router-dom'
import * as C from './style'

export default function Header() {
  return (
    <C.Container>
      <Link to="/">
        <h2>
          You<span>Food</span>
        </h2>
      </Link>
      <ul>
        <li>
          <Link to="/search">Pesquisar receitas</Link>
          <Link to="/letter">Receitas por letra</Link>
          <Link to="/ingredient">Receitas por ingrediente</Link>
        </li>
      </ul>
    </C.Container>
  )
}
