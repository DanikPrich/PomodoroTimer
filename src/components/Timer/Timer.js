import { useState, useEffect } from 'react'
import './timer.scss'
import arrowImg from '../../resources/img/arrow.svg'

const Timer = ({ timer, onTimerIncrement, onTimerDecrement, timerRunning, timerPaused}) => {

  const [arrowsDisabled, setArrowsDisabled] = useState(true)

  useEffect(() => {
    if(timerRunning || timerPaused) {
      setArrowsDisabled(true)
    }
  }, [timerRunning, timerPaused] )
  

  const setArrowsEnabled = () => {
    if(!(timerRunning || timerPaused)) {
      setArrowsDisabled(false)
    }
  }
  const disabledArrowsStyle = arrowsDisabled ? {opacity: 0} : {opacity: 1};
  
  return (
    <>
      <div className="pomodoro__timer-wrap">
        <div className="arrows">
          <img onClick={() => {onTimerIncrement('minutes')}} className="arrows__item arrows-up" style={disabledArrowsStyle} src={arrowImg} alt="arrow"/>
          <img onClick={() => {onTimerIncrement('seconds')}} className="arrows__item arrows-up" style={disabledArrowsStyle} src={arrowImg} alt="arrow"/>
        </div>
        <div onClick={setArrowsEnabled} className="pomodoro__timer">
          { timer }
        </div>
        <div className="arrows">
          <img onClick={() => {onTimerDecrement('minutes')}} className="arrows__item arrows-down" style={disabledArrowsStyle} src={arrowImg} alt="arrow"/>
          <img onClick={() => {onTimerDecrement('seconds')}} className="arrows__item arrows-down" style={disabledArrowsStyle} src={arrowImg} alt="arrow"/>
        </div>
      </div>
    </>
  )
} 

export default Timer 