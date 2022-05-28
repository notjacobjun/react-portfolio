import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
// @ts-ignore
import SelfPortrait from '../../assets/images/Self-portrait.png'
import './index.scss'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  const nameArray = [' ', 'J', 'a', 'c', 'o', 'b', ' ', 'J', 'u', 'n']
  const jobArray = [
    'S',
    'o',
    'f',
    't',
    'w',
    'a',
    'r',
    'e',
    ' ',
    'E',
    'n',
    't',
    'u',
    's',
    'i',
    'a',
    's',
    't'
  ]

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _2`}>i,</span>
            <br />
            <span className={`${letterClass} _3`}>I</span>
            <span className={`${letterClass} _4`}>'m</span>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={16}
            />
          </h1>
          <h2> Machine Learning Practioner / Web Developer / Mobile App Developer</h2>
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
        </div>
        <svg id="blob1" className="blob" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="#005B95" d="M70.4,-16.6C79.7,5.8,67.8,41.4,46.5,54.7C25.2,68,-5.6,59,-26.9,42.3C-48.3,25.5,-60.2,1,-54.2,-16.9C-48.1,-34.8,-24.1,-46.1,3.2,-47.2C30.5,-48.2,61.1,-39,70.4,-16.6Z" transform="translate(100 100)" />
        </svg>
        <svg className="blob" id="blob2" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="#393E46" d="M58.7,-17.7C64.8,0,51,25.6,30.9,39.5C10.8,53.3,-15.6,55.5,-33.5,43.2C-51.4,30.9,-60.8,4,-53.8,-14.7C-46.8,-33.5,-23.4,-44.1,1.4,-44.6C26.2,-45.1,52.5,-35.3,58.7,-17.7Z" transform="translate(100 100)" />
        </svg>
        <img className="self-portrait" src={SelfPortrait} alt="Profile picture" />
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Home