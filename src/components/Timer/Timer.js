import { useState, useEffect } from 'react'
import './timer.scss'
import arrowImg from '../../resources/img/arrow.svg'

const Timer = ({ timer, onTimerIncrement, onTimerDecrement, onTimerChange, timerRunning, timerPaused}) => {

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

  const onArrowClick = (timerType, operationType) => {

    if (!arrowsDisabled) {
      onTimerChange(timerType, operationType)
    }
  }

  const disabledArrowsStyle = arrowsDisabled ? {opacity: 0, cursor: 'auto'} : {opacity: 1, cursor: 'pointer'};
  const timerCursorStyle = timerRunning ? {cursor: 'auto'} : {cursor: 'pointer'}
  
  return (
    <>
      <div className="pomodoro__timer-wrap">
        <div className="arrows">
          <img onClick={() => {onArrowClick('minutes', 1)}} className="arrows__item arrows-up" style={disabledArrowsStyle} src={arrowImg} alt="arrow"/>
          <img onClick={() => {onArrowClick('seconds', 1)}} className="arrows__item arrows-up" style={disabledArrowsStyle} src={arrowImg} alt="arrow"/>
        </div>
        <div onClick={setArrowsEnabled} className="pomodoro__timer" style={timerCursorStyle}>
          { timer }
        </div>
        <div className="arrows">
          <img onClick={() => {onArrowClick('minutes', -1)}} className="arrows__item arrows-down" style={disabledArrowsStyle} src={arrowImg} alt="arrow"/>
          <img onClick={() => {onArrowClick('seconds', -1)}} className="arrows__item arrows-down" style={disabledArrowsStyle} src={arrowImg} alt="arrow"/>
        </div>
      </div>
    </>
  )
} 

export default Timer 