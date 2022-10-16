import React from 'react'
import { screen, render, waitFor } from '@testing-library/react'
import App from '../App'

// search variants for multiple elements eg in List element:
// - getAllBy
// - queryAllBy
// - findAllBy

describe('App tests', () => {
  test('renders App component', async () => {
    render(<App/>)
    await waitFor(async () => {
      expect(await screen.findByText(/Signed in as/)).toBeInTheDocument()
    })
  })
})