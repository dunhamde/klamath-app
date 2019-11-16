import React from 'react'
import { render } from '@testing-library/react'
import Carousel from './carousel'

describe('Carousel', () => {
  test('renders News And Events', () => {
    const { getByText } = render(<Carousel />)

    expect(getByText('Read More...'))
  })
})
