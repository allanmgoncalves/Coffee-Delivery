import {
  HeroContainer,
  Highlight,
  MainContainer,
  ProductsListContainer,
} from './styles'
import imgHero from '../../assets/img_hero.svg'
import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import { CoffeeCard } from './components/CoffeeCard'

export function Home() {
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
              <span>
                <ShoppingCart size={16} weight="fill" />
              </span>
              Simple and secure purchase
            </Highlight>

            <Highlight>
              <span>
                <Package size={16} weight="fill" />
              </span>
              Package keeps the coffee intact
            </Highlight>

            <Highlight>
              <span>
                <Timer size={16} weight="fill" />
              </span>
              Fast and tracked delivery
            </Highlight>

            <Highlight>
              <span>
                <Coffee size={16} weight="fill" />
              </span>
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
          <CoffeeCard />
          <CoffeeCard />
          <CoffeeCard />
          <CoffeeCard />
          <CoffeeCard />
        </ProductsListContainer>
      </MainContainer>
    </>
  )
}
