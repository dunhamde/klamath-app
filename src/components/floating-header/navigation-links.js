/* eslint-disable jsx-a11y/anchor-is-valid, jsx-a11y/no-static-element-interactions, jsx-a11y/click-events-have-key-events */
import React from 'react'
import styled from 'styled-components'

export const NavigationLinksList = styled.ul``
export const LinkSectionListItem = styled.li``
export const Dropdown = styled.div``
export const LinkContainer = styled.div``
export const DropdownLinksList = styled.ul``
export const DropdownContent = styled.div``

export const NavigationLinks = () => (
  <NavigationLinksList>
    <LinkSectionListItem>
      <Dropdown>
        <LinkContainer>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="http://klamathtribes.org/"
          >
            Home
          </a>
        </LinkContainer>
        <DropdownContent>
          <DropdownLinksList>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="http://klamathtribes.org/mission/"
            >
              Tribal Mission
            </a>
          </DropdownLinksList>
        </DropdownContent>
      </Dropdown>
    </LinkSectionListItem>
    <LinkSectionListItem>
      <Dropdown>
        <LinkContainer>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="http://klamathtribes.org/news/"
          >
            News And Events
          </a>
        </LinkContainer>
        <DropdownContent>
          <DropdownLinksList>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="http://klamathtribes.org/news/news/"
            >
              Newsletters
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="http://klamathtribes.org/news/tribal-news-and-events/press-release-2/"
            >
              Press Release
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="http://klamathtribes.org/news/restoration-celebration/"
            >
              The Klamath Tribes Restoration Celebration
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="http://klamathtribes.org/news/obituaries-3/"
            >
              Obituaries
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="http://klamathrestoration.gov/home"
            >
              KlamathRestoration.gov
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="http://klamathrestoration.gov/keep-me-informed/klamath-agreements"
            >
              Salmon Recovery
            </a>
          </DropdownLinksList>
        </DropdownContent>
      </Dropdown>
    </LinkSectionListItem>
    <LinkSectionListItem>
      <LinkContainer>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="http://klamathtribes.org/administration/"
        >
          Administration Departments
        </a>
      </LinkContainer>
    </LinkSectionListItem>
    <LinkSectionListItem>
      <Dropdown>
        <LinkContainer>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="http://klamathtribes.org/job-openings/"
          >
            Employment
          </a>
        </LinkContainer>
        <DropdownContent>
          <DropdownLinksList>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="http://klamathtribes.org/job-openings/"
            >
              Jobs
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="http://klamathtribes.org/contract-projects/"
            >
              Contract Projects RFQ
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="http://klamathtribes.org/administration/education-and-employment-jom/"
            >
              Education and Employment
            </a>
          </DropdownLinksList>
        </DropdownContent>
      </Dropdown>
    </LinkSectionListItem>
    <LinkSectionListItem>
      <LinkContainer>
        <a target="_blank" rel="noopener noreferrer" href="#">
          Members Area
        </a>
      </LinkContainer>
    </LinkSectionListItem>
    <LinkSectionListItem>
      <Dropdown>
        <LinkContainer>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="http://klamathtribes.org/language/"
          >
            Language
          </a>
        </LinkContainer>
        <DropdownContent>
          <DropdownLinksList>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="http://klamathtribes.org/word-of-the-day/"
            >
              Word of the Day!
            </a>
          </DropdownLinksList>
        </DropdownContent>
      </Dropdown>
    </LinkSectionListItem>
    <LinkSectionListItem>
      <Dropdown>
        <LinkContainer>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="http://klamathtribes.org/history/"
          >
            Tribal History
          </a>
        </LinkContainer>
        <DropdownContent>
          <DropdownLinksList>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="http://klamathtribes.org/tribal-records/"
            >
              Tribal Records
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="http://klamathtribes.org/history/historical-documents/"
            >
              Historical Documents
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="http://klamathtribes.org/history/constitution-2013/"
            >
              Constitution 2013
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="http://klamathtribes.org/treaty-of-1864/"
            >
              Treaty of 1864
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="http://klamathtribes.org/facts/"
            >
              Facts
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="http://klamathtribes.org/video-2/"
            >
              Video
            </a>
          </DropdownLinksList>
        </DropdownContent>
      </Dropdown>
    </LinkSectionListItem>
    <LinkSectionListItem>
      <Dropdown>
        <LinkContainer>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="http://klamathtribes.org/tribal-links/"
          >
            Tribal Permits And Schedules
          </a>
        </LinkContainer>
        <DropdownContent>
          <DropdownLinksList>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="http://klamathtribes.org/quail-trail-bus-schedule/"
            >
              Quail Trail Bus Schedule
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="http://klamathtribes.org/camping-permits/"
            >
              Camping Permits
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="http://klamathtribes.org/administration/natural-resources/"
            >
              Hunting and Fishing
            </a>
          </DropdownLinksList>
        </DropdownContent>
      </Dropdown>
    </LinkSectionListItem>
    <LinkSectionListItem>
      <LinkContainer>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="http://klamathtribes.org/contact-us/"
        >
          Contact Us
        </a>
      </LinkContainer>
    </LinkSectionListItem>
  </NavigationLinksList>
)

export default NavigationLinks
