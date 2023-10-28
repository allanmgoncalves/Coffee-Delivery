import { Coffee } from '../../../../contexts/ProductsContext'

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

export function CoffeeCard({ image, name, description, types, price }: Coffee) {
  return (
    <CoffeeCardContainer>
      <HeaderCardContainer>
        <img src={image} alt="" />
        <BadgeContainer>
          {types.map((type, index) => {
            return <Badge key={index}>{type}</Badge>
          })}
        </BadgeContainer>
      </HeaderCardContainer>
      <BodyCardContainer>
        <h3>{name}</h3>
        <p>{description}</p>
      </BodyCardContainer>
      <FooterCardContainer>
        <PriceContainer>
          <span>$</span>
          <p>{price}</p>
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
