import React from 'react'
import { render } from '@testing-library/react'
import NavigationLinks from './navigation-links'

describe('NavigationLinks', () => {
  test('renders News And Events', () => {
    const { getByText } = render(<NavigationLinks />)

    expect(getByText('News And Events'))
  })
})
