import { v4 as uuidv4 } from 'uuid'
import { ReactNode, createContext } from 'react'

export interface Coffee {
  id?: string
  image: string
  name: string
  types: string[]
  description: string
  price: number
}

interface ProductsContextType {
  coffees: Coffee[]
}

export const ProductsContext = createContext({} as ProductsContextType)

interface ProductsContextProviderProps {
  children: ReactNode
}

export function ProductsContextProvider({
  children,
}: ProductsContextProviderProps) {
  const coffees: Coffee[] = [
    {
      id: uuidv4(),
      image: '../assets/img_espresso.svg',
      name: 'Traditional Espresso',
      types: ['Traditional'],
      description: 'Traditional coffee made with hot water and ground beans',
      price: 1.49,
    },
    {
      id: uuidv4(),
      image: '../assets/img_american.svg',
      name: 'American Espresso',
      types: ['Traditional'],
      description: 'Diluted espresso, less intense than traditional',
      price: 1.99,
    },
    {
      id: uuidv4(),
      image: '../assets/img_creamy_espresso.svg',
      name: 'Creamy Espresso',
      types: ['Traditional'],
      description: 'Traditional espresso with creamy foam',
      price: 2.49,
    },
    {
      id: uuidv4(),
      image: '../assets/img_iced_coffee.svg',
      name: 'Iced Espresso',
      types: ['Traditional', 'Iced'],
      description: 'Drink prepared with espresso and ice cubes',
      price: 2.49,
    },
    {
      id: uuidv4(),
      image: '../assets/img_coffee_with_milk.svg',
      name: 'Coffee with Milk',
      types: ['Traditional', 'With Milk'],
      description: 'Half and half traditional espresso with steamed milk',
      price: 1.99,
    },
    {
      id: uuidv4(),
      image: '../assets/img_latte.svg',
      name: 'Latte',
      types: ['Traditional', 'With Milk'],
      description: 'A shot of espresso with double milk and creamy foam',
      price: 2.49,
    },
  ]
  return (
    <ProductsContext.Provider
      value={{
        coffees,
      }}
    >
      {children}
    </ProductsContext.Provider>
  )
}
