import './Logo.scss'
import LogoS from '../../../assets/images/logo-aj.png'
import { useEffect, useRef } from 'react'
import gsap from 'gsap-trial'
import DrawSVGPlugin from 'gsap-trial/DrawSVGPlugin'

function Logo() {
  const solidLogoRef = useRef()

  return (
    <div className="logo-container floating">
      <img ref={solidLogoRef} className="solid-logo" src={LogoS} alt="S" />
    </div>
  )
}

export default Logo
