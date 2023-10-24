import { ShoppingCart } from 'phosphor-react'
import { HeaderContainer } from './styles'

import logo from '../../assets/logo.svg'
import { NavLink } from 'react-router-dom'

export function Header() {
  return (
    <HeaderContainer>
      <nav>
        <NavLink to="/" title="Home">
          <img src={logo} alt="Coffee Delivery Logo" />
        </NavLink>
        <NavLink to="/checkout" title="Checkout">
          <ShoppingCart size={24} />
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
