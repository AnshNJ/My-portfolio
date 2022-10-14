import './Home.scss'
import '../Layout/Layout.scss'
import { Link } from 'react-router-dom'
import LogoTitle from '../../assets/images/logo-s.png'
import { useEffect, useState , Fragment} from 'react'
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters'
import Logo from './Logo/Logo'
import Loader from 'react-loaders'

function Home() {
  const [letterClass, setLetterClass] = useState('text-animate')
  const nameArray = ['A','n','s','h',' ','J','a','i','n']
  const jobArray = ['A',' ','W','e','b','-','D','e','v','e','l','o','p','e','r']


  useEffect(() => {
    const timer = setTimeout(() => {
        setLetterClass('text-animate-hover')
    },4000);

    return () => {
        clearTimeout(timer);
    }
  },[])

  return (
    <Fragment>
    <div className="container home-page">
      <div className="text-zone">
        <h1>
          <span className={letterClass}>H</span>
          <span className={`${letterClass} _12`}>i,</span>
          <br />
          <span className={`${letterClass} _13`}>I</span>
          <span className={`${letterClass} _14`}>'m</span>

          <img src={LogoTitle} alt="developer" />
          <AnimatedLetters
            letterClass={letterClass}
            strArray={nameArray}
            idx={15}
          />
          <br />
          <AnimatedLetters
            letterClass={letterClass}
            strArray={jobArray}
            idx={24}
          />
        </h1>
        <h2>Frontend Developer / UI/UX Designer / Artist</h2>
        <Link to="/contact" className="flat-button">
          CONTACT ME
        </Link>
      </div>
      <Logo />
    </div>
    <Loader type='pacman' />
    </Fragment>
  )
}

export default Home
