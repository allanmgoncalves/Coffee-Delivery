import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react'
import {
  CardContainer,
  ColContainer,
  CustomRadioContainer,
  FormContainer,
  HeaderContainer,
  MainContainer,
  PaymentMethodContainer,
  Row,
  SelectCard,
  Textfield,
} from './styles'
import { defaultTheme } from '../../styles/themes/default'
import { useState } from 'react'

export function Checkout() {
  const [select, setSelect] = useState('creditCard')

  const handleSelectChange = (event) => {
    const value = event.target.value
    setSelect(value)
  }

  return (
    <MainContainer>
      <ColContainer>
        <h3>Complete your order</h3>
        <CardContainer>
          <HeaderContainer>
            <MapPinLine size={22} color={defaultTheme['primary-dark']} />
            <div>
              <p>Delivery address</p>
              <span>
                Enter the address where you would like to receive your order
              </span>
            </div>
          </HeaderContainer>

          <FormContainer>
            <Textfield type="text" placeholder="CEP" />
            <Textfield type="text" placeholder="Street" />
            <Row>
              <Textfield type="text" placeholder="Number" />
              <Textfield type="text" placeholder="Complement" />
            </Row>
            <Row>
              <Textfield type="text" placeholder="District" />
              <Textfield type="text" placeholder="City" />
              <Textfield type="text" placeholder="FS" />
            </Row>
          </FormContainer>
        </CardContainer>

        <CardContainer>
          <HeaderContainer>
            <CurrencyDollar size={22} color={defaultTheme.secondary} />
            <div>
              <p>Payment</p>
              <span>
                Payment is made upon delivery. Choose the way you want to pay
              </span>
            </div>
          </HeaderContainer>

          <PaymentMethodContainer>
            <CustomRadioContainer>
              <SelectCard
                type="radio"
                id="credit"
                name="radio"
                value="Credit Card"
                checked={select === 'Credit Card'}
                onChange={(event) => handleSelectChange(event)}
              />
              <label htmlFor="credit">
                <CreditCard size={16} color={defaultTheme.secondary} /> Credit
                Card
              </label>
            </CustomRadioContainer>

            <CustomRadioContainer>
              <SelectCard
                type="radio"
                id="debit"
                name="radio"
                value="Debit Card"
                checked={select === 'Debit Card'}
                onChange={(event) => handleSelectChange(event)}
              />
              <label htmlFor="debit">
                <Bank size={16} color={defaultTheme.secondary} /> Debit Card
              </label>
            </CustomRadioContainer>

            <CustomRadioContainer>
              <SelectCard
                type="radio"
                id="money"
                name="radio"
                value="Money"
                checked={select === 'Money'}
                onChange={(event) => handleSelectChange(event)}
              />
              <label htmlFor="money">
                <Money size={16} color={defaultTheme.secondary} /> Money
              </label>
            </CustomRadioContainer>
          </PaymentMethodContainer>
        </CardContainer>
      </ColContainer>

      <ColContainer>
        <h3>Cafés selecionados</h3>
        {select}
      </ColContainer>
    </MainContainer>
  )
}
