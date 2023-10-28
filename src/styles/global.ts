import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: 0;
    box-shadow: 0;
  }
  
  body {
    background: ${(props) => props.theme.white};
    color: ${(props) => props.theme['gray-700']};
    -webkit-font-smoothing: antialiased;
  }
  
  body, input textarea, button {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: ${(props) => props.theme['text-m']};
    line-height: ${(props) => props.theme['line-height-default']};
  }
  
  h1 {
    font-family: 'Baloo 2', sans-serif;
    color: ${(props) => props.theme['gray-900']};
  }

  h2, h3 {
    font-family: 'Baloo 2', sans-serif;
    color: ${(props) => props.theme['gray-800']};
  }
`
