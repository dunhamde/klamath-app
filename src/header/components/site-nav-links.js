import React from 'react'
import styled from 'styled-components'

const SiteNavigationList = styled.ul`
  display: flex;
  height: 100px;
  background-color: red;
  li {
    background-color: orange;
    list-style: none;
    border: 2px solid black;
    padding: 8px;
  }
`

export const SiteNavLinks = () => {
  return (
    <SiteNavigationList>
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
    </SiteNavigationList>
  )
}

export default SiteNavLinks
