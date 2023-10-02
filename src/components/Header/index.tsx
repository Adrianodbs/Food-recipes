import { Link } from 'react-router-dom'
import * as C from './style'

export default function Header() {
  return (
    <C.Container>
      <Link to="/">
        <C.Title>
          You<span>Food</span>
        </C.Title>
      </Link>
      <C.List>
        <li>
          <Link to="/search">Pesquisar receitas</Link>
        </li>
        <li>
          <Link to="/letter">Receitas por letra</Link>
        </li>
        <li>
          <Link to="/ingredient">Receitas por ingrediente</Link>
        </li>
      </C.List>
    </C.Container>
  )
}
