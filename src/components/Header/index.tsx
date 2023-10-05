import { Link } from 'react-router-dom'
import { useState } from 'react'
import * as C from './style'
import { GiHamburgerMenu } from 'react-icons/gi'
import { IoMdClose } from 'react-icons/io'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen)
  }
  return (
    <C.Container>
      <Link to="/">
        <C.Title open={menuOpen}>
          You<span>Food</span>
        </C.Title>
      </Link>
      <C.MenuToggle onClick={handleMenuClick}>
        {menuOpen ? <IoMdClose /> : <GiHamburgerMenu />}
      </C.MenuToggle>
      <C.List open={menuOpen}>
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
