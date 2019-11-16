import React from 'react'
import { render } from '@testing-library/react'
import FloatingHeaderLinksList from './fh-links-list'

describe('FloatingHeaderLinksList', () => {
  test('renders News And Events', () => {
    const { getByText } = render(<FloatingHeaderLinksList />)

    expect(getByText('News And Events'))
  })
})
