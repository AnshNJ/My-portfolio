import './MobileSidebar.scss'
import { Fragment, useEffect, useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { faBars , faClose } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function MobileSidebar(props) {
  const [mobileNav, setMobileNav] = useState(false)

  function mobileNavHandler() {
    setMobileNav(true)
    
  }
  props.onShow(mobileNav)

  return (
    <Fragment>
      <FontAwesomeIcon
        onClick={mobileNavHandler}
        icon={faBars}
        color="#19bef1"
        size="3x"
        className="hamburger-icon"
      />
    </Fragment>
  )
}

export default MobileSidebar
