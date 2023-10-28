import { styled } from 'styled-components'
import bgHero from '../../assets/bg_hero.svg'

export const HeroContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 6rem 0rem;

  background: url(${bgHero});
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100%;

  display: flex;
  align-items: center;

  gap: 3.5rem;

  img {
    max-width: 100%;
  }

  h1 {
    margin-bottom: 1rem;
    font-size: ${(props) => props.theme['title-xl']};
    line-height: ${(props) => props.theme['line-height-default']};
  }

  p {
    margin-bottom: 4rem;
    font-size: ${(props) => props.theme['text-l']};
    color: ${(props) => props.theme['gray-800']};
  }

  .heroHighlights {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
  }

  /* Responsive */
  @media (max-width: 768px) {
    background: none;
    flex-direction: column;

    gap: 3rem;
    padding: 3rem 0;

    p {
      margin-bottom: 2rem;
    }

    .heroHighlights {
      grid-template-columns: 1fr;
      gap: 1.5rem;
    }
  }
`

export const Highlight = styled.span`
  display: flex;
  align-items: center;

  gap: 0.75rem;
`

const COLOR = {
  primary: 'primary',
  primaryDark: 'primary-dark',
  secondary: 'secondary',
  gray700: 'gray-700',
} as const

interface StatusProps {
  color: keyof typeof COLOR
}

export const IconContainer = styled.span<StatusProps>`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 0.5rem;

  border-radius: ${(props) => props.theme['radius-large']};
  background: ${(props) => props.theme[COLOR[props.color]]};

  svg {
    color: ${(props) => props.theme['gray-100']};
  }
`

export const MainContainer = styled.div`
  width: 100%;
  max-width: 72rem;
  margin: 0 auto;
  padding: 2rem 0 6rem 0;

  h2 {
    font-size: ${(props) => props.theme['title-l']};
    margin-bottom: 3.5rem;
  }
`

export const ProductsListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(256px, 1fr));
  gap: 2rem;
  row-gap: 3rem;
`
