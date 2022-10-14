import './Skills.scss'
import '../Layout/Layout.scss'
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters'
import { useState, useEffect, Fragment } from 'react'
import Loader from 'react-loaders'

function Skills() {
  const [letterClass, setLetterClass] = useState('text-animate')

  //   effect
  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)

    return () => {
      clearTimeout(timer)
    }
  }, [])

  return (
    <Fragment>
      <div className="container skill-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['M', 'y', ' ', 'S', 'k', 'i', 'l', 'l', 's']}
              idx={15}
            />
          </h1>
          <p>
            I love to keep a variety of tools in my tech stack. I also make sure
            to be good at using one tool before moving on to the next. I keep
            myself up to date with the latest technologies around.
          </p>
        </div>
        <div class="skills">
          <div class="skills-bar">
            <div class="bar">
              <div class="info">
                <span>HTML/CSS</span>
              </div>
              <div class="progress-line">
                <span class="html"></span>
              </div>
              <div class="bar">
                <div class="info">
                  <span>ReactJS</span>
                </div>
                <div class="progress-line">
                  <span class="css"></span>
                </div>
                <div class="bar">
                  <div class="info">
                    <span>Python</span>
                  </div>
                  <div class="progress-line">
                    <span class="bootstrap"></span>
                  </div>
                  <div class="bar">
                    <div class="info">
                      <span>Vanilla Javascript</span>
                    </div>
                    <div class="progress-line">
                      <span class="javascript"></span>
                    </div>
                    <div class="bar">
                      <div class="info">
                        <span>C Language</span>
                      </div>
                      <div class="progress-line">
                        <span class="c"></span>
                      </div>
                    </div>
                    <div class="bar">
                      <div class="info">
                        <span>Illustration</span>
                      </div>
                      <div class="progress-line">
                        <span class="illustration"></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Loader type="pacman" />
    </Fragment>
  )
}

export default Skills
