import '../Layout/Layout.scss'
import './Projects.scss'
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters'
import { useState, useEffect, Fragment } from 'react'
import Loader from 'react-loaders'
import Pglife from '../../assets/images/pglife-index.png'
import foodOrder from '../../assets/images/food_order.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode, faDesktop } from '@fortawesome/free-solid-svg-icons'
import { SiJavascript } from 'react-icons/fa'


function Projects() {
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
      <div className="container projects-page">
        <h1 className="page-title">
          <AnimatedLetters
            letterClass={letterClass}
            strArray={['M', 'y', ' ', 'P', 'r', 'o', 'j', 'e', 'c', 't', 's']}
            idx={15}
          />
        </h1>
        <div id="projects-container">
          <div className="project">
            <img src={Pglife}></img>
            <div className="project-description">
              <h2>PGLife</h2>
              <p>
                PGLife is a responsive and interactive website designed to help
                students and/or working individuals look for rented rooms at the
                comfort of their home. The website provides all necessary
                details such as rent, amenities, photo references, testimonials,
                etc. to help improve customer interaction.
              </p>
              <h2>Technologies and Libraries used : </h2>
              <p>HTML5 , CSS3 , Javascript , PHP , DBMS , Bootstrap</p>
              <span>
              <FontAwesomeIcon id='icons' icon={faCode} />
              <FontAwesomeIcon id='icons' icon={faDesktop} /></span>
            </div>
          </div>
          <span id="divider" />
          <div className="project" style={{ flexDirection: 'row-reverse' }}>
            <img src={foodOrder}></img>
            <div className="project-description">
              <h2>React Meals</h2>
              <p>
                An interactive and responsive food ordering App made from the
                bottom up using ReactJS fundamentals. The page includes
                real-time item renewals, cart updates and monetary calculation.
              </p>
              <h2>Technologies and Libraries used : </h2>
              <p>ReactJS , CSS3, ContextAPI, FetchAPI</p>
            </div>
          </div>
        </div>{' '}
        <div className="alternative-projects">
          <h1>Alternate Projects</h1>
          <div className="alt-project-container">
            <div className="alt-projects">
              <h2>TO-DO List</h2>
              <p>
                An interactive TO-DO list made using <span>React</span>{' '}
                functional components, including features such as :
              </p>
              <ul>
                <li>Real-Time list update/removal</li>
                <li>Filter based on year</li>
                <li>Dynamic graph to improve user experience</li>
              </ul>
              <img src=''></img>
            </div>

            <div className="alt-projects">
              <h2>Black - Jack</h2>
              <p>
                Black-Jack game developed using <span>Python</span> offering
                playability to one or more players with computer as the dealer.
              </p>
              <ul>
                <li>Multiple player support</li>
                <li>Actual gameplay functionalities such as Hit or Stand</li>
                <li>Player bank managing player's balance.</li>
              </ul>
            </div>

            <div className="alt-projects">
              <h2>Tic-Tac-Toe</h2>
              <p>
                A turn based Tic-Tac-Toe game developed for two players using{' '}
                <span>Python</span> including features such as :
              </p>
              <ul>
                <li>Replayability</li>
                <li>Ability to choose turns and/or Markers</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <Loader type="pacman" />
    </Fragment>
  )
}

export default Projects
