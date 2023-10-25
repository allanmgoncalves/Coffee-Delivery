import { styled } from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 2rem 0rem;
  nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.75rem;

    span {
      display: flex;
      justify-content: center;
      align-items: center;

      gap: 0.5rem;

      padding: 0.5rem 0.75rem 0.5rem 0.5rem;

      color: ${(props) => props.theme['secondary-dark']};
      background-color: ${(props) => props.theme['secondary-light']};

      border-radius: ${(props) => props.theme['radius-medium']};

      svg {
        color: ${(props) => props.theme.secondary};
      }
    }

    a {
      width: 2.5rem;
      height: 2.5rem;
      text-decoration: none;

      display: flex;
      align-items: center;
      justify-content: center;

      color: ${(props) => props.theme['primary-dark']};
      background-color: ${(props) => props.theme['primary-light']};

      border-radius: ${(props) => props.theme['radius-medium']};
    }
  }
`
