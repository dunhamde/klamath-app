import React from 'react'
import YouTubeLogo from '../../../public/youtube-logo-hd-8.png'
import FacebookLogo from '../../../public/fb-logo.png'

export const TopHeaderSocialLinksList = () => {
  return (
    <div>
      <img
        src={YouTubeLogo}
        onClick={() =>
          window.location.replace(
            'https://www.youtube.com/channel/UCB7lZfkGQyVB7fJ2iHmJDaQ',
          )
        }
      />

      <img
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
