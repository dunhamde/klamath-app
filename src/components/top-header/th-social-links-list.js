/* eslint-disable jsx-a11y/no-noninteractive-element-interactions, jsx-a11y/click-events-have-key-events */
import React from 'react'
import YouTubeLogo from '../../../public/youtube-logo-hd-8.png'
import FacebookLogo from '../../../public/fb-logo.png'

export const TopHeaderSocialLinksList = () => {
  return (
    <div>
      <img
        alt="youtube"
        src={YouTubeLogo}
        onClick={() =>
          window.location.replace(
            'https://www.youtube.com/channel/UCB7lZfkGQyVB7fJ2iHmJDaQ',
          )
        }
      />

      <img
        alt="facebook"
        src={FacebookLogo}
        onClick={() =>
          window.location.replace(
            'https://www.facebook.com/KlamathTribes',
          )
        }
      />
    </div>
  )
}

export default TopHeaderSocialLinksList
