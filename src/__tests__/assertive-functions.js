import React from 'react'
import {render, screen, waitFor} from '@testing-library/react'
import App from '../App'
// toBeDisabled
// toBeEnabled
// toBeEmpty
// toBeEmptyDOMElement
// toBeInTheDocument
// toBeInvalid
// toBeRequired
// toBeValid
// toBeVisible
// toContainElement
// toContainHTML
// toHaveAttribute
// toHaveClass
// toHaveFocus
// toHaveFormValues
// toHaveStyle
// toHaveTextContent
// toHaveValue
// toHaveDisplayValue
// toBeChecked
// toBePartiallyChecked
// toHaveDescription

describe('App component', () => {
  test('renders the App component', async ()=>{
    render(<App/>)
    await waitFor(() => {
      expect(screen.getByRole('textbox')).toHaveValue('User')
    })

  })
})