import {
  HeroContainer,
  Highlight,
  IconContainer,
  MainContainer,
  ProductsListContainer,
} from './styles'
import imgHero from '../../assets/img_hero.svg'
import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import { CoffeeCard } from './components/CoffeeCard'
import { ProductsContext } from '../../contexts/ProductsContext'
import { useContext } from 'react'

export function Home() {
  const { coffees } = useContext(ProductsContext)

  return (
    <>
      <HeroContainer>
        <div className="heroContent">
          <h1>Find the perfect coffee for any time of day</h1>
          <p>
            With Coffee Delivery you receive your coffee wherever you are,
            anytime
          </p>

          <div className="heroHighlights">
            <Highlight>
              <IconContainer color="primaryDark">
                <ShoppingCart size={16} weight="fill" />
              </IconContainer>
              Simple and secure purchase
            </Highlight>

            <Highlight>
              <IconContainer color="gray700">
                <Package size={16} weight="fill" />
              </IconContainer>
              Package keeps the coffee intact
            </Highlight>

            <Highlight>
              <IconContainer color="primary">
                <Timer size={16} weight="fill" />
              </IconContainer>
              Fast and tracked delivery
            </Highlight>

            <Highlight>
              <IconContainer color="secondary">
                <Coffee size={16} weight="fill" />
              </IconContainer>
              Simple and secure purchase
            </Highlight>
          </div>
        </div>
        <img
          src={imgHero}
          alt="Thermal coffee cup with coffee beans on the side in different types of grinding"
        />
      </HeroContainer>
      <MainContainer>
        <h2>Ours Coffees</h2>

        <ProductsListContainer>
          {coffees.map((coffee) => {
            return (
              <CoffeeCard
                key={coffee.id}
                image={coffee.image}
                name={coffee.name}
                types={coffee.types}
                description={coffee.description}
                price={coffee.price}
              />
            )
          })}
        </ProductsListContainer>
      </MainContainer>
    </>
  )
}
