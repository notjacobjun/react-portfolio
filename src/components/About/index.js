import { useEffect, useState } from 'react'
import {
  faAndroid,
  faAws,
  faJava,
  faJsSquare,
  faPython,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import AnimatedLetters from '../AnimatedLetters'
import Loader from 'react-loaders'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            I'm an ambitious and motivated developer who is passionate about using my skills to create a positive
            impact on the world. I have a strong background in software development with an interest towards Machine Learning
            and Mobile development.
          </p>
          <p
            // @ts-ignore
            align="LEFT">
            Personally, I am a compassionate and brave person who is always curious about engineering and
            problem solving.
          </p>
          <p>
            My interests mainly include programming during my free time, however I also enjoy hiking, weight lifting, and
            hanging out with my friends!
          </p>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faJava} color="#5382a1" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faPython} color="#FFD43B" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faAndroid} color="#3DDC84" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faAws} color="#FF9900" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About