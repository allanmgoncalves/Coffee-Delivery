import { NavLink } from 'react-router-dom'
import { MapPin, ShoppingCart } from 'phosphor-react'

import { HeaderContainer } from './styles'
import logo from '../../assets/logo.svg'

export function Header() {
  const myCurrentLocation = 'Waterloo, ON'
  const totalItemsInCart = 3
  return (
    <HeaderContainer>
      <NavLink to="/" title="Home">
        <img src={logo} alt="Coffee Delivery Logo" />
      </NavLink>
      <nav>
        <span>
          <MapPin size={24} weight="fill" /> {myCurrentLocation}
        </span>
        <NavLink to="/checkout" title="Checkout">
          <span>{totalItemsInCart}</span>
          <ShoppingCart size={24} weight="fill" />
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
