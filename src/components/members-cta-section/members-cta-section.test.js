import React from 'react'
import { render } from '@testing-library/react'
import MembersCtaSection from './members-cta-section'

describe('FloatingHeaderLinksList', () => {
  test('renders News And Events', () => {
    const { getByText } = render(<MembersCtaSection />)

    expect(getByText('Klamath Tribes Strategic Action Plans'))
  })
})
