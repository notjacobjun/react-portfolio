import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faLinkedin,
  faGithub,
} from '@fortawesome/free-brands-svg-icons'
import { faHome, faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom'
import React, { useState } from 'react'


const Sidebar = () => {

  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');

  const switchTheme = () => {
    const newTheme = localStorage.getItem('theme') === JSON.stringify('light') ? JSON.stringify('dark') : JSON.stringify('light');
    localStorage.setItem('theme', newTheme);
    setTheme(newTheme);
    window.location.reload(); // Force reload the page to update the theme
  }

  return (
    <div className="nav-bar">
      {/* <Link className="logo" to="/"> */}
      {/* TODO replace this main logo */}
      {/* <img src={LogoS} alt="Logo" /> */}
      {/* TODO replace this subtitle logo with personalized logo */}
      {/* <img className="sub-logo" src={LogoSubtitle} alt="jacob" />
      {/* </Link> */}
      <div className='theme-toggle-container'>
        <input checked={theme ? JSON.stringify('dark') === localStorage.getItem('theme') || theme === 'dark' : false} onClick={switchTheme} type="checkbox" className="checkbox" id="checkbox" />
        <label htmlFor="checkbox" className="label">
          <i className="fas fa-moon"></i>
          <i className='fas fa-sun'></i>
          <div className='ball' />
        </label>
      </div>
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