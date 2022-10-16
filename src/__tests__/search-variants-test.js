import { React } from 'react'
import { render, screen, act, waitFor } from '@testing-library/react'

import App from '../App'

// there exist other search variants
// - getBy is used by default in RTL- returns element or throws an error
// other search variants include:
// 1. queryBy
// 2. findBy


// queryBy:
// 1. queryByText
// 2. queryByRole
// 3. queryByLabelText
// 4. queryByPlaceholderText
// 5. queryByAltText
// 6. queryByDisplayValue

// findBy:
// 1. findByText
// 2. findByRole
// 3. findByLabelText
// 4. findByPlaceholderText
// 5. findByAltText
// 6. findByDisplayValue

describe('App tests', () => {
  test('renders the App component', () => {
    act(() => {
      render(<App />)
    })

    const searchElement = screen.getByRole('textbox')
    waitFor(() => {
      expect(searchElement).toBeInTheDocument()
    })
  })
  // queryBy:
  test('renders App component with Input', () => {
    render(<App />)

    // queryBy is useful when checking whether or not an element is in a document
    // ex:
    waitFor(() => {
      expect(screen.queryByText('JavaScript Rocks')).toBeNull()
    })
  })

  // findBy: is for asynchronus elments which will be there eventually:
  //

  test('renders App component', async () => {

    render(<App />)
    waitFor(async () => {
      // expect(screen.queryByText(/Signed in as/)).toBeNull()
      // screen.debug()

      // assert after user as been loaded
      const signedInText = await screen.findByText(/Signed in as /)
      expect(signedInText).toBeInTheDocument()
    })
  })



})