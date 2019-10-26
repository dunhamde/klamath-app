import React, { Fragment } from 'react'
import styled from 'styled-components'
import BannerImgSource from './../../../public/klamathtribes1200.png'
import HeaderBackgroundImgSource from '../../../public/headerpic2.jpg'

const BannerImg = styled.img`
  position: absolute;
  justify-self: center;
`

const HeaderBackgroundImg = styled.img`
  flex: 1;
`

const HeaderContainer = styled.div`
  display: flex;
  position: relative;
  max-width: 100%;
`

const SiteNavigationList = styled.ul``

export const SiteHeader = () => {
  return (
    <Fragment>
      <HeaderContainer>
        <HeaderBackgroundImg src={HeaderBackgroundImgSource} />
        <BannerImg src={BannerImgSource} />
      </HeaderContainer>
      <SiteNavigationList>
        <li>
          <a
            target="_blank"
            onClick={() =>
              window.location.replace(
                'http://klamathtribes.org/news/',
              )
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
    </Fragment>
  )
}

export default SiteHeader
