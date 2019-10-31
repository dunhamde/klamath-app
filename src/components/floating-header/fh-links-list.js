import React from 'react'

export const FloatingHeaderLinksList = () => {
  return (
    <ul>
      <li>
        <a
          target="_blank"
          onClick={() =>
            window.location.replace('http://klamathtribes.org/news/')
          }
        >
          News And Events
        </a>
      </li>
      <li>
        <a
          target="_blank"
          onClick={() =>
            window.location.replace(
              'http://klamathtribes.org/administration/',
            )
          }
        >
          Tribal Departments
        </a>
      </li>
      <li>
        <a
          target="_blank"
          onClick={() =>
            window.location.replace(
              'http://klamathtribes.org/job-openings/',
            )
          }
        >
          Employment
        </a>
      </li>
      <li>
        <a
          target="_blank"
          onClick={() =>
            window.location.replace(
              'http://klamathtribes.org/language/',
            )
          }
        >
          Language
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
          Tribal History
        </a>
      </li>
      <li>
        <a
          target="_blank"
          onClick={() =>
            window.location.replace(
              'http://klamathtribes.org/tribal-links/',
            )
          }
        >
          Tribal Permits And Schedules
        </a>
      </li>
      <li>
        <a
          target="_blank"
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

export default FloatingHeaderLinksList