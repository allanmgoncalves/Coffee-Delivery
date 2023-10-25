import traditional from '../../../../assets/img_espresso.svg'

import { Minus, Plus, ShoppingCart } from 'phosphor-react'
import {
  Badge,
  BadgeContainer,
  BodyCardContainer,
  ButtonSquareContainer,
  CoffeeCardContainer,
  FooterCardContainer,
  HeaderCardContainer,
  PriceContainer,
  ProductCounterContainer,
} from './styles'

export function CoffeeCard() {
  return (
    <CoffeeCardContainer>
      <HeaderCardContainer>
        <img src={traditional} alt="" />
        <BadgeContainer>
          <Badge>Traditional</Badge>
          <Badge>Hot</Badge>
        </BadgeContainer>
      </HeaderCardContainer>
      <BodyCardContainer>
        <h3>Traditional Espresso</h3>
        <p>Traditional coffee made with hot water and ground beans</p>
      </BodyCardContainer>
      <FooterCardContainer>
        <PriceContainer>
          <span>$</span>
          <p>9.90</p>
        </PriceContainer>
        <ProductCounterContainer>
          <Minus size={14} weight="bold" />
          <p>10</p>
          <Plus size={14} weight="bold" />
        </ProductCounterContainer>
        <ButtonSquareContainer type="button">
          <ShoppingCart size={24} weight="fill" />
        </ButtonSquareContainer>
      </FooterCardContainer>
    </CoffeeCardContainer>
  )
}
