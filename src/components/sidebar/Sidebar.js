import './Sidebar.scss'
import { Fragment, useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import Logo from '../../assets/images/logo-aj.png'
import LogoSubtitle from '../../assets/images/logo_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faHome,
  faUser,
  faEnvelope,
  faScrewdriverWrench,
  faBars,
  faClose,
  faSuitcase,
} from '@fortawesome/free-solid-svg-icons'
import {
  faFacebook,
  faGithub,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons'

function Sidebar() {
  const [width, setWidth] = useState(window.innerWidth)
  const breakpoint = 700
  const [showNav, setShowNav] = useState(false)

  // useEffect(() => {
  //   const handleResizeWindow = () => setWidth(window.innerWidth)

  //   window.addEventListener('resize', handleResizeWindow)

  //   return () => {
  //     window.removeEventListener('resize', handleResizeWindow)
  //   }
  // }, [])

  // const currentWidth = width <= breakpoint

  return (
    // mobile nav
    <Fragment>
      <div className="nav-bar">
        <Link className="logo" to="/">
          <img src={Logo} alt="logo" />
          <img className="sub-logo" src={LogoSubtitle} alt="logoSubtitle" />
        </Link>
        <nav className={showNav ? 'mobile-nav' : ''}>
          <NavLink
            onClick={() => setShowNav(false)}
            exact
            activeclassname="active"
            to="/"
          >
            <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
          </NavLink>


          <NavLink
            onClick={() => setShowNav(false)}
            activeclassname="active"
            className="about-link"
            to="/about"
          >
            <FontAwesomeIcon icon={faUser} />
          </NavLink>


          <NavLink
            onClick={() => setShowNav(false)}
            activeclassname="active"
            className="skills-link"
            to="/skills"
          >
            <FontAwesomeIcon icon={faScrewdriverWrench} />
          </NavLink>


          <NavLink
            onClick={() => setShowNav(false)}
            activeclassname="active"
            className="projects-link"
            to="/projects"
          >
            <FontAwesomeIcon icon={faSuitcase} />
          </NavLink>

          <NavLink
            onClick={() => setShowNav(false)}
            activeclassname="active"
            className="contact-link"
            to="/contact"
          >
            <FontAwesomeIcon icon={faEnvelope} />
          </NavLink>


          <FontAwesomeIcon
            onClick={() => setShowNav(false)}
            icon={faClose}
            color="#19bef1"
            size="3x"
            className="close-icon"
          />
        </nav>

        <ul>
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/anshnj/"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/AnshNJ?tab=repositories"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.facebook.com/ansh.jain.3382/"
            >
              <FontAwesomeIcon icon={faFacebook} />
            </a>
          </li>
        </ul>
        <FontAwesomeIcon
          onClick={() => {
            setShowNav(true)
          }}
          icon={faBars}
          color="#19bef1"
          size="3x"
          className="hamburger-icon"
        />
      </div>
    </Fragment>
  )
}

export default Sidebar
