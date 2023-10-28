import { styled } from 'styled-components'

export const CoffeeCardContainer = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 1.25rem;

  background-color: ${(props) => props.theme['gray-200']};
  border-radius: 8px 32px 8px 32px;
`
export const HeaderCardContainer = styled.header`
  display: flex;
  flex-direction: column;

  img {
    width: 120px;
    margin: -2.5rem auto 0.75rem auto;
  }
`

export const BadgeContainer = styled.div`
  display: flex;
  gap: 0.25rem;
  flex-wrap: wrap;
  margin: 0 auto;
`

export const Badge = styled.span`
  padding: 0.25rem 0.5rem;
  border-radius: ${(props) => props.theme['radius-large']};

  font-size: ${(props) => props.theme['text-xxs']};
  font-weight: bold;
  text-transform: uppercase;
  text-align: center;
  color: ${(props) => props.theme['primary-dark']};
  background: ${(props) => props.theme['primary-light']};
`

export const BodyCardContainer = styled.div`
  text-align: center;

  h3 {
    font-size: ${(props) => props.theme['title-s']};
    margin-top: 1rem;
    margin-bottom: 0.5rem;
  }

  p {
    font-size: ${(props) => props.theme['text-s']};
    color: ${(props) => props.theme['gray-600']};
    margin-bottom: 2rem;
  }
`

export const FooterCardContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`

export const ButtonSquareContainer = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 2.5rem;
  height: 2.5rem;

  color: ${(props) => props.theme['gray-200']};
  background-color: ${(props) => props.theme['secondary-dark']};

  border: 0;
  border-radius: ${(props) => props.theme['radius-medium']};

  transition: background-color 0.175s linear;

  &:hover {
    cursor: pointer;
    background-color: ${(props) => props.theme.secondary};
  }
`
export const PriceContainer = styled.div`
  display: flex;
  align-items: baseline;
  flex: 1;
  gap: 0.25rem;

  span {
    font-size: ${(props) => props.theme['text-s']};
  }

  p {
    font-size: ${(props) => props.theme['title-m']};
    font-family: 'Baloo 2', sans-serif;
    font-weight: 800;
  }
`

export const ProductCounterContainer = styled.div`
  height: 2.5rem;
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 0.5rem 1rem;
  gap: 0.5rem;

  background-color: ${(props) => props.theme['gray-400']};
  border-radius: ${(props) => props.theme['radius-medium']};

  p {
    text-align: center;
    width: 20px;
    color: ${(props) => props.theme['gray-900']};
  }

  svg {
    color: ${(props) => props.theme.secondary};

    transition: color 0.175s linear;

    &:hover {
      cursor: pointer;
      color: ${(props) => props.theme['secondary-dark']};
    }
  }
`
