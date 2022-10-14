import './Soundbar.scss'
import React, { useState, useEffect, useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faSheetPlastic,
  faVolumeHigh,
  faVolumeXmark,
} from '@fortawesome/free-solid-svg-icons'
import Music from '../../assets/audio/music.mp3'

function Soundbar() {
  const ref = useRef(null)
  const [music, setMusic] = useState(false)

  function soundPlayHandler() {
    setMusic(!music)
    if (!music) {
      ref.current.play()
    } else {
      ref.current.pause()
    }
  }


  return (
    <div className="soundbar">
      {music ? (
        <span onClick={soundPlayHandler}>
          <FontAwesomeIcon icon={faVolumeHigh} />
        </span>
      ) : (
        <span onClick={soundPlayHandler}>
          <FontAwesomeIcon icon={faVolumeXmark} />
        </span>
      )}
      <audio src={Music} ref={ref} loop />
    </div>
  )
}

export default Soundbar
