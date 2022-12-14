import React from 'react'
import Link from 'next/link'

import PropTypes from 'prop-types'

const NavigationLinks = (props) => {
  return (
    <>
      <nav className={`navigation-links-nav ${props.rootClassName} `}>
        <span className="navbar-link">{props.text}</span>
        <span className="navigation-links-text1 navbar-link">
          {props.text1}
        </span>
        <Link href="/local">
          <a className="navigation-links-link navbar-link">{props.text2}</a>
        </Link>
        <span className="navigation-links-text2 navbar-link">
          {props.text3}
        </span>
      </nav>
      <style jsx>
        {`
          .navigation-links-nav {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .navigation-links-text1 {
            margin-left: var(--dl-space-space-twounits);
          }
          .navigation-links-link {
            margin-left: var(--dl-space-space-twounits);
            text-decoration: none;
          }
          .navigation-links-text2 {
            margin-left: var(--dl-space-space-twounits);
          }

          .navigation-links-root-class-name10 {
            align-self: center;
          }
          .navigation-links-root-class-name11 {
            align-self: center;
          }
          @media (max-width: 991px) {
            .navigation-links-root-class-name10 {
              margin: 7px;
            }
          }
          @media (max-width: 767px) {
            .navigation-links-nav {
              align-items: flex-start;
              flex-direction: column;
            }
            .navigation-links-text1 {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
            .navigation-links-link {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
            .navigation-links-text2 {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
          }
          @media (max-width: 479px) {
            .navigation-links-nav {
              align-items: center;
            }
          }
        `}
      </style>
    </>
  )
}

NavigationLinks.defaultProps = {
  text2: 'Fale conosco',
  text3: 'Blog',
  rootClassName: '',
  text: 'Home',
  text1: 'Quem somos',
}

NavigationLinks.propTypes = {
  text2: PropTypes.string,
  text3: PropTypes.string,
  rootClassName: PropTypes.string,
  text: PropTypes.string,
  text1: PropTypes.string,
}

export default NavigationLinks
