import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import ContactButton from './ContactButton'
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
              idx={5}
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
        <img className="self-portrait" src={SelfPortrait} alt="Profile picture" />
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Home