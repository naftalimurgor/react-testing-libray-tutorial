import React from 'react'
import { render, screen, act } from '@testing-library/react'


// RTL supports many search types
// getByRole:


// element specific search types:
// 1. LabelText:- <label for="search"/>
// 2. PlaceHolder text: getByPlaceHolder text: <input placeholder="search">
// 3. AltText: getbyAltText: <img alt="profile"/>
// 4. getByDisplayValue: <input value="javascript"/>
import App from '../App'

describe('App tests', () => {
  test('it should render App component', () => {
    act(() => {
      render(<App />)
    })

    // explicit, throws if element is not there:
    screen.getByRole('textbox')
  })
})

