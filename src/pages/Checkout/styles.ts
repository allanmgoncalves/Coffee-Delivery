import { styled } from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
`

export const ColContainer = styled.div`
  &:first-child {
    width: 100%;
    max-width: 640px;
  }
  display: flex;
  flex-direction: column;

  gap: 1rem;
`

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;

  padding: 2.5rem;

  border-radius: ${(props) => props.theme['radius-medium']};
  background-color: ${(props) => props.theme['gray-100']};

  /* Responsive */
  @media (max-width: 640px) {
    padding: 1rem;
  }
`

export const HeaderContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;

  p {
    color: ${(props) => props.theme['gray-800']};
    font-weight: 700;
  }

  span {
    font-size: ${(props) => props.theme['text-s']};
  }
`

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  margin-top: 2rem;
`

export const Row = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 64px;
  grid-auto-rows: auto;
  gap: 1rem;

  &:first-of-type {
    grid-template-columns: auto 1fr;
  }

  /* Responsive */
  @media (max-width: 640px) {
    grid-template-columns: auto;

    &:first-of-type {
      grid-template-columns: auto;
    }
  }
`

export const Textfield = styled.input`
  height: 2.5rem;
  padding: 0.75rem;

  font-size: ${(props) => props.theme['text-s']};
  color: ${(props) => props.theme['gray-700']};

  border: 0;
  border: 1px solid ${(props) => props.theme['gray-300']};
  border-radius: ${(props) => props.theme['radius-small']};
  background-color: ${(props) => props.theme['gray-200']};

  &:focus {
    box-shadow: none;
    border-color: ${(props) => props.theme['primary-dark']};
  }

  &::placeholder {
    color: ${(props) => props.theme['gray-600']};
  }

  &:disabled {
    cursor: not-allowed;
  }
`

export const PaymentMethodContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(176px, 1fr));
  gap: 0.75rem;
  margin-top: 2rem;
`

export const CustomRadioContainer = styled.div`
  display: flex;
  width: 100%;
  position: relative;

  label {
    width: 100%;
    height: 56px;
    display: flex;
    justify-content: center;
    align-items: center;

    padding: 1rem;
    gap: 0.75rem;

    position: relative;
    cursor: pointer;
  }
`

export const SelectCard = styled.input`
  appearance: none;
  -webkit-appearance: none;
  width: 100%;
  height: 56px;
  border: 1px solid transparent;
  border-radius: ${(props) => props.theme['radius-medium']};
  background: ${(props) => props.theme['gray-200']};
  position: absolute;

  transition:
    background-color,
    color,
    0.175s linear;

  &:hover {
    background-color: ${(props) => props.theme['gray-300']};
  }

  &:checked {
    color: ${(props) => props.theme.secondary};
    background-color: ${(props) => props.theme['secondary-light']};
    border: 1px solid ${(props) => props.theme.secondary};
  }
`
