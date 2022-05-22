import './index.scss'
import LogoS from '../../assets/images/logo-s.png'
import LogoSubtitle from '../../assets/images/logo_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faLinkedin,
  faGithub,
} from '@fortawesome/free-brands-svg-icons'
import { faHome, faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { Link, NavLink } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className="nav-bar">
      {/* <Link className="logo" to="/"> */}
      {/* TODO replace this main logo */}
      {/* <img src={LogoS} alt="Logo" /> */}
      {/* TODO replace this subtitle logo with personalized logo */}
      {/* <img className="sub-logo" src={LogoSubtitle} alt="jacob" />
      {/* </Link> */}
      <nav>
        <NavLink exact="true" activeclassname="active" to="/">
          <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
        </NavLink>
        <NavLink activeclassname="active" className="about-link" to="/about">
          <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
        </NavLink>
        <NavLink
          activeclassname="active"
          className="contact-link"
          to="/contact"
        >
          <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
        </NavLink>
      </nav>
      <ul>
        <li>
          <a
            href="https://www.linkedin.com/in/jacob-jun/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon id="company-icon" icon={faLinkedin} />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/notjacobjun"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon id="company-icon" icon={faGithub} />
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar