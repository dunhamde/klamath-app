import React from 'react'

export const TopHeaderSocialLinksList = () => {
  return (
    <ul>
      <li>
        <a
          target="_blank"
          onClick={() =>
            window.location.replace(
              'http://klamathtribes.org/tribal-government/tribal-council/',
            )
          }
        >
          Klamath Tribal Council
        </a>
      </li>
      <li>
        <a
          target="_blank"
          onClick={() =>
            window.location.replace(
              'http://klamathtribes.org/history/',
            )
          }
        >
          History
        </a>
      </li>
    </ul>
  )
}

export default TopHeaderLinksList
