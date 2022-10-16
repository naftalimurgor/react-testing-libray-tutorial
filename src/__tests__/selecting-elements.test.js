import React from 'react'
import { render, screen, act, waitFor } from '@testing-library/react'

import App from '../App'


// different search functions to grab elements
// use the selected elements for:
// - Do assertions
// - Perform use interactions

describe('App', () => {
  test('renders App component', async () => {
    render(<App />)

    // implicit assertion: It throws if element searched is not found:
    // screen.getByText('search:')

    // use screen.debug if not sure what should be rendered
    // screen.debug()

    // explicit assertion:
    await waitFor(() => {
      expect(screen.getByText('Search:')).toBeInTheDocument()

      // can also accept regex instead of string
      expect(screen.getByText(/Search/)).toBeInTheDocument()

    })
  })
})