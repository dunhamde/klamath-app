import React from 'react'

export const TopHeaderLinksList = () => {
  return (
    <ul>
      <li>
        <a
          target="_blank"
          rel="noopener noreferrer"
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
          rel="noopener noreferrer"
          onClick={() =>
            window.location.replace(
              'http://klamathtribes.org/history/',
            )
          }
        >
          History
        </a>
      </li>
      <li>
        <a
          target="_blank"
          rel="noopener noreferrer"
          onClick={() =>
            window.location.replace(
              'http://klamathtribes.org/administration/natural-resources/',
            )
          }
        >
          Hunting and Camping
        </a>
      </li>
      <li>
        <a
          target="_blank"
          rel="noopener noreferrer"
          onClick={() =>
            window.location.replace(
              'http://klamathtribes.org/contact-us/',
            )
          }
        >
          Contact Us
        </a>
      </li>
    </ul>
  )
}

export default TopHeaderLinksList
