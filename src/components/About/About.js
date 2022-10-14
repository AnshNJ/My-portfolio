import AnimatedLetters from '../AnimatedLetters/AnimatedLetters'
import '../Layout/Layout.scss'
import { useState , useEffect , Fragment } from 'react'
import Loader from 'react-loaders';

function About() {

  const [letterClass, setLetterClass] = useState('text-animate');


//   effect
  useEffect(() => {
    const timer = setTimeout(() => {
        setLetterClass('text-animate-hover')
    },3000);

    return () => {
        clearTimeout(timer);
    }
  },[])

//   return function

  return (
    <Fragment>
    <div className="container about-page">
      <div className="text-zone">
        <h1>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={['A', 'b', 'o', 'u', 't', ' ', 'M', 'e']}
            idx={15}
          />
        </h1>
        <p>
          I am a passionate and ambitious <span style={{color: '#19bef1'}}>Front-end Developer</span> looking to work
          for an established IT company providing the opportunity to work with
          latest technologies with challenging and diverse work scenarios!
        </p>
        <p>
          I've worked with various technologies namely HTML, CSS/SCSS, React.JS
          , Python , PHP , DBMS and planning to learn more on the go!
        </p>
        <p>
          I am always entusiastic, curious and perpetually working towards
          improving my chops one design at a time.<br/> As the saying goes : <span style={{color: '#19bef1'}}>"Mile by
          mile, one hits the Milestone."</span>
        </p>
      </div>
    </div>
    <Loader type='pacman'/>
    </Fragment>
  )
}

export default About;
